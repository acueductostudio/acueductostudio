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
    max-width: 800px;
    color: ${props => props.theme.colors.accent};
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
    &:nth-child(3) {
      &:hover {
        svg * {
          stroke: ${props => props.theme.colors.accent};
        }
      }
    }
  }
  @media (max-width: 1100px) {
    p {
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
    h1 {
      grid-column: 1 / span 12;
    }
    h1 {
      margin-bottom: 0;
    }
    p:nth-child(3):hover svg * {
      stroke: ${props => props.theme.colors.foreground};
    }
  }
`;

export default TitleSectionGrid;
