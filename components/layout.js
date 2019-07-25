import Link from "next/link";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import MobileNav from "./mobileNav";
import logo from "../static/assets/img/favicon.svg";
import { useEffect } from "react";

export default ({ children, title = "Antitesis" }) => {
  var hideForLanding = false;
  useEffect(() => {
    if (window.document.title === "Antítesis | Próximamente") {
      hideForLanding = true;
      console.log(hideForLanding);
    } else {
      console.log(hideForLanding);
    }
  }, []);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Styles />
      <Header hidden={hideForLanding} />
      <MobileNav />

      {children}
      <Logo hidden={hideForLanding} />

      <Footer hidden={hideForLanding}>
        <Social>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.facebook.com/somos.antitesis"
          >
            fb
          </a>
          —
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/somos.antitesis/"
          >
            ig
          </a>
        </Social>
        <Date>© MMXIX</Date>
      </Footer>
    </>
  );
};

const Logo = styled(logo)`
  display: flex;
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  width: 20%;
  height: auto;
  padding-right: 4%;
  max-width: 175px;
`;

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 4% 2% 4%;
  width: 100%;
  justify-content: space-between;
`;

const Social = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.5em;
  min-width: 85px;
  a {
    color: black;
    text-decoration: none;
  }
`;

const Date = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  font-size: 1.5em;
  min-width: 100px;
`;

const Styles = createGlobalStyle`
    @font-face {
        font-family: "DrunkWide";
        src: url("../static/assets/font/DrukWide.woff2") format("woff2"),
          url("../static/assets/font/DrukWide.woff") format("woff");
      }

      html {
        font-size: 100%;
        height: 100vh;
        box-sizing: border-box;
      }
      *,
        *:before,
        *:after {
            box-sizing: inherit;
        }

      body {
        margin: 0;
        padding: 0;
        font-family: "DrunkWide", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: white;
        color: black;
        height: 100vh;
        width: 100%;
        box-sizing: border-box;
      }

      #__next {
        height: 100%;
        width: 100%;
        padding: 2% 4% 0 4%;
        flex-direction: column;
        display:flex;
        justify-content: center;
      }
      main{
        z-index:0;
      }
      h1{
        margin:0;
      }
      h2{
        margin:0;
        overflow:hidden;
      }
      h3{
        font-family: 'Courier New', Courier, monospace;
        font-weight: 100;
        font-size: 2.8rem;
        margin-top: 20px;
        overflow:hidden;
      }
      h4{
        font-size: 1.5rem;
        overflow:hidden;
      }

  /* normalize */
  a{background-color:transparent}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}  
`;
