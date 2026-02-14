const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://superchat.fl1.cz";

const locales = ["it", "en", "cs"] as const;
const defaultLocale = "it";

const pages: {
  paths: Record<string, string>;
  changefreq: string;
  priority: string;
}[] = [
  {
    paths: { it: "", en: "", cs: "" },
    changefreq: "weekly",
    priority: "1.0",
  },
  {
    paths: { it: "/contatti", en: "/contact", cs: "/kontakt" },
    changefreq: "monthly",
    priority: "0.6",
  },
  {
    paths: { it: "/privacy", en: "/privacy", cs: "/privacy" },
    changefreq: "monthly",
    priority: "0.3",
  },
  {
    paths: { it: "/terms", en: "/terms", cs: "/terms" },
    changefreq: "monthly",
    priority: "0.3",
  },
  {
    paths: { it: "/cookie-policy", en: "/cookie-policy", cs: "/cookie-policy" },
    changefreq: "monthly",
    priority: "0.3",
  },
];

function buildUrl(locale: string, path: string): string {
  if (locale === defaultLocale) return `${siteUrl}${path}`;
  return `${siteUrl}/${locale}${path}`;
}

export function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls = pages
    .flatMap((page) =>
      locales.map((locale) => {
        const loc = buildUrl(locale, page.paths[locale]);

        const alternates = locales
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${alt}" href="${buildUrl(alt, page.paths[alt])}" />`
          )
          .concat(
            `    <xhtml:link rel="alternate" hreflang="x-default" href="${buildUrl(defaultLocale, page.paths[defaultLocale])}" />`
          )
          .join("\n");

        return `  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
  </url>`;
      })
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
