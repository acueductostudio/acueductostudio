
import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P, H4 } from "components/shared/Dangerously";
import Process from "components/shared/Process";
import Picture from "components/caseStudy/shared/Picture";
import ManifiestoSection from "components/ManifiestoSection";

const HeadSketch = dynamic(import("components/headSketch/HeadSketch"), {
  loading: () => (
    <HeadLoader>
      <Picture
        src="/assets/img/layout/headPlacerHolder.jpg"
        alt="3DScan"
        height={400}
        width={400}
      />
    </HeadLoader>
  ),
  ssr: false,
});

function About({ locale, setTitle, pt, hasLoaded, mouse }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "about.json",
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
        es_canonical={"https://acueducto.studio/nosotros"}
        en_canonical={"https://acueducto.studio/en/about"}
      />
      <PinnedSection title={t.intro.title}>
        <P>{t.intro.p}</P>
        {t.team.map((person, index) => (
          <Person key={"personX" + index}>
            {hasLoaded && (
              <HeadSketch
                mouse={mouse}
                second={index > 0}
                invertRotation={index > 0}
                rotationStart={index > 0 ? 50 : 0}
              />
            )}
            <Fade triggerOnce>
              <H4>{person.name}</H4>
              <span>{person.position}</span>
              <P>{person.bio}</P>
            </Fade>
          </Person>
        ))}
      </PinnedSection>
      <ManifiestoSection t={t.manifesto}/>
      <Process {...t.process}/>
      <TitleSection {...t.values} borderTop />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(About);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "about.json" });
  return {
    props: {
      pt,
    },
  };
};

const HeadLoader = styled.div`
  width: 100%;
  margin-bottom: 10%;
  position: relative;
  max-width: 400px;
  left: -30%;
  @media (max-width: 1250px) {
    margin-bottom: 8%;
    left: -20%;
  }
  @media (max-width: 1000px) {
    margin-bottom: 7%;
  }
  @media (max-width: 600px) {
    left: -30px;
  }
`;

const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  h4 {
    font-size: 4.5rem;
    margin-bottom: 3.5%;
    font-weight: 200;
    line-height: 1;
  }
  span {
    color: ${(props) => props.theme.colors.accent_smalltext};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2.5px;
    margin-bottom: 3.5%;
    font-weight: 300;
  }
  @media (max-width: 1250px) {
    h4 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1000px) {
    h4 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 3rem;
    }
    margin-top: 5%;
  }
`;
