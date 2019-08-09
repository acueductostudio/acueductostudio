import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import logo from "../static/assets/img/favicon.svg";

export default function MobileNav(props) {
  //   const [isOpen, setOpen] = useState(false);

  //   const toggleNav = () => {
  //     setOpen(!isOpen);
  //   };

  //   const closeNav = () => {
  //     setOpen(false);
  //   };
  return (
    <>
      <NavTrigger onClick={props.toggleNav} open={props.isOpen} />
      <NavWrapper open={props.isOpen}>
        <MobileNavList onClick={props.closeNav}>
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
  width: 15%;
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
  color: ${props => props.theme.colors.background};
  font-size: 1rem;
`;

const Social = styled.div`
  align-self: flex-end;
  justify-self: flex-start;
  font-size: 1.5em;
  min-width: 85px;
  color: inherit;
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

const MobileNavList = styled.nav`
  grid-column: 4 / span 4;
  flex-direction: column;
  display: flex;
  text-transform: uppercase;
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
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
  cursor:pointer;
  &:before, &:after {
    content: " ";
    height: 100%;
    width: 4px;
    background-color: ${props => (props.open ? props.theme.colors.background : props.theme.colors.foreground)};
    position: absolute; 
    left: 0;
    top: 0;
    transform-origin: bottom center;
    transition: transform .3s ease;
  }
  &:after {
    left: 20px;
  }
  ${props =>
    props.open &&
    css`
      &:before{
        transform: rotate(45deg) translate3d(-20px,5px,0px);
      }
      &:after{
        transform:rotate(-45deg) translate3d(20px,5px,0px);
      }
    `}
  @media (max-width: 1100px) {
    display: none;
  }
`;

const NavWrapper = styled.div`
  opacity: 0;
  padding: 2% 4% 0 4%;
  z-index: 9;
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  color: white;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
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
