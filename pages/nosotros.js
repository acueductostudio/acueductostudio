import React, { useEffect, useState } from "react";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import Recursos from "components/shared/Recursos";
import Process from "components/shared/Process";
import ManifiestoSection from "components/ManifiestoSection";

function About({ locale, setTitle, pt, hasLoaded, mouse }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "about.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
  }, [locale]);
  return (
    <PageClipper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/nosotros"}
        en_canonical={"https://acueducto.studio/en/about"}
      />
      <ManifiestoSection t={t.manifesto} />
      <Process {...t.process} />
      <TitleSection {...t.values} borderTop>
        <Recursos />
      </TitleSection>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(About);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "about.json" });
  return {
    props: {
      pt,
    },
  };
};
