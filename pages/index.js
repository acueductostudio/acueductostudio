import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import styled from "styled-components";
import TitleSection from "components/TitleSection";
import PageClipper from "components/PageClipper";
import Process from "components/Process";
import ContactFooter from "components/ContactFooter";
import { H1, H2 } from "components/shared/Dangerously";
import Services from "components/Services";
import LogoComplete from "static/assets/img/layout/logoComplete.svg";
import Holed from "static/assets/img/layout/holed.svg";
import CaseList from "components/caseStudy/CaseList";
import Head from "components/Head";

export default function Index(props) {
  let t = props.locale.home_page;

  useEffect(() => {
    props.setTitle(t.header_title);
  }, []);

  return (
    <>
      <PageClipper unPadded>
        <Head
          title={t.page_title}
          canonical={"https://acueducto.studio/"}
          en_canonical={"https://acueducto.studio/en"}
          lang={props.lang}
        />
        <Land id="land">
          <LandContainer>
            <H1>{t.landing.heading}</H1>
            <H2>{t.landing.tagline}</H2>
          </LandContainer>
        </Land>
        <Intro id="removeArrow">
          <TitleSection
            title={t.intro.title}
            text={t.intro.p}
            link={t.intro.link}
            linktext={t.intro.linktext}
            borderTop
          />
          {/* <ImageGallery>
              <Image
                columnStart={5}
                columnEnd={8}
                ratio={60}
                style={{
                  backgroundImage: "url(https://source.unsplash.com/collection/253848)"
                }}
              />
              <Image
                columnStart={1}
                columnEnd={6}
                ratio={80}
                style={{
                  backgroundImage:
                    "url(https://source.unsplash.com/user/realla)",
                  transform: "translateY(-70%)"
                }}
              />
            </ImageGallery> */}
        </Intro>
        <ImageGalleryRemovable>
          <Holed />
          <Boxed>
            <Fade>
              <LogoComplete />
            </Fade>
          </Boxed>
        </ImageGalleryRemovable>
        <Divider />
        <Process />
        <TitleSection title={t.studies.title} text={t.studies.p} borderTop />
        <CaseList noPlay />
        <Services />
        <ContactFooter />
      </PageClipper>
    </>
  );
}

const Divider = styled.div`
  width: 100%;
  padding-bottom: 12%;
  background-color: ${props => props.theme.colors.background};
`;

const Boxed = styled.div`
  position: absolute;
  max-width: 350px;
  width: 40%;
`;

const ImageGalleryRemovable = styled.div`
  width: 100%;
  display: flex;
  flex: 0 0 auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: -1px 0;
  svg {
    width: 100%;
  }
`;

const Image = styled.figure`
  height: 0;
  padding-bottom: ${props => (props.ratio ? props.ratio + "%" : "60%")};
  background-size: 104%;
  background-repeat: no-repeat;
  background-position: center;
  transition: background-size 0.5s ease, margin 0.3s ease;
  grid-column: ${props => (props.columnStart ? props.columnStart : 1)} / span
    ${props => (props.columnEnd ? props.columnEnd : 5)};
  &:hover {
    background-size: 100%;
    margin: 0 10px;
    z-index: 0;
  }
`;

const ImageGallery = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 2.2rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr 300px;
  padding: 0 4%;
`;

const Land = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4%;
  grid-gap: 2.2rem;
  align-items: center;
  h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    color: ${props => props.theme.colors.white};
  }
  h1 {
    color: ${props => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 830px;
    /* font-size: 6rem;
    font-weight: 900;
    text-transform: uppercase;
    font-family: "acumin-pro-wide";
    letter-spacing: -2px; */
  }
  @media (max-width: 1115px) {
    h1 {
      font-size: 6.7rem;
    }
  }
  @media (max-width: 1070px) {
    h1 {
      font-size: 6.4rem;
    }
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 6.2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 5.9rem;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 5rem;
    }
    h2 {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 520px) {
    h1 {
      max-width: 300px;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 3.35rem;
      max-width: 250px;
    }
    h2 {
      font-size: 1.6rem;
      max-width: 240px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
  @media (max-width: 570px) {
    grid-column: 1 / span 11;
  }
  @media (max-width: 420px) {
    grid-column: 1 / span 12;
  }
`;

const Intro = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
`;
