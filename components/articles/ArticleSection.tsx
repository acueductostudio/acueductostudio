import React from "react";
import styled from "styled-components";
import { H1, Div } from "components/shared/Dangerously";
import Grid from "components/shared/TitleSectionGrid";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

interface ArticleProps {
  slug: string;
  title: string;
  subtitle: string;
  author: string;
  date: Date;
  content: string;
}

const iconSize = 40;

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
          <H1>{title}</H1>
          <h2>{subtitle}</h2>
          <div>
            <TwitterShareButton url={SHARE_URL}>
              <TwitterIcon
                size={iconSize}
                iconFillColor={"#060809"}
                bgStyle={{ fill: "transparent" }}
              />
            </TwitterShareButton>
            <FacebookShareButton url={SHARE_URL}>
              <FacebookIcon
                size={iconSize}
                iconFillColor={"#060809"}
                bgStyle={{ fill: "transparent" }}
              />
            </FacebookShareButton>
            <WhatsappShareButton url={SHARE_URL}>
              <WhatsappIcon
                size={iconSize}
                iconFillColor={"#060809"}
                bgStyle={{ fill: "transparent" }}
              />
            </WhatsappShareButton>
            <LinkedinShareButton url={SHARE_URL}>
              <LinkedinIcon
                size={iconSize}
                iconFillColor={"#060809"}
                bgStyle={{ fill: "transparent" }}
              />
            </LinkedinShareButton>
          </div>
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
        </Fade>
        <Div>{content}</Div>
      </ArticleGrid>
    </>
  );
};

export default React.memo(ArticleSection);

const ArticleGrid = styled(Grid)`
  background-color: ${(p) => p.theme.colors.foreground};
  color: ${(p) => p.theme.colors.background};
  div {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      grid-column: 2 / span 6;
    }
    &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3)) {
      grid-column: 4 / span 8;
    }
  }
  h1 {
    color: ${(p) => p.theme.colors.background};
    margin-bottom: 0;
  }
  h2 {
    font-size: 2.2rem;
    grid-column: 1 / span 5;
    font-weight: 200;
    color: ${(p) => p.theme.colors.accent};
  }
  p {
    color: ${(p) => p.theme.colors.background};
    max-width: 600px;
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
  margin-bottom: 10%;
  address {
    display: inline-block;
    font-style: normal;
  }
`;
