import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrows from "public/assets/img/layout/language2.svg";
import Router, { useRouter } from "next/router";

function LanguageToggler({ hasLoaded, locale, toggleLang }) {
  const router = useRouter();
  const [showToggler, setShowToggler] = useState(false);

  useEffect(() => {
    if (router.asPath.includes("/consultoria")) {
      setShowToggler(false);
    } else if (router.asPath.includes("/podcast")) {
      setShowToggler(false);
    } else if (router.asPath.includes("/diagnostico")) {
      setShowToggler(false);
    } else if (router.asPath.includes("/linkenbio")) {
      setShowToggler(false);
    } else {
      setShowToggler(true);
    }
  }, [router.route]);

  const handleLink = () => {
    if (locale.lang == "en") {
      switch (router.asPath) {
        case "/en/work/ladanzadelasfieras":
          Router.push(router.route, "/portafolio/ladanzadelasfieras");
          break;
        case "/en/work/salvajenada":
          Router.push(router.route, "/portafolio/salvajenada");
          break;
        case "/en/work/rahid":
          Router.push(router.route, "/portafolio/rahid");
          break;
        case "/en/work":
          Router.push(router.route, "/portafolio");
          break;
        case "/en/about":
          Router.push(router.route, "/nosotros");
          break;
        case "/en/contact":
          Router.push(router.route, "/contacto");
          break;
        case "/en/manifesto":
          Router.push(router.route, "/manifiesto");
          break;
        case "/en/pitch":
          Router.push(router.route, "/pitch");
          break;
        case "/en/cookies":
          Router.push(router.route, "/cookies");
          break;
        case "/en/privacy":
          Router.push(router.route, "/privacidad");
          break;
        default:
          Router.push(router.route, "/");
      }
      document.querySelector("html").lang = "es";
      toggleLang("es");
    } else {
      switch (router.asPath) {
        case "/portafolio/ladanzadelasfieras":
          Router.push(router.route, "/en/work/ladanzadelasfieras");
          break;
        case "/portafolio/salvajenada":
          Router.push(router.route, "/en/work/salvajenada");
          break;
        case "/portafolio/rahid":
          Router.push(router.route, "/en/work/rahid");
          break;
        case "/portafolio":
          Router.push(router.route, "/en/work");
          break;
        case "/nosotros":
          Router.push(router.route, "/en/about");
          break;
        case "/contacto":
          Router.push(router.route, "/en/contact");
          break;
        case "/manifiesto":
          Router.push(router.route, "/en/manifesto");
          break;
        case "/pitch":
          Router.push(router.route, "/en/pitch");
          break;
        case "/cookies":
          Router.push(router.route, "/en/cookies");
          break;
        case "/privacidad":
          Router.push(router.route, "/en/privacy");
          break;
        default:
          Router.push(router.route, "/en");
      }
      document.querySelector("html").lang = "en";
      toggleLang("en");
    }
  };

  return (
    <Toggler reveal={hasLoaded} available={showToggler}>
      <a onClick={handleLink}>
        <English>
          <span>
            {locale.lang === "es" ? "switch language" : "cambiar idioma"}
          </span>
          {locale.lang === "es" ? "english" : "español"}
        </English>
        <Stable>
          <Arrows />
        </Stable>
      </a>
    </Toggler>
  );
}
export default React.memo(LanguageToggler);

const English = styled.div`
  background-color: ${(props) => props.theme.colors.accent};
  padding: 9px 10px 10px 23px;
  position: absolute;
  margin-left: -8px;
  border-radius: 30px;
  width: 138px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-weight: 100;
  text-align: left;
  opacity: 0;
  transition: opacity 0.3s ease;
  font-size: 1.5rem;
  transform: translateX(-100%);
  span {
    font-size: 1.1rem;
    line-height: 1;
    width: 100%;
    color: ${(props) => props.theme.colors.background};
    font-weight: 300;
  }
  svg {
    width: 30px;
    padding: 15px;
    box-sizing: content-box;
    * {
      fill: ${(props) => props.theme.colors.white};
      font-family: inherit;
      font-weight: 300;
    }
  }
`;

const Stable = styled.div`
  svg {
    width: 30px;
    padding: 15px;
    box-sizing: content-box;
  }
`;

const Toggler = styled.div`
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
  padding-right: 35px;
  margin: 0px auto;
  max-width: 1500px;
  opacity: ${(props) => (props.available && props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease 0.3s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      mix-blend-mode: unset;
      svg {
        transform: scale(0.95);
      }
      ${English} {
        opacity: 1;
      }
    }
  }
  svg {
    width: 30px;
    pointer-events: ${(props) =>
      props.available && props.reveal ? "auto" : "none"};
    padding: 15px;
    box-sizing: content-box;
    transition: 0.2s ease-in transform;
    .fill * {
      fill: ${(props) => props.theme.colors.white};
    }
    .stroke * {
      fill: none;
      stroke-width: ${(props) => props.theme.stroke};
      stroke: ${(props) => props.theme.colors.white};
    }
  }
  &:active {
    svg {
      transform: scale(0.9);
    }
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    padding-top: 40px;
    padding-right: calc(22px + 1%);
  }
  @media (max-width: 450px) {
    padding-top: 20px;
    padding-right: 23px;
  }
  @media (max-height: 450px) {
    align-items: flex-start;
    padding-top: 24px;
    padding-right: 25px;
  }
  @media (max-height: 450px) and (max-width: 600px) {
    align-items: flex-start;
    padding-top: 20px;
  }
`;
