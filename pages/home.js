import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import FilePlayer from "react-player";
import { proyects } from "../portafolio/proyects.json";
import { useInView } from "react-intersection-observer";
import ReactCursorPosition from "react-cursor-position";
import debounce from "lodash/debounce";

const Screen = props => {
  const [ref, inView, entry] = useInView({
    threshold: 0.9,
    rootMargin: "200px"
  });

  useEffect(() => {
    if (inView) {
      props.setCounter(props.counterNumber);
    }
  }, [inView]);

  return (
    <Proyect>
      <Info ref={ref}>
        <Slide bottom cascade when={inView}>
          <h2>{props.title}</h2>
          {props.title2 !== undefined ? <h2>{props.title2}</h2> : ""}
          <h3>{props.subtitle}</h3>
        </Slide>
        <Link href="/[id]" as={`/${props.link}`}>
          {/* <Fade when={inView}> */}
          <h4>Ver Proyecto</h4>
          {/* </Fade> */}
        </Link>
      </Info>
    </Proyect>
  );
};

const MouseFollow = props => {
  const [video, setVideo] = useState("antitesis.mp4");
  const [isVisible, setVisible] = useState(true);
  const [ref2, inView, entry] = useInView({
    threshold: 1,
    rootMargin: "0px"
  });

  const _p = Object.entries(proyects);

  useEffect(() => {
    setVisible(false);
    setVideo(_p[props.counter][1].clip);
    setTimeout(() => setVisible(true), 200);
    console.log(isVisible);
  }, [props.counter]);

  return (
    <Video
      style={{
        top: `${props.position.y + 100}px`,
        left: `${props.position.x + 250}px`
      }}
      ref={ref2}
    >
      <Fade
        when={isVisible}
        delay={0}
      >
        <FilePlayer
          url={`../static/assets/video/${video}`}
          style={{ height: 0, paddingBottom: "55%" }}
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
  );
};

export default function Index() {
  const [counter, setCounter] = useState(1);
  const positioning = useRef(null);

  const reset = debounce(
    () => {
      positioning.current.reset();
    },
    650,
    {
      leading: false,
      trailing: true
    }
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
          counterNumber={index}
          setCounter={setCounter}
          title={currentProyect.title}
          title2={currentProyect.title2}
          subtitle={currentProyect.subtitle}
          link={currentProyectId}
          clip={currentProyect.clip}
        />
      );
    }
  });

  return (
    <HomeWrapper onScroll={reset}>
      <Head>
        <title>Antitesis Films</title>
      </Head>
      <ReactCursorPosition
        style={{ gridColumn: "4 / span 6" }}
        ref={positioning}
      >
        {slides}
        <MouseFollow counter={counter} />
      </ReactCursorPosition>
      <Counter>
        <Fade>{counter + 1 + "/8"}</Fade>
      </Counter>
    </HomeWrapper>
  );
}

const Counter = styled.div`
  font-size: 1.32rem;
  position: fixed;
  bottom: 4%;
  left: 27%;
`;

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
  max-width: 390px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  z-index: -1;
  background-color: black;
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
