const fs = require("fs-extra");
const getPathsObject = require("./getPathsObject");
const formatDate = require("./formatDate");

const routes = [
  { es: "https://acueducto.studio", en: "https://acueducto.studio/en" }
];

// SITEMAP.XML
const pathsObj = getPathsObject();
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
  ${Object.keys(pathsObj).map(
    path => `<url>
    <loc>https://acueducto.studio${path}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="https://acueducto.studio${
      path.includes("/en") ? path : "/en"
    }"/>
    <xhtml:link rel="alternate" hreflang="es" href="https://acueducto.studio${
      !path.includes("/en") ? path : ""
    }"/>
    <lastmod>${
      pathsObj[path].lastModified
        ? formatDate(new Date(pathsObj[path].lastModified))
        : today
    }</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("static/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");
