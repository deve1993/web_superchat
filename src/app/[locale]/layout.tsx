import type { Metadata } from "next";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ConsentAwareAnalytics } from "@/components/analytics";
import { CookieConsent } from "@/components/cookie-consent";
import "../globals.css";

const poppins = localFont({
  variable: "--font-poppins",
  src: [
    {
      path: "../../fonts/poppins-latin-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-700.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-ext-300.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-ext-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-ext-500.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-ext-600.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../fonts/poppins-latin-ext-700.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

const gugi = localFont({
  variable: "--font-gugi",
  src: [
    {
      path: "../../fonts/gugi-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const megrim = localFont({
  variable: "--font-megrim",
  src: [
    {
      path: "../../fonts/megrim-latin-400.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/megrim-latin-ext-400.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://superchat.fl1.cz";

const localeToOg: Record<string, string> = {
  it: "it_IT",
  en: "en_US",
  cs: "cs_CZ",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s | ${t("title").split(" — ")[0]}`,
    },
    description: t("description"),
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
      languages: {
        it: `${siteUrl}/`,
        en: `${siteUrl}/en`,
        cs: `${siteUrl}/cs`,
        "x-default": `${siteUrl}/`,
      },
    },
    openGraph: {
      type: "website",
      locale: localeToOg[locale] ?? "it_IT",
      siteName: "SuperChat",
      url: siteUrl,
    },
    twitter: {
      card: "summary_large_image",
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "48x48" },
        { url: "/favicon.svg", type: "image/svg+xml" },
        { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
    },
    manifest: "/site.webmanifest",
  };
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Persevida es",
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

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale} className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <SoftwareSchema />
      </head>
      <body className={`${poppins.variable} ${gugi.variable} ${megrim.variable} ${poppins.className} antialiased overflow-x-hidden`}>
        <NextIntlClientProvider>
          {children}
          <CookieConsent />
        </NextIntlClientProvider>
        <ConsentAwareAnalytics />
      </body>
    </html>
  );
}
