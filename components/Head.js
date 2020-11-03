import Head from "next/head";

const Meta = (props) => {
  const es_default_description =
    "Nos asociamos con innovadores alrededor del mundo para desarrollar estrategias y experiencias digitales que cuentan historias convincentes, inspiran comunidades y forjen vínculos significativos.";
  const en_default_description =
    "We partner with innovators around the globe to develop digital strategies and experiences that tell compelling stories, inspire communities and build meaningful bonds.";

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
    ]
  };

  let otherStructure = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://https://acueducto.studio/#organization",
        name: "Acueducto",
        url: "https://acueducto.studio",
        logo: {
          "@type": "ImageObject",
          "@id": "https://www.winwithoutpitching.com/#logo",
          inLanguage: props.lang === "es" ? "es-MX" : "en-US",
          url:
            "https://s30558.pcdn.co/wp-content/uploads/2018/03/cropped-WWP_logo_512px.png",
          width: 512,
          height: 512,
          caption: "Acueducto",
        },
        image: { "@id": "https://acueducto.studio/#logo" },
      },
      {
        "@type": "WebSite",
        "@id": "https://acueducto.studio/#website",
        url: "https://acueducto.studio",
        name: "Acueducto",
        description:
          "Diseño estratégico, desarrollo y lanzamiento de productos y servicios digitales.",
        publisher: {
          "@id": "https://acueducto.studio/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "ImageObject",
        "@id": "https://acueducto.studio/#primaryimage",
        inLanguage: "es-MX",
        url: "https://fast.wistia.com/embed/medias/w9g06r3mhf/swatch",
      },
      {
        "@type": "WebPage",
        "@id": "https://acueducto.studio/#webpage",
        url: "https://acueducto.studio",
        name: "Acueducto",
        isPartOf: { "@id": "https://acueducto.studio/#website" },
        about: { "@id": "https://acueducto.studio/#organization" },
        primaryImageOfPage: {
          "@id": "https://acueducto.studio/#primaryimage",
        },
        datePublished: "2019-07-18T11:37:15+00:00",
        dateModified: "2020-10-29T12:45:25+00:00",
        description:
          "We help creative professionals + agencies learn how to get new clients and close the sale through live and online sales training programs and tools.",
        inLanguage: "es-MX",
        potentialAction: [
          {
            "@type": "ReadAction",
            target: ["https://acueducto.studio"],
          },
        ],
      },
    ],
  };

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <title>{props.title}</title>
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@acueductostudio" />
      <meta name="twitter:site" content="@acueductostudio" />
      {
        //Meta keywords
        props.lang === "es" ? (
          <meta
            name="keywords"
            content={
              props.es_keywords ? props.es_keywords : es_default_keywords
            }
          />
        ) : (
          <meta
            name="keywords"
            content={
              props.en_keywords ? props.en_keywords : en_default_keywords
            }
          />
        )
      }

      {props.description && (
        <>
          <meta name="description" content={props.description} />
          <meta
            name="og:description"
            property="og:description"
            content={props.description}
          />
        </>
      )}
      {!props.description &&
        (props.lang === "es" ? (
          <>
            <meta name="description" content={es_default_description} />
            <meta
              name="og:description"
              property="og:description"
              content={es_default_description}
            />
          </>
        ) : (
          <>
            <meta name="description" content={en_default_description} />
            <meta
              name="og:description"
              property="og:description"
              content={en_default_description}
            />
          </>
        ))}

      <meta name="og:title" property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Acueducto" />

      {
        //Locale for Open Graph
        props.lang === "es" ? (
          <>
            {(props.canonical || props.es_only_canonical) && (
              <meta property="og:locale" content="es_MX" />
            )}
            {props.en_canonical && (
              <meta property="og:locale:alternate" content="en_US" />
            )}
          </>
        ) : (
          <>
            {props.en_canonical && (
              <meta property="og:locale" content="en_US" />
            )}
            {props.canonical && (
              <meta property="og:locale:alternate" content="es_MX" />
            )}
          </>
        )
      }
      {
        //Image and alt for Open Graph
        props.image ? (
          <>
            <meta
              property="og:image"
              content={`https://acueducto.studio/assets/img/og/${props.image}`}
            />
            {props.lang === "es" ? (
              <meta
                property="og:image:alt"
                content={
                  props.es_image_alt
                    ? props.es_image_alt
                    : "Caso de estudio: Acueducto"
                }
              />
            ) : (
              <meta
                property="og:image:alt"
                content={
                  props.en_image_alt
                    ? props.en_image_alt
                    : "Case study: Acueducto"
                }
              />
            )}
          </>
        ) : (
          <>
            <meta
              property="og:image"
              content="https://acueducto.studio/assets/img/og/og_main.jpg"
            />
            <meta property="og:image:alt" content="Acueducto Logo" />
          </>
        )
      }
      {
        //Hreflang and canonical urls
        props.canonical &&
          (props.lang == "es" ? (
            <>
              <link rel="canonical" href={props.canonical} />
              <link rel="alternate" hrefLang="en" href={props.en_canonical} />
              <link rel="alternate" hrefLang="es" href={props.canonical} />
              <link
                rel="alternate"
                href={props.en_canonical}
                hrefLang="x-default"
              />
              <meta property="og:url" content={props.canonical} />
            </>
          ) : (
            <>
              <link rel="canonical" href={props.en_canonical} />
              <link rel="alternate" hrefLang="es" href={props.canonical} />
              <link rel="alternate" hrefLang="en" href={props.en_canonical} />
              <link
                rel="alternate"
                href={props.en_canonical}
                hrefLang="x-default"
              />
              <meta property="og:url" content={props.en_canonical} />
            </>
          ))
      }
      {
        //Canonical for spanish only page
        props.es_only_canonical && (
          <meta property="og:url" content={props.es_only_canonical} />
        )
      }
      {
        //Rich Results
        props.structured && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(props.structured),
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
    </Head>
  );
};
export default Meta;
