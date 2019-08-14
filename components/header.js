import Link from "next/link";
import styled from "styled-components";
import { useEffect } from "react";
import Logo from "../static/assets/img/layout/logo.svg";
import Hamburger from "../static/assets/img/layout/hamburger.svg";

export default function Header(props) {
  return (
    <TopHeader>
      <Link href="/">
        <Logotype>
          <Logo />
        </Logotype>
      </Link>
      <NavList>
        <Link href="/work" prefetch={true}>
          <a>work</a>
        </Link>
        <Link href="/about" prefetch={true}>
          <a>about</a>
        </Link>
        <Link href="/manifesto" prefetch={true}>
          <a>manifesto</a>
        </Link>
        <Link href="/contact" prefetch={true}>
          <a>manifesto</a>
        </Link>
      </NavList>
      <NavTrigger onClick={() => props.toggleNav()} open={props.isOpen}>
        <Hamburger />
      </NavTrigger>
    </TopHeader>
  );
}

const NavTrigger = styled.div`
  width: 40px;
  position: relative;
  justify-self: flex-end;
  svg {
    width: 100%;
    height: auto;
    path {
      stroke-width: 2px;
      stroke-linejoin: round;
      stroke: ${props => props.theme.colors.foreground};
    }
  }
`;

const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 50px 70px 0 70px;
  z-index: 12;
  margin: 0px auto;
  max-width: 1500px;
`;

const Logotype = styled.a`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  svg {
    path {
      fill: ${props => props.theme.colors.foreground};
    }
  }
`;

const Desc = styled.span`
  display: flex;
  grid-column: 4 / span 4;
  margin: 0;
  max-width: 380px;
  @media (max-width: 900px) {
    grid-column: 3 / span 3;
  }
`;

const NavList = styled.nav`
  display: none;
  justify-content: space-between;
  grid-column: 8 / span 5;
  a {
    margin: 0;
    color: ${props => props.theme.colors.foreground};
    text-decoration: none;
    text-transform: uppercase;
    padding-right: 2%;
    &:nth-last-of-type(1) {
      padding-right: 0;
    }
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;
