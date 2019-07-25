import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import logo from "../static/assets/img/favicon.svg";

export default function MobileNav(props) {
  const [isOpen, setOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const closeNav = () => {
    setOpen(false);
  };
  return (
    <>
      <NavTrigger onClick={toggleNav} open={isOpen} />
      <NavWrapper open={isOpen}>
        <MobileNavList onClick={closeNav}>
          <Link href="/home">
            <a>Home</a>
          </Link>
          <Link href="/nosotros">
            <a>Nosotros</a>
          </Link>
          <Link href="/renta">
            <a>Renta</a>
          </Link>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
        </MobileNavList>
        <Logo />
        <Footer>
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
      </NavWrapper>
    </>
  );
}

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
  path {
    fill: white;
  }
`;

const Footer = styled.footer`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  padding: 0 4% 2% 4%;
  width: 100%;
  justify-content: space-between;
  color: white;
  font-size: 1rem;
`;

const Social = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.5em;
  min-width: 85px;
  a {
    color: white;
    text-decoration: none;
  }
`;
const Date = styled.div`
  align-self: flex-end;
  justify-self: flex-end;
  font-size: 1.5em;
  min-width: 100px;
`;

const MobileNavList = styled.nav`
  grid-column: 4 / span 4;
  flex-direction: column;
  display: flex;
  text-transform: uppercase;
`;

const NavTrigger = styled.div`
  width: 60px;
  height: 79px;
  position: fixed;
  z-index: 10;
  left: 0px;
  bottom: 50%;
  transform: translateY(50%);
  margin-left: 4%;
  &:before {
    content: " ";
    height: 80px;
    width: 4px;
    background-color: ${props => (props.open ? "white" : "black")};
    position: absolute;
    left: 0;
    top: 0;
  }
  &:after {
    content: " ";
    height: 80px;
    width: 4px;
    background-color: ${props => (props.open ? "white" : "black")};
    position: absolute;
    left: 20px;
    top: 0;
  }
`;

const NavWrapper = styled.div`
  padding: 2% 4% 0 4%;
  z-index: 9;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: black;
  opacity: 0;
  pointer-events: none;
  transition: opacity .3s ease-in;
  a {
    text-decoration: none;
    color: white;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      transition: opacity .2s ease-in;
      pointer-events: auto;
    `}
`;
