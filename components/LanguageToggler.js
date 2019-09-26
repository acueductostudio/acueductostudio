import styled from "styled-components";
import Link from "next/link";
import Language from "../static/assets/img/layout/language.svg";
import Router, { useRouter } from "next/router";

function LanguageToggler({ hasLoaded, locale, toggleLang }) {
  const router = useRouter();

  const handleLink = () => {
    // console.log(router);
    if (locale.lang == "en") {
      switch (router.asPath) {
        case "/en/work/ladanzadelasfieras":
          Router.push(router.route, "/portafolio/ladanzadelasfieras");
          break;
        case "/en/work/salvajenada":
          Router.push(router.route, "/portafolio/salvajenada");
          break;
        case "/en/work":
          Router.push(router.route, "/portafolio");
          break;
        case "/en/about":
          Router.push(router.route, "/nosotros");
          break;
        case "/en/manifesto":
          Router.push(router.route, "/manifiesto");
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
        case "/portafolio":
          Router.push(router.route, "/en/work");
          break;
        case "/nosotros":
          Router.push(router.route, "/en/about");
          break;
        case "/manifiesto":
          Router.push(router.route, "/en/manifesto");
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
    <Toggler reveal={hasLoaded}>
      {/* <Link href={link} scroll={false} passHref> */}
      <a onClick={handleLink}>
        <Language />
      </a>
      {/* </Link> */}
    </Toggler>
  );
}
export default LanguageToggler;

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
  opacity: ${props => (props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease 0.3s;

  svg {
    width: 33px;
    pointer-events: auto;
    padding: 15px;
    box-sizing: content-box;
    .fill * {
      fill: ${props => props.theme.colors.white};
    }
    .stroke * {
      fill: none;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.white};
    }
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    padding-top: 50px;
    padding-right: calc(22px + 1%);
  }
  @media (max-width: 450px) {
    padding-top: 30px;
    padding-right: 23px;
  }
  @media (max-height: 400px) and (max-width: 600px) {
    padding-top: 30px;
  }
`;
