import React from "react";
import styled from "styled-components";
import { H1, Div } from "components/shared/Dangerously";
import Grid from "components/shared/TitleSectionGrid";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import {
  FacebookShareButton,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import FbIcon from "public/assets/img/layout/logos/fb.svg";
import LnIcon from "public/assets/img/layout/logos/linkedin.svg";
import TwIcon from "public/assets/img/layout/logos/tw.svg";
import WAIcon from "public/assets/img/layout/logos/whatsapp-inv.svg";
import ArticleProps from "utils/types/ArticleProps";

const ArticleSection = ({
  title,
  date,
  subtitle,
  author,
  slug,
  content,
}: ArticleProps) => {
  const SHARE_URL = `https://acueducto.studio/articulos/${slug}`;
  let fullDate = new Date(`${date}T00:00:00`);
  return (
    <>
      <Fade triggerOnce>
        <Pos>
          <Image
            width="1500px"
            height="600px"
            src={`/assets/img/articles/${slug}/header.svg`}
          />
          <Fader />
        </Pos>
      </Fade>
      <ArticleGrid>
        <Fade triggerOnce>
          <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
          <h2>{subtitle}</h2>
          <Shareable>
            <TwitterShareButton url={SHARE_URL}>
              <Icon>
                <TwIcon />
              </Icon>
            </TwitterShareButton>
            <FacebookShareButton url={SHARE_URL}>
              <Icon>
                <FbIcon />
              </Icon>
            </FacebookShareButton>
            <WhatsappShareButton url={SHARE_URL}>
              <Icon>
                <WAIcon />
              </Icon>
            </WhatsappShareButton>
            <LinkedinShareButton url={SHARE_URL}>
              <Icon>
                <LnIcon />
              </Icon>
            </LinkedinShareButton>
          </Shareable>
          <Credits>
            Por <address>{author}</address>
            {` | `}
            <time dateTime={date.toString()}>
              {fullDate.toLocaleDateString("es", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </Credits>
          <Content>{content}</Content>
        </Fade>
      </ArticleGrid>
    </>
  );
};

export default React.memo(ArticleSection);

const Content = styled(Div)``;

const Shareable = styled.div`
  height: 35px;
`;

const Icon = styled.div`
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(1.2);
        path {
          fill: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  svg {
    width: 55px;
    transition: all 0.2s ease-out;
    path {
      transition: all 0.3s ease-in;
      fill: ${(p) => p.theme.colors.background};
    }
  }
`;

const ArticleGrid = styled(Grid)`
  background-color: ${(p) => p.theme.colors.foreground};
  padding-top: 8%;
  color: ${(p) => p.theme.colors.background};
  grid-gap: 2rem;
  div {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3),
    &:nth-of-type(4) {
      grid-column: 2 / span 12;
    }
    &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
      grid-column: 4 / span 8;
    }
  }
  h1 {
    color: ${(p) => p.theme.colors.background};
    margin-bottom: 0;
    max-width: 900px;
  }
  h2 {
    font-size: 2.5rem;
    grid-column: 1 / span 5;
    font-weight: 200;
    max-width: 690px;
    color: ${(p) => p.theme.colors.accent};
  }
  ${Content} {
    img{
      max-width:100%;
      height: auto;
      margin: 2rem 0;
    }
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;

      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
    }
    h4 {
      font-size: 2rem;
      margin-bottom: 1rem;

      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
    }
    p {
      color: ${(p) => p.theme.colors.background};
      max-width: 680px;
      letter-spacing: -0.003em;
      line-height: 29px;
      font-size: 1.85rem;
      margin-bottom: 2rem;
      word-break: break-word;
      overflow-wrap: break-word;
      strong {
        font-weight: 300;
      }
    }
    ul {
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
  @media (max-width: 1350px) {
    div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
      grid-column: 3 / span 8;
    }
  }
  @media (max-width: 1100px) {
    div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 1000px) {
    ${Content} {
      p,
      ul {
        font-size: 1.7rem;
        line-height: 25px;
      }
    }
    div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 800px) {
    div {
      &:nth-of-type(1),
      &:nth-of-type(2),
      &:nth-of-type(3),
      &:nth-of-type(4) {
        grid-column: 1 / span 12;
      }
      &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
        grid-column: 1 / span 12;
      }
    }
  }
`;

const Pos = styled.div`
  position: relative;
`;

const Fader = styled.div`
  width: 100%;
  height: 60%;
  display: block;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, rgba(6, 8, 9, 1) 0%, rgba(6, 8, 9, 0) 100%);
`;

const Credits = styled.div`
  text-transform: uppercase;
  font-weight: 200;
  margin-bottom: 6%;
  address {
    display: inline-block;
    font-style: normal;
  }
`;
