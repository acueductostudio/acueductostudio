import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import ArrowSvg from "public/assets/img/layout/arrow.svg";

const Arrow = ({ reverse }: { reverse?: boolean }) => (
  <ArrowContainer reverse={reverse}>
    <Fade triggerOnce>
      <ArrowSvg />
    </Fade>
  </ArrowContainer>
);

export default React.memo(Arrow);

const ArrowContainer = styled.span<{ reverse: boolean }>`
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
    transition: stroke 0.2s ease-out;
    * {
      transition: stroke 0.2s ease-out;
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
