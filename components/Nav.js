import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import { useSpring, animated } from "react-spring";
import Fade from "react-reveal/Fade";
import { useRouter } from "next/router";

const NavLink = styled.a`
  color: ${({ active }) => active ? 'red' : 'black'}; 
`

export default function Nav(props) {
  let t = props.locale.nav; 
  const router = useRouter();

  const NavLink = ({ href, name }) => {
    return (
      <Link href={href} passHref>
        {/* <a selected={router.pathname === href ? true : false}>{name}</a> */}
        <a selected>{name}</a>
      </Link>
    );
  };
  
  const ActiveLink = ({ children, ...props }) => {
    const router = useRouter()
    const child = React.Children.only(children)
    return (
      <Link {...props}>
        {React.cloneElement(child, { active: router.pathname === props.href })}
      </Link>
    )
  }

  let navItems = t.map(function(item, index) {
    return (
      <Fade delay={200 + index * 50} key={"item" + index}>
        <li>
          <span>0{index + 1}</span>
          <NavLink href={item.link} name={item.title} />
        </li>
      </Fade>
    );
  });
  return (
    <NavWrapper open={props.isOpen}>
      {props.isOpen ? (
        <>
          <NavList onClick={props.closeNav} open={props.isOpen}>
            <ul>{navItems}</ul>
          </NavList>
          <BottomNav>
            <a className="contact" href="mailto:hola@acueducto.studio">
              hola@acueducto.studio
            </a>
            <Social>
              <a href="faceebook">facebook</a>
              <a href="instagram">instagram</a>
              <a href="linkedin">linkedin</a>
            </Social>
            <div className="language">
              <span>english</span> | <span>español</span>
            </div>
          </BottomNav>
        </>
      ) : (
        ""
      )}
    </NavWrapper>
  );
}

const Social = styled.div`
  grid-column: 5 / span 5;
  a {
    margin-right: 10%;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const BottomNav = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2.2rem;
  display:grid;
  border-top: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  position: absolute;
  bottom: 0;
  padding: 2.5% 4%;
  width: 100%;
  .contact {
    grid-column: 1 / span 2;
  }
  .language {
    grid-column: 11 / span 2;
    text-align: right;
  }
`;

const NavList = styled.nav`
  grid-column: 5 / span 5;
  flex-direction: column;
  display: flex;
  ul {
    list-style: none;
    li {
      font-size: 6rem;
      line-height: 160%;
      position: relative;
      a{
        font-weight: 200;
        border-bottom: ${props => props.selected ? "2px solid blue" : "none"};
      }
      span {
        color: ${props => props.theme.colors.accent};
        font-size: 1.5rem;
        position: absolute;
        left: -55px;
        bottom: -10px;
      }
    }
  }
`;

const NavWrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  background-color: ${props => props.theme.colors.background};
  position: fixed;
  left: 20px;
  top: 20px;
  right: 20px;
  bottom: 20px;
  display: grid;
  margin: 0 auto;
  max-width: 1500px;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  padding: 0 4% 6% 4%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: opacity 0.3s ease 150ms;
  a {
    text-decoration: none;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s ease;
    `}
`;
