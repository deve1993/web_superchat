import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "SuperChat per Odoo 18 – Messaggistica Multi-Canale | FL1 sro",
  description:
    "Gestisci WhatsApp, Instagram, Messenger, Email, SMS e Telegram da un'unica inbox in Odoo 18. 7 moduli specializzati, webhook ultra-rapidi, automazione CRM e campagne massive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <body className={`${poppins.variable} ${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
