import Head from "next/head";
import { useRouter } from "next/router";
import LD from "components/layout/Head/returnLd";

const es_default_keywords =
  "diseño, estudio, studio, acueducto, cdmx, innovación, diseño estratégico, diseño de experiencia, diseño de producto, diseño de servicio, impacto social, diseño de estrategia, tecnología";
const en_default_keywords =
  "design, studio, acueducto, cdmx, innovation, strategic design, experience design, product design, brand design, social impact, design strategy, technology";

type HeadProps = {
  title: string;
  description: string;
  headerTitle: string;
  keywords?: string;
  en_canonical?: string;
  es_canonical?: string;
  image?: { fileName: string; alt: string };
};

const NewHead = ({
  title,
  description,
  headerTitle,
  keywords,
  en_canonical,
  es_canonical,
  image,
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: LD(
            locale,
            router.asPath,
            description,
            title,
            headerTitle,
            image
          ),
        }}
      />
      <link rel="preconnect" href="https://connect.facebook.net" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
    </Head>
  );
};

export default NewHead;
