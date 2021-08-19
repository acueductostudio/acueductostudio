import React from "react";
import styled from "styled-components";
import { H1, Div } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import EpisodePreview from "components/podcast/EpisodePreview";
import PodcastProps from "utils/types/EpisodeProps";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "./EpisodeNumber";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";

const EpisodePage = ({
  title,
  date,
  guest,
  business,
  category,
  description,
  slug,
  spotify,
  apple,
  google,
  youtube,
  episode,
  content,
}: PodcastProps) => {
  return (
    <>
      <ArticleGrid>
        <Fade triggerOnce>
          <IntroLogo>
            <Link href="/podcast" passHref>
              <a>
                <THoverable>cuando el río suena</THoverable>
                <span>
                  por <Logo />
                </span>
              </a>
            </Link>
          </IntroLogo>

          <EpisodeNumberStyled>
            <EpisodeNumber episode={episode} />
          </EpisodeNumberStyled>
          <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
          <EpisodePreview
            title={title}
            guest={guest}
            business={business}
            slug={slug}
            spotify={spotify}
            apple={apple}
            google={google}
            youtube={youtube}
            episode={episode}
            description={description}
            date={date}
            category={category}
            longFormat
          />
          <Content>{content}</Content>
        </Fade>
      </ArticleGrid>
    </>
  );
};

export default React.memo(EpisodePage);

const Content = styled(Div)``;
const EpisodeNumberStyled = styled.div``;
const THoverable = styled.div`
  ${BorderLink({ showLink: false })}
`;

const IntroLogo = styled.p`
  line-height: 100%;
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${(props) => props.theme.colors.foreground};
  text-align: center;
  margin-bottom: 15%;
  text-decoration: none;

  a {
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 2rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.accent};
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
`;

const ArticleGrid = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  background-image: url("/assets/img/podcast/backOld.svg");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: top right;
  padding: 10% 4%;
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
  ${Content} {
    background-color: ${(props) => props.theme.colors.foreground};
    padding: 10%;
    border-radius: 70px;
    margin-top: 8%;
    max-width: 900px;
    img {
      max-width: 100%;
      height: auto;
      margin-bottom: 2rem;
    }
    h2 {
      font-size: 3rem;
      margin-bottom: 1rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.background};
      line-height: 120%;
    }
    h3 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
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
    p {
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
        font-weight: 300;
        color: ${(p) => p.theme.colors.background};
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
  @media (max-width: 1250px) {
    ${IntroLogo} {
      font-size: 3rem;
    }
    h1 {
      font-size: 6rem;
      line-height: 110%;
    }
    h2 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 1000px) {
    ${EpisodeNumberStyled} {
      transform: scale(0.9);
    }
    ${Content} {
      border-radius: 40px;
      p,
      ul {
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
    ${IntroLogo} {
      font-size: 2.5rem;
      span {
        margin-top: 5px;
        font-size: 1.5rem;
        svg {
          max-width: 90px;
        }
      }
    }
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    ${EpisodeNumberStyled} {
      transform: scale(0.8);
    }
    ${IntroLogo} {
      font-size: 2rem;
      span {
        margin-top: 0px;
        font-size: 1.3rem;
        svg {
          max-width: 70px;
        }
      }
    }
    h1 {
      font-size: 4rem;
      margin-top: 10px;
    }
    padding-top: 8%;
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
  @media (max-width: 650px) {
    h1 {
      font-size: 3.4rem;
      margin-top: 0px;
    }
    ${Content} {
      padding: 8%;
      border-radius: 30px;
    }
    padding-top: 30px;
    grid-gap: 1.2rem;
    h2 {
      font-size: 1.85rem;
      line-height: 120%;
    }
  }
  @media (max-width: 400px) {
    ${Content} {
      padding: 5%;
      border-radius: 20px;
      p,
      ul {
        font-weight: 200;
      }
    }
    h1 {
      font-size: 3.2rem;
    }
  }
`;
