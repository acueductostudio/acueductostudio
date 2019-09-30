import styled from "styled-components";
import PinnedSection from "./PinnedSection";

const SimplePinnedSection = styled(PinnedSection)`
  @media (max-width: 600px) {
    padding-bottom: 20%;
  }
  p {
    grid-column-end: span 5;
    margin-bottom: 0;
    max-width: unset;
    @media (max-width: 1100px) {
      grid-column-end: span 6;
    }
    @media (max-width: 800px) {
      grid-column-end: span 8;
    }
    @media (max-width: 600px) {
      grid-column-end: span 12;
    }
  }
  div {
    color: ${props => props.theme.colors.foreground_low};
    grid-column-end: span 5;
    h2 {
      font-size: 3rem;
      margin-top: 10%;
      color: ${props => props.theme.colors.foreground};
      margin-bottom: 2%;
      line-height: 120%;
    }
    h3 {
      font-size: 2.5rem;
      margin-top: 7%;
      margin-bottom: 2%;
      color: ${props => props.theme.colors.foreground};
      &:before {
        content: "– ";
      }
    }
    h4 {
      text-transform: uppercase;
      font-weight: 200;
      margin-top: 5%;
      margin-bottom: 2%;
      color: ${props => props.theme.colors.accent};
    }
    ul {
      list-style: none;
      color: inherit;
      margin-top: 2%;
      li {
        &:before {
          content: "– ";
          color: ${props => props.theme.colors.accent};
        }
      }
    }
    p {
      margin-bottom: 0;
    }
  }
`;

export default SimplePinnedSection;
