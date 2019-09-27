const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

// ROBOTS.txt
const robotsTxt = `User-agent: *
Sitemap: https://acueducto.studio/sitemap.xml
Disallow:`;

fs.writeFileSync("static/robots.txt", robotsTxt);
console.log("robots.txt saved!");

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
    path => `<url>
    <loc>https://acueducto.studio${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://acueducto.studio/en"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://acueducto.studio"/>
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("static/sitemap_new.xml", sitemapXml);
console.log("sitemap_local.xml saved!");

// GOOGLE's VERIFY HTML
// const googleVerify = `google-site-verification: google8f5d91a719b65f09.html`;
// fs.mkdirSync("static/sitemap.xml");

// copy `_redirects` etc.
// fs.copySync("scripts/copy-to-build/", "out/");
