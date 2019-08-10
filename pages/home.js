import { useEffect, useState } from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import FilePlayer from "react-player";
import { proyects } from "../portafolio/proyects.json";

const H4Link = props => (
  <Link href="/[id]" as={`/${props.id}`}>
    <h4>Ver Proyecto</h4>
  </Link>
);

const Screen = props => (
  <Proyect>
    <Info>
      <Slide bottom cascade>
        <h2>{props.title}</h2>
        {props.title2 !== undefined ? <h2>{props.title2}</h2> : ""}
        <h3>{props.subtitle}</h3>
        <H4Link id={props.link} />
      </Slide>
    </Info>
    <Video double={props.title2}>
      <Fade>
        <FilePlayer
          url={`../static/assets/video/${props.clip}`}
          muted={true}
          volume={0}
          controls={false}
          loop={true}
          playing={true}
          wrapper={"figure"}
          width={"100%"}
          height={"auto"}
        />
      </Fade>
    </Video>
  </Proyect>
);

var slides = Object.entries(proyects).map(function(_proyect, index) {
  var currentProyect = _proyect[1];
  var currentProyectId = _proyect[0];
  if (currentProyect.title === "Miedo Chico") {
    return;
  } else {
    return (
      <Screen
        key={"screen" + index}
        title={currentProyect.title}
        title2={currentProyect.title2}
        subtitle={currentProyect.subtitle}
        link={currentProyectId}
        clip={currentProyect.clip}
      />
    );
  }
});

export default function Index() {
  return (
    <HomeWrapper>
      <Head>
        <title>Antitesis Films</title>
      </Head>
      {slides}
    </HomeWrapper>
  );
}

const Proyect = styled.section`
  grid-column: 4 / span 7;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto auto auto;
  align-items: flex-start;
  position: relative;
  height: calc(100vh - 180px);
  scroll-snap-align: end;
  scroll-snap-stop: always;
  h3 {
    grid-column: 1 / span 7;
    margin-bottom: 0;
  }
  h2 {
    grid-column: 1 / span 7;

    text-transform: uppercase;
    font-size: 3.2rem;
    grid-row: 1;
  }
  h4 {
    grid-column: 1 / span 7;

    display: inline-flex;
    cursor: pointer;
    overflow: visible;
    text-decoration: none;
    padding-bottom: 4px;
    border-bottom: 2px solid ${props => props.theme.colors.background};
    transition: border-color 0.3s ease;
    &:hover {
      border-color: ${props => props.theme.colors.foreground};
    }
  }
`;

const HomeWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  padding: 180px 4% 0 4%;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Info = styled.div`
  grid-column: span 7;
  padding-bottom: 4%;
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
`;

const Video = styled.div`
  grid-column: 5 / span 3;
  max-width: 390px;
  height: auto;
  position: absolute;
  width: 100%;
  z-index: -1;
  margin-top: ${props => (props.double ? "70%" : "52%")};
  figure {
    background-size: cover;
    background-position: center;
    z-index: 10;
    width: 100%;
    height: 100%;
    margin: 0;
  }
  @media (max-width: 900px) {
    grid-column: 4 / span 2;
  }
  @media (max-width: 700px) {
    height: 130px;
  }
`;
