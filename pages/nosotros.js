import React, { useEffect, useState } from "react";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P } from "components/shared/Dangerously";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid.ts";
import Recursos from "components/shared/Recursos";
import Picture from "components/caseStudy/shared/Picture";
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
      <Team as={TitleSectionGrid}>
        <Picture
          src="/assets/img/layout/team.png"
          width={1200}
          height={606}
          alt="Equipo de Acueducto"
        />
      </Team>
      <ControlledPadding as={PinnedSection} title={t.intro.title} notSticky>
        <P>{t.intro.p}</P>
      </ControlledPadding>
      <PaperPlane>
        <Picture
          src="/assets/img/layout/paper.png"
          width={600}
          height={400}
          alt="Gran lugar para trabajar"
        />
      </PaperPlane>
      <ManifiestoSection t={t.manifesto} />
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

const ControlledPadding = styled.div`
  padding-bottom: 5%;
`;

const PaperPlane = styled.div`
  padding-bottom: calc(70px + 5%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Team = styled.div`
  padding-top: 140px;
  padding-bottom: 0;
`;
