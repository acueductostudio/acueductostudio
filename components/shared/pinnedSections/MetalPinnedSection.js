import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";

const MetalPinnedSection = ({ title, children, className, borderTop, id }) => (
  <Pinned className={className} borderTop={borderTop} id={id}>
    <Fade triggerOnce>
      <H1>{title}</H1>
    </Fade>
    <ScrollDown>
      <Fade triggerOnce>{children}</Fade>
    </ScrollDown>
  </Pinned>
);
export default React.memo(MetalPinnedSection);

const ScrollDown = styled.div`
  grid-column: 7 / span 5;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Pinned = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: calc(70px + 5%) 4%;
  border-top: ${(props) =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};

  div:first-of-type {
    grid-column: 2 / span 5;
    z-index: 1;
  }
  h1 {
    position: sticky;
    max-height: 300px;
    top: 17%;
    letter-spacing: 0px;
    line-height: 100%;
    font-size: 7rem;
    color: ${(props) => props.theme.colors.accent};
  }
  a {
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    ${ScrollDown} {
      grid-column: 7 / span 5;
    }
  }
  @media (max-width: 1250px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1100px) {
    h1 {
      position: relative;
      top: 0;
      margin-bottom: 5%;
      max-width: 670px;
    }
    div:first-of-type {
      grid-column: 2 / span 10;
    }
    ${ScrollDown} {
      grid-column: 5 / span 7;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    div:first-of-type,
    ${ScrollDown} {
      grid-column: 3 / span 8;
    }
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 5%;
    div:first-of-type,
    ${ScrollDown} {
      grid-column: 1 / span 12;
    }
    h1 {
      margin-bottom: 0;
    }
  }
`;
