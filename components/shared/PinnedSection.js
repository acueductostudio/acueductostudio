import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import BorderLink from "components/shared/BorderedLink";

const PinnedSection = ({ title, children, className, borderTop }) => (
  <Pinned className={className} borderTop={borderTop}>
    <Fade triggerOnce>
      <H1>{title}</H1>
    </Fade>
    <ScrollDown>
      <Fade triggerOnce>{children}</Fade>
    </ScrollDown>
  </Pinned>
);
export default React.memo(PinnedSection);

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
  p {
    max-width: 445px;
    color: ${(props) => props.theme.colors.foreground_low};
    margin-bottom: 5%;
    margin-top: 0;
    &:first-of-type {
      margin-top: 10px;
    }
    b {
      font-weight: 200;
      color: ${(props) => props.theme.colors.foreground};
    }
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
    a {
      background-position: 0 2rem;
      padding-bottom: 3px;
    }
  }
  a {
    color: ${(props) => props.theme.colors.foreground};
    background-position: 0 2.3rem;
    background-position: 0 90%;
    ${BorderLink({ showLink: true })}
  }
`;
