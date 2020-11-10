import styled from "styled-components";
import React, { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import dynamic from "next/dynamic";
import Head from "components/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import PinnedSection from "components/shared/PinnedSections/PinnedSection";
import { P, H4 } from "components/shared/Dangerously";
import Picture from "components/caseStudy/shared/Picture";
import Process from "components/shared/Process";
import ManifiestoItems from "components/ManifiestoItems";

const HeadSketch = dynamic(import("components/headSketch/HeadSketch"), {
  loading: () => (
    <HeadLoader src="/assets/img/layout/headPlacerHolder.jpg" alt="3DScan" />
  ),
  ssr: false,
});

function About(props) {
  let t = props.locale.about_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/nosotros"}
        en_canonical={"https://acueducto.studio/en/about"}
        lang={props.lang}
      />
      <ManifiestoItems />
      <PinnedSection title={t.intro.title} borderTop>
        <P>{t.intro.p}</P>
        {t.team.map((person, index) => (
          <Person key={"personX" + index}>
            {props.hasLoaded && (
              <HeadSketch
                mouse={props.mouse}
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
      <Process />
      <TitleSection {...t.values} borderTop />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(About);

const HeadLoader = styled(Picture)`
  width: 100%;
  height: auto;
  max-width: 400px;
  margin-bottom: 13%;
  position: relative;
  left: -10%;
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
