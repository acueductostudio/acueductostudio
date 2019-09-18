import styled from "styled-components";

const TitleSectionGrid = styled.div`
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  h1 {
    grid-column: 2 / span 10;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
    max-width: 800px;
  }
  p {
    grid-column: 7 / span 4;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
  }
  @media (max-width: 1400px) {
    p {
      grid-column: 7 span 5;
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
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    p,
    h1 {
      grid-column: 1 / span 12;
    }
  }
`;

export default TitleSectionGrid;
