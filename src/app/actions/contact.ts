"use server";

const ODOO_URL = process.env.ODOO_URL ?? "https://fl1.cz/odoo";
const ODOO_API_KEY = process.env.ODOO_API_KEY ?? "";
const ODOO_ENDPOINT_SLUG = process.env.ODOO_ENDPOINT_SLUG ?? "lead";

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const pacchetto = (formData.get("pacchetto") as string)?.trim() || "";
  const message = (formData.get("message") as string)?.trim();

  if (!name || name.length < 2) {
    return { success: false, message: "Inserisci il tuo nome (min. 2 caratteri)." };
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, message: "Inserisci un'email valida." };
  }
  if (!message || message.length < 10) {
    return { success: false, message: "Il messaggio deve avere almeno 10 caratteri." };
  }

  try {
    const description = [
      pacchetto ? `Pacchetto: ${pacchetto}` : "",
      message,
    ]
      .filter(Boolean)
      .join("\n\n");

    const body = {
      name: `[SuperChat Web] ${name}`,
      contact_name: name,
      email_from: email,
      description,
    };

    if (!ODOO_API_KEY) {
      console.warn("[contact] ODOO_API_KEY non configurata — skip invio a Odoo");
      console.log("[contact] Dati form:", body);
      return {
        success: true,
        message: "Grazie! Ti ricontatteremo al piu' presto.",
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
      message: "Grazie! Ti ricontatteremo al piu' presto.",
    };
  } catch (err) {
    console.error("[contact] Exception:", err);
    return {
      success: false,
      message: "Errore di connessione. Riprova tra qualche istante.",
    };
  }
}
