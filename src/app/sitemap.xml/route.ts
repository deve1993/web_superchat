const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://superchat.fl1.cz";

const pages = [
  { loc: "", changefreq: "weekly", priority: "1.0" },
  { loc: "/privacy", changefreq: "monthly", priority: "0.3" },
  { loc: "/terms", changefreq: "monthly", priority: "0.3" },
  { loc: "/cookie-policy", changefreq: "monthly", priority: "0.3" },
];

export function GET() {
  const today = new Date().toISOString().split("T")[0];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${siteUrl}${p.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
