"use server";

import { headers } from "next/headers";
import { contactFormSchema } from "@/lib/validators";
import { sendMail, contactNotificationHtml } from "@/lib/mail";

const ODOO_URL = process.env.ODOO_URL ?? "https://fl1.cz/odoo";
const ODOO_API_KEY = process.env.ODOO_API_KEY ?? "";
const ODOO_ENDPOINT_SLUG = process.env.ODOO_ENDPOINT_SLUG ?? "lead";
const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY ?? "";
const RECAPTCHA_SCORE_THRESHOLD = 0.5;

/* ── Rate limiter (in-memory, per IP) ──────────────────────────── */
const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 3;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );
  if (timestamps.length >= RATE_MAX) {
    submissions.set(ip, timestamps);
    return true;
  }
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return false;
}

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const honeypot = (formData.get("website") as string)?.trim();
  if (honeypot) {
    return { success: true, message: "Grazie! Ti ricontatteremo al più presto." };
  }

  if (RECAPTCHA_SECRET_KEY) {
    const recaptchaToken = (formData.get("recaptchaToken") as string)?.trim();
    if (!recaptchaToken) {
      return { success: false, message: "Verifica reCAPTCHA mancante. Ricarica la pagina e riprova." };
    }

    try {
      const recaptchaRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: RECAPTCHA_SECRET_KEY,
          response: recaptchaToken,
        }),
      });

      const recaptchaData = await recaptchaRes.json();

      if (!recaptchaData.success || recaptchaData.score < RECAPTCHA_SCORE_THRESHOLD) {
        console.warn("[contact] reCAPTCHA failed:", recaptchaData);
        return { success: false, message: "Verifica anti-spam fallita. Riprova." };
      }
    } catch (err) {
      console.error("[contact] reCAPTCHA verification error:", err);
      return { success: false, message: "Errore nella verifica anti-spam. Riprova." };
    }
  }

  const headersList = await headers();
  const ip =
    headersList.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    headersList.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: "Troppe richieste. Riprova tra un minuto.",
    };
  }

  const raw = {
    name: (formData.get("name") as string)?.trim() ?? "",
    email: (formData.get("email") as string)?.trim() ?? "",
    phone: (formData.get("phone") as string)?.trim() || "",
    company: (formData.get("company") as string)?.trim() || "",
    website_url: (formData.get("website_url") as string)?.trim() || "",
    pacchetto: (formData.get("pacchetto") as string)?.trim() || "",
    message: (formData.get("message") as string)?.trim() ?? "",
    privacy: formData.get("privacy") as string,
  };

  const result = contactFormSchema.safeParse(raw);
  if (!result.success) {
    const firstIssue = result.error.issues[0];
    return { success: false, message: firstIssue.message };
  }

  const { name, email, phone, company, website_url, pacchetto, message } = result.data;

  try {
    const descriptionParts = [
      company ? `Azienda: ${company}` : "",
      phone ? `Telefono: ${phone}` : "",
      website_url ? `Sito: ${website_url}` : "",
      pacchetto ? `Pacchetto: ${pacchetto}` : "",
      "",
      message,
    ];

    const body = {
      name: `[SuperChat Web] ${name}`,
      contact_name: name,
      email_from: email,
      phone: phone || undefined,
      website: website_url || undefined,
      description: descriptionParts.filter(Boolean).join("\n"),
    };

    if (ODOO_API_KEY) {
      const res = await fetch(`${ODOO_URL}/api/crm/${ODOO_ENDPOINT_SLUG}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${ODOO_API_KEY}`,
        },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        console.error("[contact] Odoo error:", res.status, text);
      }
    }

    try {
      await sendMail({
        subject: `[SuperChat] Nuova richiesta da ${name}`,
        html: contactNotificationHtml({ name, email, phone, company, website_url, pacchetto, message }),
        replyTo: email,
      });
    } catch (mailErr) {
      console.error("[contact] Email send error:", mailErr);
    }

    return {
      success: true,
      message: "Grazie! Ti ricontatteremo al più presto.",
    };
  } catch (err) {
    console.error("[contact] Exception:", err);
    return {
      success: false,
      message: "Errore di connessione. Riprova tra qualche istante.",
    };
  }
}
