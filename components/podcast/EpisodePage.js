import React from "react";
import styled from "styled-components";
import { H1, Li } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import EpisodePreview from "components/podcast/EpisodePreview";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "./EpisodeNumber";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";
import CenteredSection, {
  Content,
  Insights,
  Transcript,
} from "components/shared/CenteredSection";
import ShareRouter from "./ShareRouter";
import YouTubePlayer from "react-player/youtube";

const EpisodePage = ({
  title,
  date,
  guest,
  insights,
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
}) => {
  const embedYoutube = youtube && youtube.replace("watch?v=", "embed/");
  return (
    <>
      <CenteredSection
        customBackground={"/assets/img/layout/backOld.svg"}
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
          <>
            <EpisodeNumberStyled>
              <EpisodeNumber episode={episode} />
            </EpisodeNumberStyled>
            <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
          </>
        </Fade>
        {youtube && (
          <VideoContainer>
            <Video>
              <Fade triggerOnce>
                <YouTubePlayer
                  className="react-player"
                  light={`/assets/img/podcast/youtube/${episode}.jpg`}
                  url={embedYoutube}
                  controls={true}
                  width="100%"
                  height="100%"
                />
              </Fade>
            </Video>
          </VideoContainer>
        )}
        <Fade triggerOnce>
          <EpisodePreview
            hideImageMobile
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
          {spotify && insights && (
            <Content as={Insights}>
              <ContentType insights>Insights</ContentType>
              <p>
                Si solo tienes un minuto, lo más importante que pueden aprender
                operadores, inversionistas y fundadores de {business} es lo
                siguiente:
              </p>
              <Transcript as={"div"}>
                {insights && (
                  <ul>
                    {insights.map((insight, i) => (
                      <Li key={"insight" + i}>{insight}</Li>
                    ))}
                  </ul>
                )}
              </Transcript>
            </Content>
          )}
        </Fade>
        <Fade>
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

const VideoContainer = styled.div`
  max-width: 800px;
  width: 100%;
  height: auto;
  margin-top: 5%;
  @media (max-width: 620px) {
    margin-top: 10%;
  }
`;

const Video = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: 30px;
  overflow: hidden;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

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
  font-weight: ${(p) => (p.insights ? 600 : 300)};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 6px;
  color: ${(p) => (p.insights ? "#4DA465" : p.theme.colors.background)};
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
  align-items: center;
  justify-content: center;
  display: flex;
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
