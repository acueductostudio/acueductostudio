import styled from "styled-components";
import ArrowSvg from "../static/assets/img/layout/arrow.svg";

const Arrow = () => (
  <ArrowContainer>
    <ArrowSvg />
  </ArrowContainer>
);

export default Arrow;

const ArrowContainer = styled.span`
  svg {
    align-self: flex-end;
    width: 50px;
    height: 32px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
    transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    /* * {
      transition: stroke 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    } */
  }
`;
