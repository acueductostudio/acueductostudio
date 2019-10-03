import Head from "next/head";

const Meta = props => {
  const es_default =
    "Nos asociamos con innovadores alrededor del mundo para desarrollar estrategias y experiencias digitales que cuentan historias convincentes, inspiran comunidades y forjen vínculos significativos.";
  const en_default =
    "We partner with innovators around the globe to develop digital strategies and experiences that tell compelling stories, inspire communities and build meaningful bonds.";
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
          <meta property="og:locale" content="es_MX" />
          <meta property="og:locale:alternate" content="en_US" />
        </>
      ) : (
        <>
          <meta property="og:locale" content="en_US" />
          <meta property="og:locale:alternate" content="es_MX" />
        </>
      )}

      <meta property="og:site_name" content="Acueducto" />
      {props.image ? (
        <meta property="og:image" content={`${props.image}`} />
      ) : (
        <meta
          property="og:image"
          content="https://acueducto.studio/static/assets/img/og/og_main.png"
        />
      )}
      <meta property="og:image:alt" content="Acueducto Logo" />
      {props.canonical &&
        (props.lang == "es" ? (
          <>
            <link rel="canonical" href={props.canonical} />
            <link rel="alternate" hrefLang="en" href={props.en_canonical} />
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
            <link
              rel="alternate"
              href={props.en_canonical}
              hrefLang="x-default"
            />
            <meta property="og:url" content={props.canonical} />
          </>
        ))}
    </Head>
  );
};
export default Meta;
