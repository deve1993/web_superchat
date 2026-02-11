<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">

  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="it">
      <head>
        <title>Sitemap — SuperChat per Odoo 18</title>
        <meta name="robots" content="noindex,nofollow"/>
        <style>
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
            background: #00031C;
            color: #ffffff;
            min-height: 100vh;
          }
          .container {
            max-width: 900px;
            margin: 0 auto;
            padding: 60px 24px;
          }
          h1 {
            font-size: 32px;
            font-weight: 700;
            margin-bottom: 8px;
            background: linear-gradient(135deg, #DBE3FF 0%, #4F60FA 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
          }
          .subtitle {
            color: #73799B;
            font-size: 14px;
            margin-bottom: 40px;
          }
          .count {
            color: #4F60FA;
            font-weight: 600;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            border-radius: 12px;
            overflow: hidden;
          }
          thead th {
            background: #06051E;
            color: #DBE3FF;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            padding: 14px 16px;
            text-align: left;
            border-bottom: 1px solid rgba(79, 96, 250, 0.15);
          }
          tbody tr {
            border-bottom: 1px solid rgba(79, 96, 250, 0.06);
            transition: background 0.2s;
          }
          tbody tr:hover {
            background: rgba(79, 96, 250, 0.04);
          }
          tbody td {
            padding: 12px 16px;
            font-size: 14px;
            color: #73799B;
          }
          tbody td a {
            color: #4F60FA;
            text-decoration: none;
            transition: color 0.2s;
          }
          tbody td a:hover {
            color: #DBE3FF;
            text-decoration: underline;
          }
          .priority-high { color: #28C840; font-weight: 600; }
          .priority-mid { color: #DBE3FF; }
          .priority-low { color: #73799B; }
          .footer {
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(79, 96, 250, 0.1);
            color: #73799B;
            font-size: 12px;
            text-align: center;
          }
          .footer a { color: #4F60FA; text-decoration: none; }
          .footer a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Sitemap</h1>
          <p class="subtitle">
            SuperChat per Odoo 18 — <span class="count"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></span> URL indicizzati
          </p>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Frequenza</th>
                <th>Priorità</th>
                <th>Ultima Modifica</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <xsl:sort select="sitemap:priority" order="descending" data-type="number"/>
                <tr>
                  <td>
                    <a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                  </td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td>
                    <xsl:choose>
                      <xsl:when test="sitemap:priority &gt;= 0.8">
                        <span class="priority-high"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:when test="sitemap:priority &gt;= 0.5">
                        <span class="priority-mid"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:when>
                      <xsl:otherwise>
                        <span class="priority-low"><xsl:value-of select="sitemap:priority"/></span>
                      </xsl:otherwise>
                    </xsl:choose>
                  </td>
                  <td><xsl:value-of select="substring(sitemap:lastmod, 1, 10)"/></td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <div class="footer">
            Generata automaticamente — <a href="/">SuperChat per Odoo 18</a> by Persevida sro
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
