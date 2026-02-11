"use server";

import { headers } from "next/headers";

const ODOO_URL = process.env.ODOO_URL ?? "https://fl1.cz/odoo";
const ODOO_API_KEY = process.env.ODOO_API_KEY ?? "";
const ODOO_ENDPOINT_SLUG = process.env.ODOO_ENDPOINT_SLUG ?? "lead";

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

/* ── Types ─────────────────────────────────────────────────────── */
export type ContactFormState = {
  success: boolean;
  message: string;
};

/* ── Validation helpers ────────────────────────────────────────── */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE_RE = /^[+]?[\d\s\-().]{6,20}$/;

/* ── Server Action ─────────────────────────────────────────────── */
export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  /* Honeypot — bots fill hidden fields */
  const honeypot = (formData.get("website") as string)?.trim();
  if (honeypot) {
    return { success: true, message: "Grazie! Ti ricontatteremo al più presto." };
  }

  /* Rate limiting */
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

  /* Extract fields */
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const phone = (formData.get("phone") as string)?.trim() || "";
  const company = (formData.get("company") as string)?.trim() || "";
  const pacchetto = (formData.get("pacchetto") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim();
  const privacy = formData.get("privacy");

  /* Validation */
  if (!name || name.length < 2) {
    return { success: false, message: "Inserisci il tuo nome (min. 2 caratteri)." };
  }
  if (!email || !EMAIL_RE.test(email)) {
    return { success: false, message: "Inserisci un'email valida." };
  }
  if (phone && !PHONE_RE.test(phone)) {
    return { success: false, message: "Numero di telefono non valido." };
  }
  if (!message || message.length < 10) {
    return { success: false, message: "Il messaggio deve avere almeno 10 caratteri." };
  }
  if (!privacy) {
    return { success: false, message: "Devi accettare la privacy policy per procedere." };
  }

  /* Build Odoo lead payload */
  try {
    const descriptionParts = [
      company ? `Azienda: ${company}` : "",
      phone ? `Telefono: ${phone}` : "",
      pacchetto ? `Pacchetto: ${pacchetto}` : "",
      "",
      message,
    ];

    const body = {
      name: `[SuperChat Web] ${name}`,
      contact_name: name,
      email_from: email,
      phone: phone || undefined,
      description: descriptionParts.filter(Boolean).join("\n"),
    };

    if (!ODOO_API_KEY) {
      console.warn("[contact] ODOO_API_KEY non configurata — skip invio a Odoo");
      console.log("[contact] Dati form:", body);
      return {
        success: true,
        message: "Grazie! Ti ricontatteremo al più presto.",
      };
    }

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
      return {
        success: false,
        message: "Errore nell'invio. Riprova tra qualche istante.",
      };
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
