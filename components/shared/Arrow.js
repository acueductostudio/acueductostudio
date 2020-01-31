import styled from "styled-components";
import Fade from "react-reveal/Fade";
import ArrowSvg from "public/assets/img/layout/arrow.svg";

const Arrow = () => (
  <ArrowContainer>
    <Fade>
      <ArrowSvg />
    </Fade>
  </ArrowContainer>
);

export default React.memo(Arrow);

const ArrowContainer = styled.span`
  width: 50px;
  height: 34px;
  position: relative;
  display: flex;
  svg {
    width: 100%;
    height: auto;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
    transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    * {
      transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  @media (max-width: 600px) {
    height: 45px;
  }
`;
