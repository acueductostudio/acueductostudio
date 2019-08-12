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

const Process = props => {
  let t = props.t;
  return (
    <ProcessWrapper>
      <h3>{t.services.title}</h3>
      <p>{t.services.p}</p>
    </ProcessWrapper>
  );
};

const ProcessWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  min-height:100vh;
`;

export default function Index(props) {
  let t = props.locale.home_page;
  return (
    <>
      <Background />
      <HomeWrapper>
        <Scroller>
          <Head>
            <title>Acueducto</title>
          </Head>
          <Land>
            <h1>{t.landing.heading}</h1>
            <h2>{t.landing.tagline}</h2>
          </Land>
          <Intro>
            <h3>{t.intro.title}</h3>
            <p>{t.intro.p}</p>
            <p>{t.intro.link}</p>
          </Intro>
          <Process t={t} />
        </Scroller>
      </HomeWrapper>
    </>
  );
}

const Scroller = styled.div`
  position: relative;
  min-height: 100vh;
  overflow-y: scroll;
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  background-color: red;
`;

const Land = styled.div`
  min-height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Intro = styled.div`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  min-height:100vh;
`;

const HomeWrapper = styled.div`
  display: flex;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: absolute;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow: hidden;
`;
