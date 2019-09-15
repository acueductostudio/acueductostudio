import Head from "next/head";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import LanguageToggler from "./LanguageToggler";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import ScrollIncentive from "./ScrollIncentive";

const HomeSketch = dynamic(import("../components/homeSketch/HomeSketch"), {
  ssr: false
});

export default ({
  children,
  title = "NO TITLE",
  changeTheme,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale
}) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const [headerTitle, setTitle] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (router.route === "/") {
      setShowSketch(true);
      setShowArrow(true);
    } else {
      setShowSketch(false);
      setShowArrow(false);
    }
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

  const doConsentToCookies = () => {
    consentToCookies();
  };

  const removeArrow = () => {
    if (document.getElementById("Clipper").scrollTop > 100){
      setShowArrow(false);
    }
  }

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <PageWrapper onScroll={showArrow ? removeArrow : null}>
        {showSketch? <HomeSketch/> : ""}
        {/* {showSketch ? <Background /> : ""} */}
        <Border />
        <NavTrigger toggleNav={toggleNav} isOpen={isOpen} hasLoaded={hasLoaded}/>
        <Header closeNav={closeNav} isOpen={isOpen} headerTitle={headerTitle} hasLoaded={hasLoaded}/>
        <Nav
          locale={locale}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        {React.cloneElement(children, { setTitle: setTitle })}
        <LanguageToggler doChangeTheme={doChangeTheme} hasLoaded={hasLoaded}/>
        <ScrollIncentive hasLoaded={hasLoaded} showArrow={showArrow} isOpen={isOpen}/>
        <CookieMessage
          locale={locale}
          doConsentToCookies={doConsentToCookies}
          hasToConsent={hasToConsent}
        />
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

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0%;
  background-image: url("../static/assets/img/layout/fond.jpg");
  background-size: cover;
`;