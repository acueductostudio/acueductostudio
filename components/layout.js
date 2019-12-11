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
import { initGA, logPageView } from "utils/analytics";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const HomeSketch = dynamic(import("../components/homeSketch/HomeSketch2"), {
  ssr: false
});

export default ({
  children,
  toggleLang,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale
}) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const [headerTitle, setTitle] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    if (router.route === "/" || router.route === "/en") {
      setShowSketch(true);
      setShowArrow(true);
    } else {
      setShowSketch(false);
      setShowArrow(false);
    }
  }, [router.route]);

  useEffect(() => {
    if (showArrow || showConsentMessage) {
      document.body.onscroll = function() {
        checkScroll();
      };
      document.querySelector("#Clipper").onscroll = function() {
        checkScroll();
      };
    }
  }, [showArrow]);

  useEffect(() => {
    let targetElement = document.querySelector("#Nav");
    if (isOpen) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }
  }, [isOpen]);

  const checkScroll = () => {
    if (
      document.getElementById("Clipper").scrollTop > 100 ||
      window.scrollY > 100
    ) {
      document.body.onscroll = null;
      document.querySelector("#Clipper").onscroll = null;
      setShowArrow(false);
      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const doConsentToCookies = () => {
    consentToCookies();
  };

  return (
    <>
      <PageWrapper id="Wrapper">
        {showSketch && <HomeSketch hide={false} />}
        <Border />
        <NavTrigger
          toggleNav={toggleNav}
          isOpen={isOpen}
          hasLoaded={hasLoaded}
        />
        <Header
          isOpen={isOpen}
          headerTitle={headerTitle}
          hasLoaded={hasLoaded}
          closeNav={closeNav}
          locale={locale}
          route={router.route}
        />
        <Nav
          locale={locale}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        {React.cloneElement(children, { setTitle: setTitle })}

        <LanguageToggler
          locale={locale}
          hasLoaded={hasLoaded}
          toggleLang={toggleLang}
        />
        <ScrollIncentive hasLoaded={hasLoaded} showArrow={showArrow} />
        <CookieMessage
          locale={locale}
          doConsentToCookies={doConsentToCookies}
          hasToConsent={hasToConsent}
        />
        <BodyOverflow isOpen={isOpen} hasLoaded={hasLoaded} />
      </PageWrapper>
    </>
  );
};

const BodyOverflow = createGlobalStyle`
  .TopBar{
    box-shadow: 1px 1px 4px ${props => props.theme.colors.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
    #Wrapper{
      overflow: ${props => (props.hasLoaded ? "unset" : "hidden")};
      height:${props => (props.hasLoaded ? "unset" : "100%")};
    }
    body {
    overflow-y: ${props => (props.hasLoaded ? "auto" : "hidden")};
      &:after,&:before{
        content: " ";
        position: fixed;
        right: 0;
        left: 0;
        height: 18px;
        z-index:100;
        background-color: ${props => props.theme.colors.background};
      }
      &:before {
        top:0;
      }
      &:after {
        bottom:0;
      }
    }  
  }
`;

const PageWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;

const Border = styled.div`
  opacity: 1;
  pointer-events: none;
  z-index: 99;
  width: calc(100% - 36px);
  height: calc(100% - 36px);
  background-color: none;
  position: fixed;
  left: 18px;
  top: 18px;
  right: 18px;
  bottom: 18px;
  margin: 0 auto;
  max-width: 1504px;
  mix-blend-mode: exclusion;
  transition: opacity 0.3s ease-in, border 0.3s ease-in;
  border: ${props =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground}`};
  @media (max-width: 600px), (max-height: 450px) {
    mix-blend-mode: normal;
  }
`;
