import styled from "styled-components"
import { useSpring, animated } from "react-spring";

const Clip = props => {
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
  var whichRender = is_safari() ? pre : pre2; //check if safari to render  interpolation or fixed values
  var style = is_safari() ? ".3s ease all" : ""; //transition in clip fail

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
export default Clip;