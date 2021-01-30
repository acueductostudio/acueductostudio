const returnLd = (locale: string, asPath: string, description: string, title: string, headerTitle: string, image?: { fileName: string; alt: string }) => {
    const structure = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": "https://acueducto.studio/#organization",
                name: "Acueducto",
                url: "https://acueducto.studio",
                sameAs: [
                    "https://www.facebook.com/acueducto.studio",
                    "https://www.instagram.com/acueducto.studio/",
                    "https://www.linkedin.com/company/acueductostudio/",
                    "https://twitter.com/acueductostudio",
                ],
                logo: {
                    "@type": "ImageObject",
                    "@id": "https://acueducto.studio/#logo",
                    contentUrl: "https://acueducto.studio/assets/img/og/acueducto.png",
                    width: 1200,
                    height: 1200,
                    caption: "Acueducto",
                    inLanguage: locale === "en" ? "en" : "es",
                },
                image: { "@id": "https://acueducto.studio/#logo" },
            },
            image ? {
                "@type": "ImageObject",
                "@id": `https://acueducto.studio/${locale === "en" ? "en" : ""}${asPath !== "/" ? asPath : ""}#primaryimage`,
                contentUrl: `https://acueducto.studio/assets/img/og/${image.fileName}`,
                width: 1200,
                height: 1200,
                caption: image.alt,
                inLanguage: locale === "en" ? "en" : "es",
            } : {
                    "@type": "ImageObject",
                    "@id": `https://acueducto.studio${locale === "en" ? "/en" : ""}${asPath}#primaryimage`,
                    contentUrl: `https://acueducto.studio/assets/img/og/acueducto.png`,
                    width: 1200,
                    height: 1200,
                    caption: "Acueducto",
                    inLanguage: locale === "en" ? "en" : "es",
                }
            ,
            {
                "@type": "WebSite",
                "@id": `https://acueducto.studio/${locale === "en" ? "en" : ""}#website`,
                url: `https://acueducto.studio${locale === "en" ? "/en" : ""}`,
                name: "Acueducto",
                description: locale === "en" ?
                    "We partner with innovators around the globe to develop digital strategies and experiences that tell compelling stories, inspire communities and build meaningful bonds."
                    : "Desarrollamos estrategias digitales, apps web y móviles, productos digitales y campañas de marketing digital. Elevemos tu negocio con tecnología digital.",
                publisher: {
                    "@id": "https://acueducto.studio/#organization",
                },
                inLanguage: locale === "en" ? "en" : "es",
            },
            {
                "@type": "WebPage",
                "@id": `https://acueducto.studio${locale === "en" ? "/en" : ""}${asPath}#webpage`,
                url: `https://acueducto.studio${locale === "en" ? "/en" : ""}${asPath}`,
                name: title,
                isPartOf: { "@id": `https://acueducto.studio/${locale === "en" ? "en" : ""}#website` },
                about: { "@id": "https://acueducto.studio/#organization" },
                primaryImageOfPage: { "@id": `https://acueducto.studio${locale === "en" ? "/en" : ""}${asPath}#primaryimage` },
                description: description,
                inLanguage: locale === "en" ? "en" : "es",
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://acueducto.studio/#breadcrumbs",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        name: "Home",
                        item: "https://acueducto.studio" + (locale === "en" ? "/en" : ""),
                    },
                    asPath.includes("/portafolio") || asPath.includes("/work") ? ({
                        "@type": "ListItem",
                        position: 2,
                        name: locale === "en" ? "Work" : "Portafolio",
                        item: "https://acueducto.studio" + (locale === "en" ? "/en/work" : "/portafolio"),
                    }) : "",
                    asPath.includes("/articulos") ? ({
                        "@type": "ListItem",
                        position: 2,
                        name: "Artículos",
                        item: "https://acueducto.studio/articulos",
                    }) : "",
                    asPath !== "/" && asPath !== "/articulos" && asPath !== "/portafolio" && asPath !== "/work" ? ({
                        "@type": "ListItem",
                        position: asPath.includes("/portafolio") || asPath.includes("/work") || asPath.includes("/articles") ? 3 : 2,
                        name: asPath.includes("/articulos") ? title : headerTitle,
                        item: "https://acueducto.studio" + (locale === "en" ? "/en" : "") + asPath,
                    }) : ""
                ],
            },
        ],
    };
    return JSON.stringify(structure);
}

export default returnLd