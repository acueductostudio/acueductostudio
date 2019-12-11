import styled from "styled-components";
import Fade from "react-reveal/Fade";
import shade from "./shade";
import shademobile from "./shademobile";
import P5Wrapper from "utils/P5Wrapper";

const HomeSketch = ({ hide }) => {
  return (
    <SketchContainer>
      {hide ? (
        <Fade>
          <Background />
        </Fade>
      ) : (
        <Fade>
          <P5Wrapper
            sketch={window.innerWidth < 600 ? shademobile : shade}
            id="Frame"
          />
        </Fade>
      )}
    </SketchContainer>
  );
};

export default React.memo(HomeSketch);

const SketchContainer = styled.div`
  width: 100%;
  height: 120vh;
  position: fixed;
  z-index: 0;
  pointer-events: none;
  &:before {
    content: " ";
    height: 100vh;
    width: 18px;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  &:after {
    content: " ";
    height: 100vh;
    width: 18px;
    left: 0;
    top: 0;
    bottom: 0;
    background-color: ${props => props.theme.colors.background};
    position: fixed;
    z-index: 100;
    opacity: 0;
  }
  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -20px;
    bottom: -30px;
    pointer-events: none;
    overflow: hidden;
  }
  @media (max-width: 600px) {
    overflow: hidden;
    &:before,
    &:after {
      opacity: 1;
    }
  }
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  background-image: url("/static/assets/img/layout/fond.jpg");
  background-size: cover;
`;
