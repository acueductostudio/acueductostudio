import { useEffect, useState } from "react";
import Head from "next/head";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";


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
          <h4>Ver Proyecto</h4>
        </Slide>
      </Info>
      <Video>
        <Fade>
        <figure
          style={{ backgroundImage: `url(../static/assets/img/reel/reel.jpg)` }}
        />
        </Fade>
      </Video>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  display: grid;
  /* grid-template-columns: 1fr 1.4fr 1.65fr; */
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
`;

const Info = styled.div`
  grid-column: 4 / span 4;
  padding-bottom: 4%;
  h2 {
    text-transform: uppercase;
    font-size: 3.4rem;
    max-width: 490px;
  }
`;

const Video = styled.div`
  grid-column: 8 / span 3;
  max-width: 360px;
  height: 190px;
  figure {
    background-size: cover;
    z-index: 10;
    width: 100%;
    height: 100%;
    margin: 0;
  }
`;
