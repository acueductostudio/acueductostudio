import styled from "styled-components";

export const Container = styled.div`
  grid-column: 7 / span 5;
  max-width: 455px;
  @media (max-width: 1100px) {
    grid-column: 5 / span 6;
  }
  @media (max-width: 800px) {
    grid-column: 3 / span 7;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;

const TitleSectionGrid = styled.div<{ borderTop?: boolean }>`
  width: 100%;
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  padding: 10% 4%;
  background-color: ${(props) => props.theme.colors.background};
  border-top: ${(props) =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  .h1 {
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
    font-weight: 400;
    max-width: 810px;
    color: ${(props) => props.theme.colors.accent};
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
    b {
      color: ${(props) => props.theme.colors.foreground};
      font-weight: 200;
    }
    cite {
      color: ${(props) => props.theme.colors.foreground_lower};
      text-transform:uppercase;
      font-weight:300;
      letter-spacing:1px;
      font-size:.8em;
      font-style: normal;
    }
  }
  ul {
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
    li {
      list-style: none;
        &:before {
        content: "– ";
        font-weight: 300;
        color: ${(props) => props.theme.colors.accent};
      }
    }
  }
  a {
    max-width: 445px;
  }
  & > div {
    &:nth-of-type(1) {
      grid-column: 2 / span 10;
    }
    &:not(:nth-of-type(1)) {
      grid-column: 7 / span 5;
    }
  }
  @media (max-width: 1250px) {
    .h1 {
      font-size: 6rem;
      line-height: 110%;
    }
  }
  @media (max-width: 1100px) {
    & > div:not(:nth-of-type(1)) {
      grid-column: 5 / span 6;
    }
  }
  @media (max-width: 950px) {
    .h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    .h1 {
      font-size: 4rem;
    }
    & > div {
      &:nth-of-type(1) {
        grid-column: 3 / span 8;
      }
      &:not(:nth-of-type(1)) {
        grid-column: 3 / span 8;
      }
    }
  }
  @media (max-width: 600px) {
    grid-column-gap: 0rem;
    .h1 {
      margin-bottom: 0;
      font-size: 3.4rem;
    }
    & > div {
      &:nth-of-type(1) {
        grid-column: 1 / span 12;
      }
      &:not(:nth-of-type(1)) {
        grid-column: 1 / span 12;
      }
    }
    p:nth-child(3):hover svg * {
      stroke: ${(props) => props.theme.colors.foreground};
    }
  }
`;

export default TitleSectionGrid;
