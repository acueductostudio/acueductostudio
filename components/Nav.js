import Link from "next/link";
import styled, { css } from "styled-components";
import { useState } from "react";
import logo from "../static/assets/img/favicon.svg";
import { useEffect } from "react";
import { useSpring, animated, interpolate } from "react-spring";

const Background = props => {
  const [key, setKey] = useState(1);
  const spring = useSpring({ o: props.open ? 151 : 1 });

  function is_safari() {
    if (typeof window !== "undefined") {
      const isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));
     return isSafari;
    } else {
      return false;
    }
  }

  var pre = props.open
    ? "M2,1 H970 L1400 151 V860 H2 z"
    : "M2,1 H970 L1400 1 V860 H2 z";
  var pre2 = spring.o.interpolate(
    o => `M2,1 H970 L1400 ${Math.round(o)} V860 H2 z`
  );
  var whichRender = is_safari() ? pre : pre2;
  var style = is_safari() ? ".3s ease all" : "";

  return (
    <SVG viewBox={"0 0 1402 862"} preserveAspectRatio="none" {...props}>
      <defs>
        <clipPath
          id="myClip"
          preserveAspectRatio="none"
          clipPathUnits="objectBoundingBox"
          transform="scale(0.00071326676 0.0011600928)"
        >
          <animated.path
          d = {whichRender}
          style={{transition: style}}
            // d={
            //   props.open
            //     ? "M2,1 H970 L1400 151 V860 H2 z"
            //     : "M2,1 H970 L1400 1 V860 H2 z"
            // }
            //d={prup.o.interpolate(o => `M2,1 H970 L1400 ${Math.round(o)} V860 H2 z`)}
          />
        </clipPath>
      </defs>
      <animated.path
        d={spring.o.interpolate(
          o => `M2,1 H970 L1400 ${Math.round(o)} V860 H2 z`
        )}
        fill={props.open ? "#080B0C" : "transparent"}
        stroke="#fff"
        vectorEffect="non-scaling-stroke"
        strokeWidth={2}
      />
    </SVG>
  );
};

export default function Nav(props) {
  let t = props.locale.nav;

  return (
    <>
      <NavWrapper open={props.isOpen}>
        <Background open={props.isOpen} />
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

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  pointer-events: none;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  path {
    transition: fill 0.3s ease 0.2s;
  }
`;

const NavList = styled.nav`
  opacity: ${props => (props.open ? "1" : "0")};
  grid-column: 4 / span 4;
  flex-direction: column;
  display: flex;
  @media (max-width: 900px) {
    grid-column: 2 / span 4;
  }
`;

const NavWrapper = styled.div`
  opacity: 1;
  pointer-events: ${props => (props.open ? "auto" : "none")};
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  position: fixed;
  left: 20px;
  top: 20px;
  right: 20px;
  display: grid;
  margin: 0 auto;
  max-width: 1500px;
  /* mix-blend-mode: exclusion; */
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
