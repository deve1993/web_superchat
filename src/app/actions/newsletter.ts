"use server";

import { headers } from "next/headers";
import { newsletterSchema } from "@/lib/validators";
import { sendMail, newsletterNotificationHtml } from "@/lib/mail";

const ODOO_URL = process.env.ODOO_URL ?? "https://fl1.cz/odoo";
const ODOO_API_KEY = process.env.ODOO_API_KEY ?? "";
const ODOO_ENDPOINT_SLUG = process.env.ODOO_ENDPOINT_SLUG ?? "lead";

const RATE_WINDOW_MS = 60_000;
const RATE_MAX = 2;
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

export type NewsletterFormState = {
  success: boolean;
  message: string;
};

export async function submitNewsletter(
  _prev: NewsletterFormState,
  formData: FormData
): Promise<NewsletterFormState> {
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

  const result = newsletterSchema.safeParse({
    email: (formData.get("email") as string)?.trim() ?? "",
  });

  if (!result.success) {
    return { success: false, message: result.error.issues[0].message };
  }

  const { email } = result.data;

  /* Build Odoo lead payload */
  try {
    const body = {
      name: `[SuperChat Newsletter] ${email}`,
      email_from: email,
      description: "Iscrizione newsletter dal sito SuperChat",
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
        console.error("[newsletter] Odoo error:", res.status, text);
      }
    }

    try {
      await sendMail({
        subject: `[SuperChat] Nuova iscrizione newsletter: ${email}`,
        html: newsletterNotificationHtml(email),
      });
    } catch (mailErr) {
      console.error("[newsletter] Email send error:", mailErr);
    }

    return {
      success: true,
      message: "Iscrizione completata!",
    };
  } catch (err) {
    console.error("[newsletter] Exception:", err);
    return {
      success: false,
      message: "Errore di connessione. Riprova.",
    };
  }
}
