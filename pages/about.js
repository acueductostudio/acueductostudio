import styled from "styled-components";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import PageClipper from "../components/PageClipper";
import createMarkup from "../helpers/createMarkup";
import ContactFooter from "../components/ContactFooter";
import PinnedSection from "../components/PinnedSection";

const HeadSketch = dynamic(import("../components/headSketch/HeadSketch"), {
  loading: () => (
    <HeadLoader src="./../static/assets/img/layout/headPlacerHolder.jpg" />
  ),
  ssr: false
});

export default function About(props) {
  let t = props.locale.about_page;
  let f = props.locale.contactfooter;

  useEffect(() => {
    props.setTitle("About");
  }, []);

  return (
    <PageClipper>
      <Head>
        <title>Acueducto | About</title>
      </Head>
      <PinnedSection t={t}>
        <Person>
          <HeadSketch />
          <Fade>
            <h4>{t.team.rodrigo.name}</h4>
            <span>{t.team.rodrigo.position}</span>
            <p dangerouslySetInnerHTML={createMarkup(t.team.rodrigo.bio)} />
          </Fade>
        </Person>
        <Person>
          <HeadSketch second rotationStart={50} invertRotation />
          <Fade>
            <h4>{t.team.artemio.name}</h4>
            <span>{t.team.artemio.position}</span>
            <p dangerouslySetInnerHTML={createMarkup(t.team.artemio.bio)} />
          </Fade>
        </Person>
      </PinnedSection>
      <TitleSection
        title={t.values.title}
        text={t.values.p}
        link={t.values.link}
        linktext={t.values.linktext}
        borderTop
      />
      <ContactFooter f={f} />
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
    margin-bottom: 6%;
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
