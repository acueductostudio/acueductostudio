import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import Router from "next/router";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import { proyects } from "../portafolio/proyects.json";
import React, { useState, useEffect } from "react";
import VideoPlayer from "../components/videoPlayer";

const Post = ({ queryId }) => {
  const router = useRouter();
  const proyect = proyects[`${queryId}`];

  function set(x) {
    return { __html: x };
  }

  var description =
    proyect.description !== undefined ? <p>{proyect.description}</p> : "";

  var credits =
    proyect.credits !== undefined ? (
      <p dangerouslySetInnerHTML={set(proyect.credits)} />
    ) : (
      ""
    );

  var otherProyects = Object.entries(proyects).map(function(_proyect, index) {
    var currentProyect = _proyect[1];
    var currentProyectId = _proyect[0];

    if (
      currentProyect.title === proyect.title ||
      currentProyect.title === "Miedo Chico"
    ) {
      return;
    } else {
      return (
        <Fade key={"proyect" + index}>
          <Link href={`/[id]`} as={`/${currentProyectId}`}>
            <figure
              style={{
                backgroundImage:
                  `url(../static/assets/img/stills/` +
                  currentProyect.still +
                  `)`
              }}
            />
          </Link>
        </Fade>
      );
    }
  });
  return (
    <ProyectWrapper key={"player" + proyect + Math.random()}>
      <Head>
        <title>Antítesis Films | {router.query.id}</title>
      </Head>
      <PlayerContainer>
        <Fade>
          <VideoPlayer
            url={proyect.videoUrl}
            still={`../static/assets/img/stills/${proyect.still}`}
          />
        </Fade>
      </PlayerContainer>
      <Slide bottom cascade>
        <h2>{proyect.title}</h2>
        {proyect.title2 !== undefined ? <h2>{proyect.title2}</h2> : ""}
      </Slide>
      <Fade>
        <h3>{proyect.subtitle}</h3>
        {description}
        {credits}
        <h4>Otros Proyectos</h4>
      </Fade>
      <OtrosProyectos>{otherProyects}</OtrosProyectos>
    </ProyectWrapper>
  );
};

Post.getInitialProps = async ({ query }) => {
  return { queryId: query.id };
};

export default Post;

const PlayerContainer = styled.div`
  grid-column: 4 / span 6;
`;

const OtrosProyectos = styled.div`
  grid-column: 4 / span 6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  figure {
    background-size: cover;
    grid-column-end: span 2;
    background-color: pink;
    height: 0;
    padding-bottom: 50%;
    cursor: pointer;
  }
`;

const ProyectWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding-bottom: 160px;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  p,
  h3,
  h4,
  h2 {
    grid-column: 4 / span 6;
  }
  h2 {
    text-transform: uppercase;
    font-size: 3.2rem;
  }
  p {
    b {
      font-family: "DrunkWide", sans-serif;
    }
  }
`;
