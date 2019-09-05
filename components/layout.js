import Head from "next/head";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import NightMode from "../static/assets/img/layout/night.svg";
import Language from "../static/assets/img/layout/language.svg";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";


const Sketch = dynamic(import("../components/sketch/Sketch"), {
  loading: () => <p>Loading wrapper...</p>,
  ssr: false
});

export default ({ children, title = "Acueducto", changeTheme, locale }) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const [headerTitle, setTitle] = useState("")
  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      setShowSketch(true);
      setTitle("")
    } else {
      setTitle(router.route.split("/").pop())
      setShowSketch(false);
    }
    console.log(router.route);
  }, [router.route]);

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
      </Head>
      <Styles />
      <PageWrapper>
        {showSketch? <Sketch/> : ""}
        {/* {showSketch? <Background /> : ""} */}
        <Border />
        <NavTrigger toggleNav={toggleNav} isOpen={isOpen} />
        <Header closeNav={closeNav} isOpen={isOpen} title={headerTitle}/>
        <HeaderTitle>{headerTitle}</HeaderTitle>
        <Nav
          locale={locale}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        {children}
        <ModeToggler isOpen={isOpen} onClick={() => doChangeTheme()}>
          <Language />
        </ModeToggler>
      </PageWrapper>
    </>
  );
};

const HeaderTitle = styled.div`
    position:absolute;
    left:50%;
    transform: translateX(-50%);
    text-transform: uppercase;
    font-size:1.4rem;
    letter-spacing:4px;
    z-index: 2;
    top: 66px;
    mix-blend-mode: exclusion;
`;

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
    .a {
      fill: ${props => props.theme.colors.white};
    }
    * {
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
  background-image: url("../static/assets/img/layout/fond.jpg");
  background-size: cover;
`;

const Styles = createGlobalStyle`
      body {
        color: ${props => props.theme.colors.foreground};
      }
`;
