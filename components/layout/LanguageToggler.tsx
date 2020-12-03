import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Arrows from "public/assets/img/layout/language2.svg";
import Router, { useRouter } from "next/router";

const oneLangPages = ["consultoria", "podcast", "diagnostico", "linkenbio"];

function LanguageToggler({ hasLoaded, locale }) {
  const router = useRouter();
  const [showToggler, setShowToggler] = useState(false);

  useEffect(() => {
    if (oneLangPages.some((v) => router.asPath.includes(v))) {
      setShowToggler(false);
    } else {
      setShowToggler(true);
    }
  }, [router.route]);

  const handleLink = () => {
    console.log(router.asPath + " " + router.locale);
    if (locale == "en") {
      switch (router.asPath) {
        case "/work/rahid":
          Router.push("/portafolio/rahid", "/portafolio/rahid", {
            locale: "es",
          });
          break;
        case "/work/ladanzadelasfieras":
          Router.push(
            "/portafolio/ladanzadelasfieras",
            "/portafolio/ladanzadelasfieras",
            {
              locale: "es",
            }
          );
          break;
        case "/work/salvajenada":
          Router.push("/portafolio/salvajenada", "/portafolio/salvajenada", {
            locale: "es",
          });
          break;
        case "/work":
          Router.push("/portafolio", "/portafolio", { locale: "es" });
          break;
        case "/about":
          Router.push("/nosotros", "/nosotros", { locale: "es" });
          break;
        case "/contact":
          Router.push("/contacto", "/contacto", { locale: "es" });
          break;
        case "/pitch":
          Router.push("/pitch", "/pitch", { locale: "es" });
          break;
        case "/cookies":
          Router.push("/cookies", "/cookies", { locale: "es" });
          break;
        case "/privacy":
          Router.push("/privacidad", "/privacidad", { locale: "es" });
          break;
        case "/":
          Router.push("/", "/", { locale: "es" });
          break;
        default:
          Router.push(router.route, "/problemas");
      }
    } else {
      switch (router.asPath) {
        case "/portafolio/rahid":
          Router.push("/portafolio/rahid", "/work/rahid", {
            locale: "en",
          });
          break;
        case "/portafolio/ladanzadelasfieras":
          Router.push(
            "/portafolio/ladanzadelasfieras",
            "/work/ladanzadelasfieras",
            {
              locale: "en",
            }
          );
          break;
        case "/portafolio/salvajenada":
          Router.push("/portafolio/salvajenada", "/work/salvajenada", {
            locale: "en",
          });
          break;
        case "/portafolio":
          Router.push("/portafolio", "/work", { locale: "en" });
          break;
        case "/nosotros":
          Router.push("/nosotros", "/about", { locale: "en" });
          break;
        case "/contacto":
          Router.push("/contacto", "/contact", { locale: "en" });
          break;
        case "/pitch":
          Router.push("/pitch", "/pitch", { locale: "en" });
          break;
        case "/cookies":
          Router.push("/cookies", "/cookies", { locale: "en" });
          break;
        case "/privacidad":
          Router.push("/privacidad", "/privacy", { locale: "en" });
          break;
        case "/":
          Router.push("/", "/en", { locale: "en" });
          break;
        default:
          Router.push(router.route, "/trouble");
      }
    }
  };

  return (
    <Toggler reveal={hasLoaded} available={showToggler}>
      <a onClick={handleLink}>
        <Reveal>
          <span>{locale === "es" ? "switch language" : "cambiar idioma"}</span>
          {locale === "es" ? "english" : "español"}
        </Reveal>
        <Icon>
          <Arrows />
        </Icon>
      </a>
    </Toggler>
  );
}
export default React.memo(LanguageToggler);

const Reveal = styled.div`
  mix-blend-mode: exclusion;
  background-color: ${(props) => props.theme.colors.accent};
  box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.2);
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

const Icon = styled.div`
  svg {
    width: 30px;
    padding: 15px;
    box-sizing: content-box;
  }
`;

const Toggler = styled.div<{ reveal: boolean; available: boolean }>`
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
  transition: opacity 0.3s ease 0.35s;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      /* mix-blend-mode: unset; */
      svg {
        transform: scale(0.95);
      }
      ${Reveal} {
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
