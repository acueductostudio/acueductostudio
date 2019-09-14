import styled from "styled-components";
import ArrowSvg from "../static/assets/img/layout/arrow.svg";

const Arrow = props => (
  <ArrowContainer props={props}>
    <ArrowSvg />
  </ArrowContainer>
);

export default Arrow

const ArrowContainer = styled.span`
  svg {
    align-self: flex-end;
    width: 50px;
    height: 32px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
    path{
      transition: all 0.3s ease;
    }
  }
`;