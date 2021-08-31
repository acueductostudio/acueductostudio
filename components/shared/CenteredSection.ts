import styled from "styled-components";
import { Div } from "components/shared/Dangerously";

export const Content = styled.div``;

export const Transcript = styled(Div)``;

const CenteredSection = styled.div<{ customBackground?: string }>`
  background-color: ${(p) => p.theme.colors.background};
  background-image: ${(p) =>
    p.customBackground ? `url(${p.customBackground})` : "none"};
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top right;
  padding: 30px 4% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    color: ${(p) => p.theme.colors.foreground};
    font-weight: 200;
    margin-bottom: 0;
    max-width: 900px;
    text-align: center;
    font-size: 7rem;
    letter-spacing: 0;
    line-height: 100%;
    margin-top: 20px;
  }
  h2 {
    font-size: 2.5rem;
    grid-column: 1 / span 5;
    text-align: center;
    font-weight: 200;
    max-width: 690px;
    color: ${(p) => p.theme.colors.accent};
    line-height: 130%;
  }
  ${Content} {
    background-color: ${(props) => props.theme.colors.foreground};
    padding: 10%;
    border-radius: 70px;
    margin-top: 8%;
    max-width: 900px;
    a {
      color: ${(props) => props.theme.colors.accent};
      text-decoration-thickness: 2px;
      text-underline-offset: 0.25rem;
      text-decoration-color: ${(props) => props.theme.colors.accent};
      transition: 0.3s ease all;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: ${(props) => props.theme.colors.background};
          text-decoration-color: ${(props) => props.theme.colors.accent};
        }
      }
      &:focus,
      &:active {
        color: ${(props) => props.theme.colors.background};
        text-decoration-color: ${(props) => props.theme.colors.accent};
      }
    }
    ul,
    ol {
      margin-left: 25px;
    }
    img {
      max-width: 100%;
      height: auto;
      margin: 2rem 0;
    }
    h2 {
      &:first-of-type{
        margin-top:2rem;
      }
      font-size: 3rem;
      margin-bottom: 1.3rem;
      margin-top: 4rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
      line-height: 120%;
      text-align: left;
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      margin-top: 3rem;
      line-height: 120%;
      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
    }
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;
      line-height: 120%;
      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
    }
    p,
    ol li,
    ul li {
      color: ${(p) => p.theme.colors.foreground_lowest};
      max-width: calc(680px + 10%);
      letter-spacing: -0.003em;
      line-height: 29px;
      font-size: 1.85rem;
      margin-bottom: 2rem;
      word-break: break-word;
      overflow-wrap: break-word;
      strong,
      b {
        font-weight: 200;
        color: ${(p) => p.theme.colors.background};
      }
    }
    ul {
      color: ${(p) => p.theme.colors.foreground_lowest};
      margin-bottom: 2rem;
      max-width: 680px;
      letter-spacing: -0.003em;
      line-height: 29px;
      font-size: 1.85rem;
      list-style: none;
      li {
        &:before {
          content: "– ";
          font-weight: 300;
          font-size: 2rem;
        }
      }
    }
  }
  @media (max-width: 1250px) {
    h1 {
      font-size: 6rem;
      line-height: 110%;
    }
    h2 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
    ${Content} {
      border-radius: 40px;
      p,
      ul,
      ol {
        font-size: 1.7rem;
        line-height: 25px;
      }
      h2 {
        font-size: 2.6rem;
        font-weight: 300;
      }
      h3 {
        font-size: 2.1rem;
        font-weight: 300;
      }
      h4 {
        font-size: 1.7rem;
        font-weight: 300;
      }
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 8%;
    h1 {
      font-size: 4rem;
      margin-top: 10px;
    }
  }
  @media (max-width: 650px) {
    padding-top: 30px;
    h1 {
      font-size: 3.4rem;
      margin-top: 0px;
    }
    h2 {
      font-size: 1.85rem;
      line-height: 120%;
    }
    ${Content} {
      padding: 8%;
      border-radius: 30px;
      h2 {
        font-size: 2.4rem;
      }
      h3 {
        font-size: 1.9rem;
      }
      h4 {
        font-size: 1.5rem;
      }
    }
  }
  @media (max-width: 400px) {
    ${Content} {
      padding: 5%;
      border-radius: 20px;
      h2 {
        font-size: 2.1rem;
      }
      p,
      ul,
      ol {
        font-weight: 200;
        strong,
        b {
          font-weight: 300;
        }
      }
    }
    h1 {
      font-size: 3.2rem;
    }
  }
`;

export default CenteredSection;
