import Head from "next/head";

const Meta = props => {
  // console.log(!props.title ? "MISSING TITLE" : "");
  // console.log(!props.description ? "MISSING DESCRIPTION" : "");
  // console.log(!props.canonical ? "MISSING CANNONICAL" : "");
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="description" content={props.description} />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={props.title} />
      <meta
        name="og:description"
        property="og:description"
        content={props.description}
      />
      <meta property="og:locale" content="en_US" />
      <meta property="og:locale:alternate" content="es_MX" />
      <meta property="og:site_name" content="Acueducto" />
      <meta property="og:url" content={`${props.canonical}`} />
      {props.image ? (
        <meta property="og:image" content={`${props.image}`} />
      ) : (
        <meta
          property="og:image"
          content="https://acueducto.studio/static/assets/img/og/og_main.png"
        />
      )}
      {props.canonical && <link rel="canonical" href={`${props.canonical}`} />}
    </Head>
  );
};
export default Meta;
