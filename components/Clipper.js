import react from "react"
import styled from "styled-components"

const Clip = props => (
  <SVG viewBox={"0 0 1402 862"} preserveAspectRatio="none" {...props}>
    <defs>
      <clipPath
        id="myClip"
         preserveAspectRatio="none"
        clipPathUnits="objectBoundingBox"
         transform="scale(0.00071326676 0.0011600928)"
      >
        <path
          d={
            props.open
              ? "M2,1 H970 L1400 151 V860 H2 z"
              : "M2,1 H970 L1400 1 V860 H2 z"
          }
        />
      </clipPath>
    </defs>
  </SVG>
);

const SVG = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 300ms ease 0s;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  path {
    transition: d 0.3s ease, fill 0.3s ease 0.2s;
  }
`;

export default Clip;