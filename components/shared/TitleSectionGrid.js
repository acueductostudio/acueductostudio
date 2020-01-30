import styled from "styled-components";

const TitleSectionGrid = styled.div`
  background-color: ${props => props.theme.colors.background};
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  h1 {
    grid-column: 2 / span 10;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
    max-width: 810px;
    color: ${props => props.theme.colors.accent};
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
    b {
      color: ${props => props.theme.colors.foreground};
      font-weight: 200;
    }
  }
  a {
    max-width: 445px;
    grid-column: 7 / span 5;
  }
  @media (max-width: 1100px) {
    p,
    a {
      grid-column: 5 / span 6;
    }
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    p,
    a,
    h1 {
      grid-column: 3 / span 8;
    }
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    grid-column-gap: 0rem;
    p,
    a,
    h1 {
      grid-column: 1 / span 12;
    }
    h1 {
      margin-bottom: 0;
      font-size: 3.4rem;
    }
    p:nth-child(3):hover svg * {
      stroke: ${props => props.theme.colors.foreground};
    }
  }
`;

export default TitleSectionGrid;
