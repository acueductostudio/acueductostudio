const fs = require("fs-extra");
const formatDate = require("./formatDate");

const url = "https://acueducto.studio";

const routes = [
  {
    es: "",
    en: "/en",
    priority: 1
  },
  {
    es: "/nosotros",
    en: "/en/about",
    priority: 0.9
  },
  {
    es: "/manifiesto",
    en: "/en/manifesto",
    priority: 0.9
  },
  {
    es: "/portafolio",
    en: "/en/work",
    priority: 0.9
  },
  {
    es: "/portafolio/ladanzadelasfieras",
    en: "/en/work/ladanzadelasfieras",
    priority: 0.8
  },
  {
    es: "/portafolio/salvajenada",
    en: "/en/work/salvajenada",
    priority: 0.8
  },
  {
    es: "/cookies",
    en: "/en/cookies",
    priority: 0.7
  },
  {
    es: "/privacidad",
    en: "/en/privacy",
    priority: 0.7
  }
];

// SITEMAP.XML
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
  ${routes.map(
    route => `<url>
    <loc>${url + route.es}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url + route.en}"/>
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>
  <url>
    <loc>${url + route.en}</loc>
    <xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
    <xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${url + route.en}"/>
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("static/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");
