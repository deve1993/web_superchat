import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const EMAIL_FROM = process.env.EMAIL_FROM ?? "noreply@fl1.it";
const EMAIL_TO = process.env.EMAIL_TO ?? "devodoo@fl1.it";

type SendMailOptions = {
  to?: string;
  subject: string;
  html: string;
  replyTo?: string;
};

export async function sendMail({ to, subject, html, replyTo }: SendMailOptions) {
  return transporter.sendMail({
    from: `"SuperChat" <${EMAIL_FROM}>`,
    to: to ?? EMAIL_TO,
    subject,
    html,
    replyTo,
  });
}

export function contactNotificationHtml(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website_url?: string;
  pacchetto?: string;
  message: string;
}) {
  const rows = [
    ["Nome", data.name],
    ["Email", data.email],
    data.phone ? ["Telefono", data.phone] : null,
    data.company ? ["Azienda", data.company] : null,
    data.website_url ? ["Sito web", data.website_url] : null,
    data.pacchetto ? ["Pacchetto", data.pacchetto] : null,
  ]
    .filter(Boolean)
    .map(
      (row) =>
        `<tr><td style="padding:8px 12px;font-weight:600;color:#4F60FA;white-space:nowrap;vertical-align:top">${row![0]}</td><td style="padding:8px 12px;color:#333">${row![1]}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#00031C;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;color:#DBE3FF;font-size:20px">Nuova Richiesta da SuperChat</h1>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">
        <table style="width:100%;border-collapse:collapse">
          ${rows}
        </table>
        <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e5e7eb">
          <p style="margin:0 0 8px;font-weight:600;color:#4F60FA">Messaggio</p>
          <p style="margin:0;color:#333;white-space:pre-wrap">${data.message}</p>
        </div>
      </div>
      <div style="background:#00031C;padding:16px 32px;border-radius:0 0 12px 12px;text-align:center">
        <p style="margin:0;color:#73799B;font-size:12px">SuperChat per Odoo 18 &mdash; Persevida es</p>
      </div>
    </div>
  `;
}

export function newsletterNotificationHtml(email: string) {
  return `
    <div style="font-family:system-ui,-apple-system,sans-serif;max-width:600px;margin:0 auto">
      <div style="background:#00031C;padding:24px 32px;border-radius:12px 12px 0 0">
        <h1 style="margin:0;color:#DBE3FF;font-size:20px">Nuova Iscrizione Newsletter</h1>
      </div>
      <div style="background:#f9fafb;padding:24px 32px;border:1px solid #e5e7eb;border-top:none">
        <p style="margin:0;color:#333">Nuovo iscritto: <strong>${email}</strong></p>
      </div>
      <div style="background:#00031C;padding:16px 32px;border-radius:0 0 12px 12px;text-align:center">
        <p style="margin:0;color:#73799B;font-size:12px">SuperChat per Odoo 18 &mdash; Persevida es</p>
      </div>
    </div>
  `;
}
