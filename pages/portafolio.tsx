import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import CaseList from "components/caseStudy/CaseList";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";

export default function Work({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.json",
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
        es_canonical={"https://acueducto.studio/portafolio"}
        en_canonical={"https://acueducto.studio/en/work"}
      />
      <TitleSection {...t.intro} />
      <CaseList />
      <ContactFooter />
    </PageClipper>
  );
}
export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "work.json" });
  return {
    props: {
      pt,
    },
  };
};
