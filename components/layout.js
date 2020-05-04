import { useEffect, useState, useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import LanguageToggler from "./LanguageToggler";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import ScrollIncentive from "./ScrollIncentive";
import { initGA, logPageView } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import NewsletterPopup from "./NewsletterPopup";

const HomeSketch = dynamic(import("../components/homeSketch/HomeSketch"), {
  ssr: false,
});

export default ({
  children,
  toggleLang,
  checkForConsent,
  consentToCookies,
  hasToConsent,
  hasLoaded,
  locale,
}) => {
  const [isOpen, setOpen] = useState(false);
  const [showSketch, setShowSketch] = useState(true);
  const [isAbout, setIsAbout] = useState(false);
  const [headerTitle, setTitle] = useState("");
  const [showArrow, setShowArrow] = useState(false);
  const [showConsentMessage, setShowConsentMessage] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const router = useRouter();
  const mouse = useRef([1200, 1]);

  const onMouseMove = useCallback(
    ({ clientX: x, clientY: y }) =>
      (mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2]),
    [mouse.current]
  );

  const onTouchMove = useCallback(
    (e) => {
      const touch = e.changedTouches[0];
      var x = touch.clientX;
      var y = touch.clientY;
      mouse.current = [x - window.innerWidth / 2, y - window.innerHeight / 2];
    },
    [mouse.current]
  );

  useEffect(() => {
    const options = {
      autoConfig: true, 
      debug: false,
    };
    ReactPixel.init("506854653278097", null, options);
  }, []);

  useEffect(() => {
    if (!window.GA_INITIALIZED) {
      initGA();
      window.GA_INITIALIZED = true;
    }
    logPageView();
    ReactPixel.pageView(); // For tracking page view
    mouse.current[0] = window.innerWidth > 600 ? 1200 : 300;
    if (router.route === "/" || router.route === "/en") {
      setShowSketch(true);
      setShowArrow(true);
      setIsAbout(false);
      setShowPopup(false);
    } else if (router.route === "/nosotros" || router.route === "/en/about") {
      setIsAbout(true);
      setShowSketch(false);
      setShowArrow(false);
      setShowPopup(false);
    } else if (router.route === "/podcast") {
      setIsAbout(false);
      setShowSketch(false);
      setShowArrow(false);
      setShowPopup(true);
    } else {
      setShowSketch(false);
      setShowArrow(false);
      setIsAbout(false);
      setShowPopup(false);
    }
  }, [router.route]);

  useEffect(() => {
    if (showArrow || showConsentMessage) {
      document.body.onscroll = function () {
        checkScroll();
      };
      document.querySelector("#Clipper").onscroll = function () {
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
      <PageWrapper
        id="Wrapper"
        onMouseMove={showSketch | isAbout ? onMouseMove : undefined}
        onTouchMove={showSketch | isAbout ? onTouchMove : undefined}
      >
        {hasLoaded && showSketch && <HomeSketch hide={false} mouse={mouse} />}
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
        {React.cloneElement(children, {
          setTitle: setTitle,
          hasLoaded: hasLoaded,
          mouse: mouse,
        })}

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
        {showPopup && <NewsletterPopup />}
      </PageWrapper>
    </>
  );
};

const BodyOverflow = createGlobalStyle`
  .TopBar{
    box-shadow: 1px 1px 4px ${(props) => props.theme.colors.accent};
  }
  @media (max-width: 600px), (max-height:450px) {
    .react-reveal {
    animation: none !important;
    opacity: 1 !important;
    }
    #Wrapper{
      overflow: ${(props) => (props.hasLoaded ? "unset" : "hidden")};
      height:${(props) => (props.hasLoaded ? "unset" : "100%")};
    }
    body {
    overflow-y: ${(props) => (props.hasLoaded ? "auto" : "hidden")};
      &:after,&:before{
        content: " ";
        position: fixed;
        right: 0;
        left: 0;
        height: 18px;
        z-index:100;
        background-color: ${(props) => props.theme.colors.background};
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

const BackgroundOpacity = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.visible ? 0.6 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: opacity 0.4s ease;
`;

const PageWrapper = styled.div`
  top: -3px;
  position: relative;
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: flex-start;
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
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
  border: ${(props) =>
    `${props.theme.stroke} solid ${props.theme.colors.foreground}`};
  @media (max-width: 600px), (max-height: 450px) {
    mix-blend-mode: normal;
  }
`;
