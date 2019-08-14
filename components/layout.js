import Link from "next/link";
import Head from "next/head";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./header";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Clipper from "./Clipper";

export default ({ children, title = "Antitesis", changeTheme, locale }) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    document.getElementById("PageWrapper").scrollTop = 0;
  });

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
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
      <PageWrapper
        id="PageWrapper"
        // render={isOpen => (children)}
      >
        <Header toggleNav={toggleNav} closeNav={closeNav} isOpen={isOpen} />
        <Nav
          locale={locale}
          toggleNav={toggleNav}
          closeNav={closeNav}
          isOpen={isOpen}
        />
        {children}
        <ModeToggler isOpen={isOpen} onClick={() => doChangeTheme()}>
          {/* <Clipper open={isOpen} /> */}
          lights out
        </ModeToggler>
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

const ModeToggler = styled.div`
  cursor: pointer;
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

const Styles = createGlobalStyle`
      body {
        color: ${props => props.theme.colors.foreground};
      }
`;
