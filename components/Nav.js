import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import logo from "../static/assets/img/favicon.svg";

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
  opacity: ${props => props.open ? "1" : "0"};
  grid-column: 4 / span 4;
  flex-direction: column;
  display: flex;
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
`;

const NavWrapper = styled.div`
  opacity: 1;
  border: 2px solid ${props => props.theme.colors.foreground};
  pointer-events: ${props => props.open ? "auto" : "none"};
  background-color: ${props => props.open ? props.theme.colors.background : "transparent"};
  z-index: 9;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: fixed;
  left: 20px;
  top: 20px;
  right: 10px;
  bottom: 10px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  pointer-events: none;
  transition: opacity 0.3s ease-in;
  @media (max-width: 900px) {
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 900px) {
    a {
      padding-bottom: 5%;
    }
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      transition: opacity 0.2s ease-in;
      pointer-events: auto;
    `}
`;
