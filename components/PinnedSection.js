import styled from "styled-components";
import { H1, P } from "components/shared/Dangerously";
import BorderLink from "components/shared/BorderedLink";

const PinnedSection = ({ t, children, className }) => (
  <Pinned className={className}>
    <H1>{t.intro.title}</H1>
    <P>{t.intro.p}</P>
    <ScrollDown>{children}</ScrollDown>
  </Pinned>
);
export default PinnedSection;

const ScrollDown = styled.div`
  grid-column: 7 / span 5;
  display: flex;
  flex-direction: column;
  p {
    margin-top: 0;
    &:first-of-type {
      margin-top: 0;
    }
  }
`;

const Pinned = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: calc(70px + 5%) 4%;
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  h1 {
    grid-column: 2 / span 5;
    position: sticky;
    top: 17%;
    letter-spacing: 0px;
    line-height: 100%;
    font-size: 7rem;
    color: ${props => props.theme.colors.accent};
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
    margin-bottom: 5%;
    max-width: 445px;
    &:first-of-type {
      margin-top: 10px;
    }
  }
  @media (max-width: 1300px) {
    ${ScrollDown}, p {
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
      grid-column: 2 / span 10;
      position: relative;
      top: 0;
      margin-bottom: 5%;
      max-width: 670px;
    }
    ${ScrollDown}, p {
      grid-column: 5 / span 6;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    h1 {
      font-size: 4rem;
    }
    h1,
    p,
    ${ScrollDown} {
      grid-column: 3 / span 8;
    }
  }
  @media (max-width: 600px) {
    padding-bottom: 5%;
    p,
    h1,
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
    color: ${props => props.theme.colors.foreground};
    background-position: 0 2.3rem;
    background-position: 0 90%;
    ${BorderLink({ showLink: true })}
  }
`;
