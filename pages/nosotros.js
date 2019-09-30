import styled from "styled-components";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";
import Head from "components/Head";
import TitleSection from "components/TitleSection";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import PinnedSection from "components/PinnedSection";
import { P } from "components/shared/Dangerously";

const HeadSketch = dynamic(import("components/headSketch/HeadSketch"), {
  loading: () => (
    <HeadLoader src="/static/assets/img/layout/headPlacerHolder.jpg" />
  ),
  ssr: false
});

export default function About(props) {
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
      <PinnedSection t={t}>
        <Person>
          <HeadSketch />
          <Fade>
            <h4>{t.team.rodrigo.name}</h4>
            <span>{t.team.rodrigo.position}</span>
          </Fade>
          <P>{t.team.rodrigo.bio}</P>
        </Person>
        <Person>
          <HeadSketch second rotationStart={50} invertRotation />
          <Fade>
            <h4>{t.team.artemio.name}</h4>
            <span>{t.team.artemio.position}</span>
          </Fade>
          <P>{t.team.artemio.bio}</P>
        </Person>
      </PinnedSection>
      <TitleSection
        title={t.values.title}
        text={t.values.p}
        link={t.values.link}
        linktext={t.values.linktext}
        borderTop
      />
      <ContactFooter />
    </PageClipper>
  );
}

const HeadLoader = styled.img`
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
    margin-bottom: 3%;
  }
  span {
    color: ${props => props.theme.colors.accent};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 3.5px;
    margin-bottom: 4%;
    font-weight: 200;
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
