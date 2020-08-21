import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import head from "./head";
import P5Wrapper from "utils/P5Wrapper";

export default function HeadSketch(props) {
  return (
    <Fade>
      <SketchContainer>
        <P5Wrapper
          sketch={head}
          second={props.second}
          rotationStart={props.rotationStart}
          invertRotation={props.invertRotation}
        />
      </SketchContainer>
    </Fade>
  );
}

const SketchContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-bottom: 10%;
  position: relative;
  left: -10%;
  z-index: -1;
  @media (max-width: 1250px) {
    margin-bottom: 8%;
  }
  @media (max-width: 1000px) {
    margin-bottom: 7%;
  }
  @media (max-width: 600px) {
    left: -30px;
  }
  div div div {
    width: 100%;
    height: 100%;
    padding-left: 10%;
    color: ${(props) => props.theme.colors.foreground_lowest};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 3.5px;
  }
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
  }
`;
