import Link from "next/link";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import MobileNav from "./mobileNav";
import Logo from "../static/assets/img/favicon.svg";
import { useEffect, useState } from "react";

export default ({ children, title = "Antitesis", changeTheme }) => {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  var hideForLanding = false;

  useEffect(() => {
    if (window.document.title === "Antítesis | Próximamente") {
      hideForLanding = true;
      console.log("Is hidden for landing page? " + hideForLanding);
    } else {
      console.log("Is hidden for landing page? " + hideForLanding);
    }
  }, []);

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
      <PageWrapper>
        <Header
          hidden={hideForLanding}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        <MobileNav toggleNav={toggleNav} closeNav={closeNav} isOpen={isOpen} />

        {children}
        <ModeToggler
          isOpen={isOpen}
          hidden={hideForLanding}
          onClick={() => doChangeTheme()}
        >
          <Logo />
        </ModeToggler>

        <Footer hidden={hideForLanding} isOpen={isOpen}>
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
      </PageWrapper>
    </>
  );
};

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 2% 4% 0 4%;
  flex-direction: column;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;

const ModeToggler = styled.div`
  cursor: pointer;
  display: ${props => (props.hidden ? "none" : "flex")};
  position: fixed;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);
  width: 15%;
  height: auto;
  padding-right: 4%;
  max-width: 175px;
  z-index: 10;
  svg {
    width: 100%;
    path {
      fill: ${props =>
        props.isOpen
          ? props.theme.colors.background
          : props.theme.colors.foreground};
    }
  }
`;

// const Logo = styled(logo)`
//   cursor: pointer;
//   display: flex;
//   position: fixed;
//   right: 0;
//   bottom: 50%;
//   transform: translateY(50%);
//   width: 15%;
//   height: auto;
//   padding-right: 4%;
//   max-width: 175px;
//   z-index: 10;
//   path {
//     background-color: ${props =>
//       props.open
//         ? props.theme.colors.background
//         : props.theme.colors.foreground};
//   }
// `;

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 4% 2% 4%;
  width: 100%;
  color: ${props =>
    props.isOpen
      ? props.theme.colors.background
      : props.theme.colors.foreground};
  justify-content: space-between;
  z-index: 10;
`;

const Social = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.5em;
  min-width: 85px;
  a {
    color: inherit;
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
      body {
        color: ${props => props.theme.colors.foreground};
      }
`;
