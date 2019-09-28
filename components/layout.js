import dynamic from "next/dynamic";
import styled from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import LanguageToggler from "./LanguageToggler";
import NavTrigger from "./NavTrigger";
import { useRouter } from "next/router";
import CookieMessage from "./CookieMessage";
import ScrollIncentive from "./ScrollIncentive";
import { initGA, logPageView } from "utils/analytics";

const HomeSketch = dynamic(import("../components/homeSketch/HomeSketch"), {
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

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  const doConsentToCookies = () => {
    consentToCookies();
  };

  const removeArrow = () => {
    if (document.getElementById("Clipper").scrollTop > 100) {
      setShowArrow(false);
      checkForConsent();
      setShowConsentMessage(false);
    }
  };

  return (
    <>
      <PageWrapper
        id="Wrapper"
        onScroll={showArrow || showConsentMessage ? removeArrow : null}
      >
        {showSketch && <HomeSketch />}
        {/* {showSketch && <Background />} */}
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
        <ScrollIncentive
          hasLoaded={hasLoaded}
          showArrow={showArrow}
          isOpen={isOpen}
        />
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
  max-height: 100vh;
  position: fixed;
  flex-direction: column;
  overflow: hidden;
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
`;

const Background = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0%;
  background-image: url("/static/assets/img/layout/fond.jpg");
  background-size: cover;
`;
