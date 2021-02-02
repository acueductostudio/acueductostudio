const fs = require("fs-extra");
const formatDate = require("./formatDate");

const url = "https://acueducto.studio";

const routes = [
  {
    es: "",
    en: "/en",
    priority: 1,
  },
  {
    es: "/pitch",
    en: "/en/pitch",
    priority: 0.9,
  },
  {
    es: "/contacto",
    en: "/en/contact",
    priority: 0.9,
  },
  {
    es: "/nosotros",
    en: "/en/about",
    priority: 0.8,
  },
  {
    es: "/portafolio",
    en: "/en/work",
    priority: 0.8,
  },
  {
    es: "/consultoria",
    priority: 0.8,
  },
  {
    es: "/diagnostico",
    priority: 0.7,
  },
  {
    es: "/podcast",
    priority: 0.7,
  },
  {
    es: "/portafolio/rahid",
    en: "/en/work/rahid",
    priority: 0.7,
  },
  {
    es: "/portafolio/ladanzadelasfieras",
    en: "/en/work/ladanzadelasfieras",
    priority: 0.7,
  },
  {
    es: "/portafolio/salvajenada",
    en: "/en/work/salvajenada",
    priority: 0.7,
  },
  {
    es: "/articulos/piensa-tu-producto-escalable-desde-el-inicio",
    priority: 0.7,
  },
  {
    es: "/cookies",
    en: "/en/cookies",
    priority: 0.5,
  },
  {
    es: "/privacidad",
    en: "/en/privacy",
    priority: 0.5,
  },
];

const esRoute = (route) =>
  route.es !== undefined &&
  `<url>
    <loc>${url + route.es}</loc>
    ${
      route.en !== undefined
        ? `<xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
           <xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
           <xhtml:link rel="alternate" hreflang="x-default" href="${
             url + route.en
           }"/>`
        : `<language>es</language>`
    }
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>`;

const enRoute = (route) =>
  route.en !== undefined &&
  `<url>
    <loc>${url + route.en}</loc>
    ${
      route.es !== undefined
        ? `<xhtml:link rel="alternate" hreflang="en" href="${url + route.en}"/>
           <xhtml:link rel="alternate" hreflang="es" href="${url + route.es}"/>
           <xhtml:link rel="alternate" hreflang="x-default" href="${url + route.en}"/>`
        : `<language>en</language>`
    }
    <priority>${route.priority}</priority>
    <lastmod>${
      route.lastModified ? formatDate(new Date(route.lastModified)) : today
    }</lastmod>
  </url>
  `;

// SITEMAP.XML
const today = formatDate(new Date());
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"> 
  ${routes.map((route) => esRoute(route) + enRoute(route)).join("")}
</urlset>`;

fs.writeFileSync("public/sitemap.xml", sitemapXml);
console.log("sitemap.xml saved!");
