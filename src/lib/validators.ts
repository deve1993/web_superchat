import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Inserisci il tuo nome (min. 2 caratteri)."),
  email: z.string().email("Inserisci un'email valida."),
  phone: z
    .string()
    .regex(/^[+]?[\d\s\-().]{6,20}$/, "Numero di telefono non valido.")
    .or(z.literal(""))
    .optional(),
  company: z.string().optional(),
  website_url: z
    .string()
    .url("Inserisci un URL valido (es. https://esempio.com).")
    .or(z.literal(""))
    .optional(),
  pacchetto: z.enum(["", "Avvio", "Pro", "Enterprise"]).optional(),
  message: z.string().min(10, "Il messaggio deve avere almeno 10 caratteri."),
  privacy: z.literal("on", {
    error: "Devi accettare la privacy policy per procedere.",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const newsletterSchema = z.object({
  email: z.string().email("Inserisci un'email valida."),
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;
