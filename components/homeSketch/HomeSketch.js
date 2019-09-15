import styled from "styled-components";
import Fade from "react-reveal";
import shade from "./shade";
import P5Wrapper from "react-p5-wrapper";

export default function HomeSketch() {
  return (
    <SketchContainer>
      <Fade>
      <P5Wrapper sketch={shade} id="Frame"/>
      </Fade>
    </SketchContainer>
  );
}

const SketchContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  z-index: 10;
  z-index: 0;
  pointer-events: none;
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    pointer-events: none;
    overflow: hidden;
  }
`;