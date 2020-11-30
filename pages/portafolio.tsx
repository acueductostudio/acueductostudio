import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
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
        setTitle(nT.headerTitle);
      },
    });
  }, [locale]);

  return (
    <PageClipperPadded>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/portafolio"}
        en_canonical={"https://acueducto.studio/en/work"}
      />
      <TitleSection {...t.intro} />
      <CaseList noPlay />
      <ContactFooter />
    </PageClipperPadded>
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

const PageClipperPadded = styled(PageClipper)`
  @media (max-width: 1300px) {
    padding-top: 5%;
  }
  @media (max-width: 700px) {
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 15%;
  }
`;
