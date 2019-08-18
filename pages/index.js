import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";
import TitleSection from "../components/TitleSection";
import Loader from "../components/loader";
import Process from "../components/Process";
import CaseStudiesSmall from "../components/CaseStudiesSmall";

export default function Index(props) {
  let t = props.locale.home_page;
  return (
    <>
      <HomeWrapper>
        <Scroller>
          <Head>
            <title>Acueducto</title>
          </Head>
          <Land>
            <LandContainer>
              <h1>{t.landing.heading}</h1>
              <h2>{t.landing.tagline}</h2>
            </LandContainer>
          </Land>
          <Intro>
            <TitleSection
              title={t.intro.title}
              text={t.intro.p}
              link={t.intro.link}
              borderTop
            />
            <ImageGallery>
              <Image
                columnStart={5}
                columnEnd={8}
                ratio={60}
                style={{
                  backgroundImage: "url(./static/assets/img/layout/intro_1.jpg)"
                }}
              />
              <Image
                columnStart={1}
                columnEnd={6}
                ratio={80}
                style={{
                  backgroundImage:
                    "url(./static/assets/img/layout/intro_2.jpg)",
                  transform: "translateY(-70%)"
                }}
              />
            </ImageGallery>
          </Intro>
          <Process t={t} />
          <CaseStudiesSmall t={t} />
        </Scroller>
      </HomeWrapper>
    </>
  );
}

const Image = styled.figure`
  height: 0;
  padding-bottom: ${props => (props.ratio ? props.ratio + "%" : "60%")};
  background-size: 106%;
  background-position: center;
  transition: background-size 0.5s ease, margin 0.3s ease;
  background-color: pink;
  grid-column: ${props => (props.columnStart ? props.columnStart : 1)} / span
    ${props => (props.columnEnd ? props.columnEnd : 5)};
  &:hover {
    background-size: 100%;
    margin: 0 20px;
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

const Scroller = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: scroll;
`;

const Land = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  align-items: center;
  h2 {
    font-size: 2.1rem;
    margin-top: 4%;
    color: ${props => props.theme.colors.white};
  }
  h1 {
    color: ${props => props.theme.colors.white};
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3 / span 6;
`;

const Intro = styled.div`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  min-height: 100vh;
  transition: 0.3s ease all;
`;

const HomeWrapper = styled.div`
  display: flex;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: absolute;
  margin: 0 auto;
  max-width: 1496px;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow: hidden;
`;
