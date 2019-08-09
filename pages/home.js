import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Link from "next/link";

const H4Link = props => (
    <Link href="/[id]" as={`/${props.id}`}>
      <h4>Ver Proyecto</h4>
    </Link>
);

export default function Index() {
  const [date, setDate] = useState([]);
  return (
    <HomeWrapper>
      <Head>
        <title>Antitesis Films</title>
      </Head>
      <Info>
        <Slide bottom cascade>
          <h2>Antitesis</h2>
          <h2>Films</h2>
          <h3>2019 Showreel</h3>
          <H4Link id="reel" />
        </Slide>
      </Info>
      <Video>
        <Fade>
          <figure
            style={{
              backgroundImage: `url(../static/assets/img/reel/reel2.jpg)`
            }}
          />
        </Fade>
      </Video>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  position: relative;
  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const Info = styled.div`
  grid-column: 4 / span 5;
  padding-bottom: 4%;
  h2 {
    text-transform: uppercase;
    font-size: 3.2rem;
    max-width: 490px;
  }
  h4{
    
  }
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
`;

const Video = styled.div`
  grid-column: 8 / span 3;
  max-width: 360px;
  height: 190px;
  position: absolute;
  width: 100%;
  z-index: -1;
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
