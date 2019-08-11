import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Link from "next/link";
import FilePlayer from "react-player";
import TrackVisibility from "react-on-screen";
import { proyects } from "../portafolio/proyects.json";
import { useInView } from "react-intersection-observer";
import ReactCursorPosition from "react-cursor-position";

const Screen = props => {
  const [ref, inView, entry] = useInView({
    /* Optional options */
    threshold: 0.9,
    rootMargin: "200px"
  });
  useEffect(() => {
    console.log(inView);
    if (inView) {
      props.setCounter(props.counterNumber);
      console.log(props.counterNumber + "is in  view");
    }
  }, [inView]); // Only re-subscribe if props.friend.id changes

  return (
    <Proyect>
      <Info ref={ref}>
        <Slide bottom cascade when={inView}>
          <h2>{props.title}</h2>
          {props.title2 !== undefined ? <h2>{props.title2}</h2> : ""}
          <h3>{props.subtitle}</h3>
        </Slide>
        <Link href="/[id]" as={`/${props.link}`}>
          <Fade when={inView}>
            <h4>Ver Proyecto</h4>
          </Fade>
        </Link>
      </Info>
      <Video double={props.title2} style={{transform:`translate3d(${props.position.x-480}px, ${props.position.y-390}px, 0)`}}>
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
};

export default function Index() {
  const [counter, setCounter] = useState(1);
  // let refs = useRef([React.createRef(), React.createRef()]);

  var slides = Object.entries(proyects).map(function(_proyect, index) {
    var currentProyect = _proyect[1];
    var currentProyectId = _proyect[0];
    if (currentProyect.title === "Miedo Chico") {
      return;
    } else {
      return (
        <ReactCursorPosition style={{ gridColumn: "4 /span 6" }}>
          <Screen
            key={"screen" + index}
            // ref={refs.current[index]}
            counterNumber={index + 1}
            setCounter={setCounter}
            title={currentProyect.title}
            title2={currentProyect.title2}
            subtitle={currentProyect.subtitle}
            link={currentProyectId}
            clip={currentProyect.clip}
          />
        </ReactCursorPosition>
      );
    }
  });

  return (
    <HomeWrapper>
      <Head>
        <title>Antitesis Films</title>
      </Head>
      {slides}
      <Counter>
        <Fade>{counter + "/8"}</Fade>
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
