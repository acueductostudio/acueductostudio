import React, { useEffect, useState } from "react";
import Link from "next/link";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1, H2 } from "components/shared/Dangerously";
import Services from "components/shared/Services";
import Head from "components/layout/Head";
import Carousel from "components/Carousel";
import { Fade } from "react-awesome-reveal";
import Picture from "components/caseStudy/shared/Picture";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import BroadcastRouter from "components/podcast/BroadcastRouter.tsx";

function Index({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);
  const [isMobile, setIsMobile] = useState();

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "home.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    if (window.innerWidth < 760) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio"}
        en_canonical={"https://acueducto.studio/en"}
      />
      <Land id="land">
        <LandContainer>
          <H1>{t.landing.heading}</H1>
          <H2>{t.landing.tagline}</H2>
          <Link
            href={"/portafolio"}
            as={locale === "en" ? "/work" : "/portafolio"}
            locale={locale}
            passHref
          >
            <ButtonArrow text={t.landing.button} inverse />
          </Link>
        </LandContainer>
      </Land>
      <Intro id="removeArrow">
        <TitleSection {...t.intro} borderTop />
      </Intro>
      <Carousel items={t.carousel} />
      <Services services={t.services} />
      <TitleSection {...t.clients.intro} borderTop />
      <LogosSection>
        <Fade>
          <span>{t.clients.span}</span>
          <>
            {!isMobile ? (
              <Picture
                src="/assets/img/layout/clients.png"
                width={932}
                height={108}
                alt="Clientes"
              />
            ) : (
              <Picture
                src="/assets/img/layout/clientsMobile.png"
                width={616}
                height={150}
                alt="Clientes"
              />
            )}
          </>
          <Link
            href={"/portafolio"}
            as={locale === "en" ? "/work" : "/portafolio"}
            locale={locale}
            passHref
          >
            <ButtonArrow text={t.clients.cta} inverse />
          </Link>
        </Fade>
      </LogosSection>
      <TitleSection {...t.podcast.intro} borderTop>
        <Fade>
          <Link href={"/podcast"} passHref>
            <HoverablePicture>
              <Picture
                src="/assets/img/layout/podcast_cover.png"
                width={230}
                height={230}
                alt="Cuando el río suena"
              />
            </HoverablePicture>
          </Link>
          <BroadcastRouter
            trackClicks
            episode={3}
            spotify={"https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"}
            apple={
              "https://podcasts.apple.com/us/podcast/cuando-el-r%C3%ADo-suena/id1500473556"
            }
            google={
              "https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
            }
            youtube={
              "https://www.youtube.com/watch?v=k4CDIGcQ3gc&list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            }
          />
        </Fade>
      </TitleSection>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Index);

export const getStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "home.json" });
  return {
    props: {
      pt,
    },
  };
};

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
    max-width: 520px;
    color: ${(props) => props.theme.colors.white};
  }
  h1 {
    color: ${(props) => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 830px;
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
      max-width: 360px;
    }
    h2 {
      font-size: 1.8rem;
      max-width: 420px;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 4rem;
      max-width: 450px;
    }
  }
  @media (max-width: 520px) {
    h1 {
      max-width: 280px;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 3.35rem;
      max-width: 250px;
    }
    h2 {
      font-size: 1.6rem;
      max-width: 280px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
  h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 570px) {
    grid-column: 1 / span 11;
  }
  @media (max-width: 420px) {
    grid-column: 1 / span 12;
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.3s ease all;
  & > div {
    padding-bottom: 6%;
  }
  @media (max-width: 900px) {
    padding-bottom: 6%;
  }
`;

const LogosSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: calc(70px + 5%);
  & > :nth-child(1) {
    color: ${(props) => props.theme.colors.foreground_lower};
    margin-bottom: 3.5rem;
  }
  & > :nth-last-child(1) {
    margin-top: 5.5rem;
  }
  @media (max-width: 1100px) {
    img {
      max-width: 700px !important;
    }
  }
  @media (max-width: 850px) {
    img {
      max-width: 400px !important;
    }
  }
  @media (max-width: 500px) {
    img {
      max-width: 300px !important;
    }
  }
  @media (max-width: 400px) {
    img {
      max-width: 250px !important;
    }
  }
`;

const HoverablePicture = styled.a`
  & > div span {
    border: 2.5px solid transparent !important;
    transition: 0.3s ease-out;
    border-radius: 35px;
    width: auto;
    &:hover {
      border-color: ${(p) => p.theme.colors.accent} !important;
    }
  }
`;
