import Head from "next/head";

const Meta = (props) => {
  const es_default =
    "Nos asociamos con innovadores alrededor del mundo para desarrollar estrategias y experiencias digitales que cuentan historias convincentes, inspiran comunidades y forjen vínculos significativos.";
  const en_default =
    "We partner with innovators around the globe to develop digital strategies and experiences that tell compelling stories, inspire communities and build meaningful bonds.";

  const structuredDefault = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://acueducto.studio",
    name: "Acueducto",
    url: "https://acueducto.studio",
    logo: "https://acueducto.studio/assets/img/og/acueducto.png",
  };
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
      />
      <title>{props.title}</title>
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
            <meta name="description" content={es_default} />
            <meta
              name="og:description"
              property="og:description"
              content={es_default}
            />
          </>
        ) : (
          <>
            <meta name="description" content={en_default} />
            <meta
              name="og:description"
              property="og:description"
              content={en_default}
            />
          </>
        ))}

      <meta name="og:title" property="og:title" content={props.title} />
      <meta property="og:type" content="website" />
      {props.lang === "es" ? (
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
          {props.en_canonical && <meta property="og:locale" content="en_US" />}
          {props.canonical && (
            <meta property="og:locale:alternate" content="es_MX" />
          )}
        </>
      )}

      <meta property="og:site_name" content="Acueducto" />
      {props.image ? (
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
      )}
      {props.canonical &&
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
        ))}
      {props.es_only_canonical && (
        <meta property="og:url" content={props.es_only_canonical} />
      )}
      {props.structured && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(props.structured),
          }}
        />
      )}
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
