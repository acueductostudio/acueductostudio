import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import ArrowSvg from "public/assets/img/layout/arrow.svg";

const Arrow = ({ reverse }) => (
  <ArrowContainer reverse={reverse}>
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
  cursor: pointer;
  svg {
    width: 100%;
    height: auto;
    fill: none;
    stroke: ${(props) => props.theme.colors.foreground};
    stroke-width: ${(props) => props.theme.stroke};
    transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    * {
      transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    ${(p) =>
      p.reverse &&
      `transform: rotate(180deg);
     `}
  }
  @media (max-width: 600px) {
    height: 45px;
  }
`;
