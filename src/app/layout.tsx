import type { Metadata } from "next";
import { Poppins, Gugi, Megrim } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const gugi = Gugi({
  variable: "--font-gugi",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const megrim = Megrim({
  variable: "--font-megrim",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://superchat.fl1.cz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SuperChat per Odoo 18 — CRM Automation & Messaggistica Multi-Canale | Persevida sro",
    template: "%s | SuperChat per Odoo 18",
  },
  description:
    "Automatizza il CRM Odoo 18: lead da form web, notifiche su cambio stage, assegnazione team e messaggistica WhatsApp, Instagram, Telegram, Email, SMS. 7 moduli open source.",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    siteName: "SuperChat per Odoo 18",
    title: "SuperChat — CRM Automation & Messaggistica Multi-Canale per Odoo 18",
    description:
      "Dal lead alla vendita, tutto automatico: form web → lead Odoo → notifiche al commerciale. 7 moduli open source, 6 canali.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "SuperChat — CRM Automation per Odoo 18",
    description: "Automatizza lead, notifiche e assegnazione team in Odoo 18 con 7 moduli open source.",
  },
};

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Persevida sro",
    url: siteUrl,
    logo: `${siteUrl}/icons/superchat-logo.png`,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: ["Italian", "English", "Czech"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function SoftwareSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SuperChat per Odoo 18",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
    },
    description:
      "Modulo Odoo 18 open source per CRM automation, messaggistica multi-canale e assegnazione lead.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <SoftwareSchema />
      </head>
      <body className={`${poppins.variable} ${gugi.variable} ${megrim.variable} ${poppins.className} antialiased overflow-x-hidden`}>{children}</body>
    </html>
  );
}
