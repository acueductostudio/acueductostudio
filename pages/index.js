import Link from "next/link";
import logo from "../static/logo.svg";
import soon from "../static/assets/img/soon.svg";
import styled, { createGlobalStyle } from "styled-components";
import Head from "next/head";

export default function Landing() {
  return (
    <>
      <Head>
        <title>Antítesis | Próximamente</title>
      </Head>
      <Wrapper>
        <Logo />
        <Coming />
        <Social>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/somos.antitesis"
          >
            fb
          </a>{" "}
          —{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/somos.antitesis/"
          >
            ig
          </a>
        </Social>
        <Date>
          <Link href="/home">© MMXIX</Link>
        </Date>
        <StylesX />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  box-sizing: border-box;
  padding: 5%;
  height: 100%;
  overflow: hidden;
  text-transform: uppercase;
  background-color: black;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  @media (max-width: 1000px) {
    font-size: 0.8rem;
  }
  @media (max-width: 800px) {
    font-size: 0.7rem;
  }
  @media (max-width: 500px) {
    font-size: 0.6rem;
  }
`;

const Logo = styled(logo)`
  max-width: 400px;
  width: 100%;
  min-width: 200px;
  justify-self: center;
  align-self: center;
  grid-column: 2 / span 2;
  grid-row: 1 / span 4;
  height: 100%;
  margin-bottom: 80px;
`;

const Social = styled.div`
  grid-column: 1 / span 1;
  grid-row: 4 / span 1;
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.5em;
  min-width: 85px;
  a {
    color: white;
    text-decoration: none;
  }
`;

const Date = styled.div`
  grid-column: 4 / span 1;
  grid-row: 4 / span 1;
  align-self: flex-end;
  justify-self: flex-end;
  font-size: 1.5em;
  min-width: 100px;
  a {
    text-decoration: none;
    color: white;
  }
`;

const Coming = styled(soon)`
  max-width: 400px;
  width: 100%;
  min-width: 200px;
  grid-column: 2 / span 2;
  grid-row: 4 / span 1;
  align-self: flex-end;
  justify-self: center;
  text-align: center;
  margin-bottom: 3px;
  overflow: visible;
  display: block;
  text {
    fill: white;
    font-weight: bold;
    color: white;
    font-family: inherit;
  }
  @media (max-width: 800px) {
    align-self: center;
    margin-bottom: 0;
  }
  @media (min-width: 535px) and (orientation: landscape) {
    align-self: flex-end;
    margin-bottom: 3px;
  }
`;

const StylesX = createGlobalStyle`
      html {
        height: 100vh;
        overflow: hidden;
      }

      body {
        margin: 0;
        padding: 0;
        background-color: black;
        color: white;
        height: 100vh;
        width: 100%;
        overflow: hidden;
      }

      #__next {
        height: 100%;
        width: 100%;
      }
      header{
        display:none !important;
      }
      footer{
        display: none !important
      }
`;
