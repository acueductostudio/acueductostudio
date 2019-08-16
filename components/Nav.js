import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";

export default function Nav(props) {
  let t = props.locale.nav;
  return (
    <>
      <NavWrapper open={props.isOpen}>
        <NavList onClick={props.closeNav} open={props.isOpen}>
          <Link href="/">
            <a>{t.home}</a>
          </Link>
          <Link href="/about">
            <a>{t.about}</a>
          </Link>
          <Link href="/work">
            <a>{t.work}</a>
          </Link>
          <Link href="/manifesto">
            <a>{t.manifesto}</a>
          </Link>
          <Link href="/contact">
            <a>{t.contact}</a>
          </Link>
        </NavList>
      </NavWrapper>
    </>
  );
}

const NavList = styled.nav`
  grid-column: 4 / span 4;
  flex-direction: column;
  display: flex;
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
`;

const NavWrapper = styled.div`
  opacity: ${props => (props.open ? 1 : 0)};
  pointer-events: ${props => (props.open ? "auto" : "none")};
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  background-color: ${props =>
    props.open ? props.theme.colors.background : "none"};
  position: fixed;
  left: 20px;
  top: 20px;
  right: 20px;
  bottom: 20px;
  display: grid;
  margin: 0 auto;
  max-width: 1500px;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 6rem;
  pointer-events: none;
  transition: all 0.3s ease;
  a {
    text-decoration: none;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      pointer-events: auto;
    `}
`;
