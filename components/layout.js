import Head from "next/head";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import NightMode from "../static/assets/img/layout/night.svg";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";


const Sketch = dynamic(import("../components/sketch/Sketch"), {
  loading: () => <p>Loading wrapper...</p>,
  ssr: false
});

export default ({ children, title = "Antitesis", changeTheme, locale }) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      setShowSketch(true);
    } else {
      setShowSketch(false);
    }
    console.log(router.route);
  }, [router.route]);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  // useEffect(() => {
  //   document.getElementById("PageWrapper").scrollTop = 0;
  // });

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const doChangeTheme = () => {
    changeTheme();
  };

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styles />
      <PageWrapper id="PageWrapper">
        {/* {showSketch? <Sketch/> : " "} */}
        {showSketch? <Background /> : " "}
        <Border />
        <NavTrigger toggleNav={toggleNav} isOpen={isOpen} />
        <Header closeNav={closeNav} isOpen={isOpen} />
        <Nav
          locale={locale}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        {children}
        <ModeToggler isOpen={isOpen} onClick={() => doChangeTheme()}>
          <NightMode />
        </ModeToggler>
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  flex-direction: column;
  overflow-y: scroll;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;

const Border = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  background-color: none;
  position: fixed;
  left: 20px;
  top: 20px;
  right: 20px;
  bottom: 20px;
  margin: 0 auto;
  max-width: 1500px;
  mix-blend-mode: exclusion;
  transition: opacity 0.3s ease-in, border 0.3s ease-in;
  border: ${props =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground}`};
`;

const ModeToggler = styled.div`
  cursor: pointer;
  bottom: 50%;
  display: flex;
  z-index: 10;
  height: 100%;
  mix-blend-mode: exclusion;
  pointer-events: none;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding-right: 50px;
  margin: 0px auto;
  max-width: 1500px;
  svg {
    width: 30px;
    pointer-events: auto;
    path {
      fill: ${props => props.theme.colors.white};
    }
    circle {
      fill: none;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.white};
    }
  }
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0%;
  background-image: url("./static/assets/img/layout/fond.jpg");
  background-size: cover;
`;

const Styles = createGlobalStyle`
      body {
        color: ${props => props.theme.colors.foreground};
      }
`;
