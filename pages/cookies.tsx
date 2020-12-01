import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import Link from "next/link";
import PageClipper from "components/layout/PageClipper";
import SimplePinnedSection from "components/shared/pinnedSections/SimplePinnedSection";
import { P, H3 } from "components/shared/Dangerously";
import ContactFooter from "components/shared/footers/ContactFooter";

export default function Cookies({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);
  let b = t.body;

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "cookies.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.headerTitle);
      },
    });
  }, [locale]);

  return (
    <PageClipper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/cookies"}
        en_canonical={"https://acueducto.studio/en/cookies"}
      />
      <SimplePinnedSection title={t.intro.title}>
        <P>{t.intro.p}</P>
        <p>
          {b.p0}
          <Link
            href={"/privacidad"}
            as={locale === "en" ? "privacy" : "/privacidad"}
            locale={locale}
            passHref
          >
            <a>{b.link0}</a>
          </Link>
          .
        </p>
        <h2>{b.title1}</h2>
        <p>{b.p1}</p>
        <h2>{b.title2}</h2>
        <p>{b.p2}</p>
        <h3>{b.subtitle3}</h3>
        <p>{b.p3}</p>
        <h4>{b.subsubtitle4}</h4>
        <P>{b.p4}</P>
        <h3>{b.subtitle5}</h3>
        <p>{b.p5}</p>
        <h4>{b.subsubtitle6}</h4>
        <P>{b.p6}</P>
        <H3>{b.subtitle7}</H3>
        <p>{b.p7}</p>
        <h4>{b.subsubtitle8}</h4>
        <P>{b.p8}</P>
        <h2>{b.title9}</h2>
        <p>{b.p9}</p>
        <h4>{b.subsubtitle10}</h4>
        <P>{b.p10}</P>
        <h4>{b.subsubtitle11}</h4>
        <P>{b.p11}</P>
        <h4>{b.subtitle12}</h4>
        <P>{b.p12}</P>
      </SimplePinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "cookies.json" });
  return {
    props: {
      pt,
    },
  };
};
