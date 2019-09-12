import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Link from "next/link";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { useInView } from "react-intersection-observer";
import TitleSection from "../components/TitleSection";
import PageClipper from "../components/PageClipper";
import Loader from "../components/loader";
import Process from "../components/Process";
import CaseStudiesPreview from "../components/CaseStudies/CaseStudiesPreview";
import ContactFooter from "../components/ContactFooter";
import createMarkup from "../helpers/createMarkup";
import Services from "../components/Services";
import LogoComplete from "../static/assets/img/layout/logoComplete.svg";

export default function Index(props) {
  let t = props.locale.home_page;
  let c = props.locale.casestudies;
  let s = props.locale.services;
  let p = props.locale.process;
  let f = props.locale.contactfooter;
  return (
    <>
      <PageClipper>
        <Head>
          <title>Acueducto</title>
        </Head>
        <Land>
          <LandContainer>
            <h1 dangerouslySetInnerHTML={createMarkup(t.landing.heading)} />
            <h2>{t.landing.tagline}</h2>
          </LandContainer>
        </Land>
        <Intro>
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
          <Padded>
            <Boxed>
              <LogoComplete />
            </Boxed>
          </Padded>
        </ImageGalleryRemovable>
        <Process p={p} />
        <CaseStudiesPreview c={c} />
        <Services s={s} />
        <ContactFooter f={f} />
      </PageClipper>
    </>
  );
}

const Boxed = styled.div`
    border: 2px solid white;
    padding: 20%;
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
  justify-content: center;
`;

const Padded = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  grid-column: 4 / span 7;
  &:after {
    content: " ";
    width: 100%;
    height: 100px;
    display: flex;
    background-color: ${props => props.theme.colors.background};
  }
  svg {
    max-width: 370px;
    width: 100%;
  }
`;

const ImageGalleryRemovable = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 4% 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 4%;
  align-content: center;
  justify-content: center;
  &:before,
  &:after {
    content: " ";
    height: 100%;
    display: flex;
    background-color: ${props => props.theme.colors.background};
  }
  &:before {
    grid-column: 1 / span 3;
  }
  &:after {
    grid-column: 11 / span 4;
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
  min-height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  align-items: center;
  h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    color: ${props => props.theme.colors.white};
    max-width: 498px;
  }
  h1 {
    color: ${props => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 3 / span 8;
`;

const Intro = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  transition: 0.3s ease all;
`;
