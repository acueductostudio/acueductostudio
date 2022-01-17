import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import EpisodePreview from "components/podcast/EpisodePreview";
import PodcastProps from "utils/types/EpisodeProps";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "./EpisodeNumber";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";
import CenteredSection, {
  Content,
  Transcript,
} from "components/shared/CenteredSection";
import ShareRouter from "./ShareRouter";

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
  next,
}: PodcastProps) => {
  return (
    <>
      <CenteredSection
        customBackground={"/assets/img/podcast/backOld.svg"}
        id="cuandoelriosuena"
      >
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
        </Fade>
        <Fade triggerOnce>
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
        </Fade>
        <Fade triggerOnce>
          {spotify && (
            <Content>
              {content && <ContentType>Transcript</ContentType>}
              <Transcript>{content}</Transcript>
            </Content>
          )}
        </Fade>
        <Fade triggerOnce>
          <CenteredDiv>
            {content && spotify && (
              <>
                <RouterSpace>
                  Si crees que a alguien le seria útil este contenido,
                  compártelo con esa persona.
                </RouterSpace>
                <ShareRouter
                  shareUrl={`https://acueducto.studio/podcast/${slug}`}
                />
              </>
            )}
          </CenteredDiv>
        </Fade>
        <NextEp>
          <p>Escucha otro episodio</p>
          <EpisodePreview {...next} simplest />
        </NextEp>
      </CenteredSection>
    </>
  );
};

export default React.memo(EpisodePage);

const NextEp = styled.div`
  margin-top: 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.foreground_low};
  p {
    text-align: center;
  }
  @media (max-width: 620px) {
    margin-top: 20%;
  }
`;

const THoverable = styled.b`
  font-weight: 300;
  ${BorderLink({ showLink: false })}
`;

const CenteredDiv = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
`;

const ContentType = styled.span`
  font-weight: 300;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 6px;
  color: ${(props) => props.theme.colors.background};
  margin-bottom: 2rem;
  font-size: 1.5rem;
  width: 100%;
  display: block;
  transform: translateY(-100%);
  @media (max-width: 900px) {
    margin-top: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 30px;
    margin-bottom: 1rem;
  }
  @media (max-width: 500px) {
    font-size: 1.3rem;
    margin-top: 40px;
  }
`;

const RouterSpace = styled.div`
  padding-top: 20%;
  margin-top: 20px;
  text-align: center;
  max-width: 450px;
  color: ${(props) => props.theme.colors.foreground_low};
  @media (max-width: 800px) {
    max-width: 400px;
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 6%;
  }
`;

const EpisodeNumberStyled = styled.div`
  @media (max-width: 1000px) {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    transform: scale(0.8);
  }
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
  padding-top: 120px;
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
  @media (max-width: 1300px) {
    padding-top: 50px;
  }
  @media (max-width: 1250px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    span {
      margin-top: 5px;
      font-size: 1.5rem;
      svg {
        max-width: 90px;
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    padding-top: 35px;
    span {
      margin-top: 0px;
      font-size: 1.3rem;
      svg {
        max-width: 70px;
      }
    }
  }
`;
