import type { Metadata } from "next";
import Script from "next/script";
import { Poppins, Gugi, Megrim } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { AnalyticsHead, AnalyticsBody, AnalyticsScripts } from "@/components/analytics";
import "../globals.css";

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
        <AnalyticsHead />
      </head>
      <body className={`${poppins.variable} ${gugi.variable} ${megrim.variable} ${poppins.className} antialiased overflow-x-hidden`}>
        <AnalyticsBody />
        <NextIntlClientProvider>
          {children}
        </NextIntlClientProvider>
        <AnalyticsScripts />
        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
          <Script
            src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  );
}
