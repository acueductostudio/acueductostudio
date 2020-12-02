import Head from "next/head";
import { useRouter } from "next/router";

const es_default_keywords =
  "diseño, estudio, studio, acueducto, cdmx, innovación, diseño estratégico, diseño de experiencia, diseño de producto, diseño de servicio, impacto social, diseño de estrategia, tecnología";
const en_default_keywords =
  "design, studio, acueducto, cdmx, innovation, strategic design, experience design, product design, brand design, social impact, design strategy, technology";

const structuredDefault = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://acueducto.studio",
  name: "Acueducto",
  url: "https://acueducto.studio",
  logo: "https://acueducto.studio/assets/img/og/acueducto.png",
  sameAs: [
    "https://www.facebook.com/acueducto.studio",
    "https://www.instagram.com/acueducto.studio/",
    "https://www.linkedin.com/company/acueductostudio/",
    "https://twitter.com/acueductostudio",
  ],
};

// let otherStructure = {
//   "@context": "https://schema.org",
//   "@graph": [
//     {
//       "@type": "Organization",
//       "@id": "https://https://acueducto.studio/#organization",
//       name: "Acueducto",
//       url: "https://acueducto.studio",
//       logo: {
//         "@type": "ImageObject",
//         "@id": "https://www.winwithoutpitching.com/#logo",
//         inLanguage: lang === "es" ? "es-MX" : "en-US",
//         url:
//           "https://s30558.pcdn.co/wp-content/uploads/2018/03/cropped-WWP_logo_512px.png",
//         width: 512,
//         height: 512,
//         caption: "Acueducto",
//       },
//       image: { "@id": "https://acueducto.studio/#logo" },
//     },
//     {
//       "@type": "WebSite",
//       "@id": "https://acueducto.studio/#website",
//       url: "https://acueducto.studio",
//       name: "Acueducto",
//       description:
//         "Diseño estratégico, desarrollo y lanzamiento de productos y servicios digitales.",
//       publisher: {
//         "@id": "https://acueducto.studio/#organization",
//       },
//       inLanguage: "en-US",
//     },
//     {
//       "@type": "ImageObject",
//       "@id": "https://acueducto.studio/#primaryimage",
//       inLanguage: "es-MX",
//       url: "https://fast.wistia.com/embed/medias/w9g06r3mhf/swatch",
//     },
//     {
//       "@type": "WebPage",
//       "@id": "https://acueducto.studio/#webpage",
//       url: "https://acueducto.studio",
//       name: "Acueducto",
//       isPartOf: { "@id": "https://acueducto.studio/#website" },
//       about: { "@id": "https://acueducto.studio/#organization" },
//       primaryImageOfPage: {
//         "@id": "https://acueducto.studio/#primaryimage",
//       },
//       datePublished: "2019-07-18T11:37:15+00:00",
//       dateModified: "2020-10-29T12:45:25+00:00",
//       description:
//         "We help creative professionals + agencies learn how to get new clients and close the sale through live and online sales training programs and tools.",
//       inLanguage: "es-MX",
//       potentialAction: [
//         {
//           "@type": "ReadAction",
//           target: ["https://acueducto.studio"],
//         },
//       ],
//     },
//   ],
// };

type HeadProps = {
  title: string;
  description: string;
  keywords?: string;
  en_canonical?: string;
  es_canonical?: string;
  image?: { fileName: string; alt: string };
  structured?: Object;
};

const NewHead = ({
  title,
  description,
  keywords,
  en_canonical,
  es_canonical,
  image,
  structured,
}: HeadProps) => {
  let router = useRouter();
  let { locale } = router;

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <title>{title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@acueductostudio" />
      <meta name="twitter:site" content="@acueductostudio" />

      <meta name="description" content={description!} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />

      <meta name="og:title" property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Acueducto" />

      {
        //Locale for Open Graph
        locale === "es" ? (
          <>
            <meta property="og:locale" content="es_MX" />
            {en_canonical && (
              <meta property="og:locale:alternate" content="en_US" />
            )}
            <meta property="og:url" content={es_canonical} />
            <meta
              name="keywords"
              content={keywords ? keywords : es_default_keywords}
            />
          </>
        ) : (
          <>
            <meta property="og:locale" content="en_US" />
            {es_canonical && (
              <meta property="og:locale:alternate" content="es_MX" />
            )}
            <meta property="og:url" content={en_canonical} />
            <meta
              name="keywords"
              content={keywords ? keywords : en_default_keywords}
            />
          </>
        )
      }
      {
        //Image and alt for Open Graph
        image ? (
          <>
            <meta
              property="og:image"
              content={`https://acueducto.studio/assets/img/og/${image.fileName}`}
            />
            <meta property="og:image:alt" content={image.alt} />
          </>
        ) : (
          <>
            <meta
              property="og:image"
              content="https://acueducto.studio/assets/img/og/og_main.jpg"
            />
            <meta property="og:image:alt" content="Acueducto Studio" />
          </>
        )
      }
      {
        //Hreflang and canonical urls
        locale === "es" ? (
          <>
            <link rel="canonical" href={es_canonical} />
            {en_canonical && (
              <>
                <link rel="alternate" hrefLang="en" href={en_canonical} />
                <link rel="alternate" hrefLang="es" href={es_canonical} />
                <link
                  rel="alternate"
                  href={en_canonical}
                  hrefLang="x-default"
                />
              </>
            )}
          </>
        ) : (
          <>
            <link rel="canonical" href={en_canonical} />
            {es_canonical && (
              <>
                <link rel="alternate" hrefLang="es" href={es_canonical} />
                <link rel="alternate" hrefLang="en" href={en_canonical} />
                <link
                  rel="alternate"
                  href={en_canonical}
                  hrefLang="x-default"
                />
              </>
            )}
          </>
        )
      }
      {
        //Rich Results
        structured && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(structured),
            }}
          />
        )
      }
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredDefault),
        }}
      />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default NewHead;
