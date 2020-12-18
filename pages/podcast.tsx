import styled from "styled-components";
import Head from "components/layout/Head";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import React, { useEffect } from "react";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import { H1, P } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Logo from "public/assets/img/layout/logo.svg";
import Picture from "components/caseStudy/shared/Picture";
import { logEvent } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";

function Podcast({ locale, setTitle, pt }) {
  let { intro, podcasts, head } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  const handleLog = (episode: number, medium: string): void => {
    logEvent("Podcast_play", `E0${episode + 1}`, medium);
    ReactPixel.trackCustom("Podcast_play", `E0${episode + 1} ${medium}`);
  };

  return (
    <PageClipper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image_alt }}
        es_canonical={"https://acueducto.studio/podcast"}
      />
      <PodcastGrid>
        <div>
          <Fade triggerOnce>
            <H1>{intro.title}</H1>
            <span>
              por <Logo />
            </span>
            <p>{intro.p}</p>
          </Fade>
          <LogoList>
            <Fade triggerOnce>
              <P>Escúchalo en </P>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
              >
                Spotify
                <img
                  src="assets/img/layout/logos/spotify.svg"
                  alt="Escucha en Spotify"
                  width="33px"
                  height="43px"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://podcasts.apple.com/mx/podcast/cuando-el-r%C3%ADo-suena/id1500473556?i=1000466665137"
              >
                Apple Podcasts
                <img
                  src="assets/img/layout/logos/applepodcasts.svg"
                  alt="Escucha en Apple Podcasts"
                  width="33px"
                  height="43px"
                />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
              >
                <img
                  src="assets/img/layout/logos/googlepodcasts.svg"
                  alt="Escucha en Apple Podcasts"
                  width="33px"
                  height="43px"
                />
                Google Podcasts
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/playlist?list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
              >
                Youtube
                <img
                  src="/assets/img/layout/logos/youtube.svg"
                  alt="Escucha en YouTube"
                  width="33px"
                  height="43px"
                />
              </a>
            </Fade>
          </LogoList>
          <PodcastList>
            {podcasts.map((pod, index) => (
              <NewPod key={"npd" + index} episode={index + 1}>
                <Picture
                  src={`/assets/img/podcast/${index + 1}.jpg`}
                  alt={pod.title + " - " + pod.guest}
                  height={200}
                  width={200}
                />
                <div>
                  <Fade triggerOnce>
                    <h2>{pod.title}</h2>
                    <h3>{pod.guest}</h3>
                    <p>{pod.text}</p>
                    <LogoList>
                      <a
                        onClick={() => handleLog(index, "Spotify")}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={pod.urls.spotify}
                      >
                        Spotify
                        <img
                          src="assets/img/layout/logos/spotify.svg"
                          alt="Escucha en Spotify"
                          width="33px"
                          height="43px"
                        />
                      </a>
                      {pod.urls.apple && (
                        <a
                          onClick={() => handleLog(index, "ApplePodcasts")}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={pod.urls.apple}
                        >
                          Apple Podcasts
                          <img
                            src="assets/img/layout/logos/applepodcasts.svg"
                            alt="Escucha en Apple Podcasts"
                          />
                        </a>
                      )}
                      <a
                        onClick={() => handleLog(index, "GooglePodcasts")}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={pod.urls.google}
                      >
                        Google Podcasts
                        <img
                          src="assets/img/layout/logos/googlepodcasts.svg"
                          alt="Escucha en Apple Podcasts"
                          width="33px"
                          height="43px"
                        />
                      </a>
                      {pod.urls.youtube && (
                        <a
                          onClick={() => handleLog(index, "YouTube")}
                          target="_blank"
                          rel="noopener noreferrer"
                          href={pod.urls.youtube}
                        >
                          Youtube
                          <img
                            src="/assets/img/layout/logos/youtube.svg"
                            alt="Escucha en YouTube"
                            width="33px"
                            height="43px"
                          />
                        </a>
                      )}
                    </LogoList>
                  </Fade>
                </div>
              </NewPod>
            ))}
          </PodcastList>
        </div>
      </PodcastGrid>
      <ResourceFooter />
    </PageClipper>
  );
}
export default React.memo(Podcast);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "podcast.json",
  });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pt,
    },
  };
};

const NewPod = styled.article<{ episode: number }>`
  display: flex;
  margin-top: 10%;
  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 0px;
  }
  h3 {
    font-size: 2rem;
    margin-top: 6px;
    color: ${(p) => p.theme.colors.foreground_low};
    &::before {
      content: ${(p) => `"0${p.episode}"`};
      display: inline-block;
      background-color: ${(p) => p.theme.colors.accent};
      border-radius: 100px;
      padding: 6px 8px 6px;
      text-align: center;
      font-weight: 300;
      font-size: 1.8rem;
      width: 40px;
      height: 40px;
      color: ${(p) => p.theme.colors.background};
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      margin-right: 10px;
    }
  }
  & > div:first-of-type {
    margin-right: 5%;
  }
  img {
    border-radius: 10px;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 7px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    & > div:first-of-type {
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    margin-top: 20%;
    h3::before {
      width: 33px;
      height: 33px;
      font-size: 1.7rem;
      padding: 3px 6px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;

const PodcastGrid = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  background-image: url("assets/img/podcast/back.svg");
  background-size: cover;
  background-position: top right;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.2rem 2.5rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  margin-bottom: -1px;
  & > div {
    grid-column: 2 / span 10;
  }
  h1 {
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  span {
    color: ${(props) => props.theme.colors.accent};
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 600px;
  }
  @media (max-width: 1250px) {
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
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 15%;
    & > div {
      grid-column: 1 / span 12;
    }
    p {
      padding-top: 10px;
    }
    h1 {
      line-height: 0.9;
      padding-top: 5%;
      padding-bottom: 3%;
      grid-column-end: 12;
    }
  }
`;

const PodcastList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 5%;
  max-width: 800px;
`;

const LogoList = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  padding: 10px;
  border: 2px solid white;
  border-radius: 300px;
  p {
    padding: 0 !important;
    margin: 0 6px 0 12px;
  }
  a {
    display: flex;
    min-height: 44px;
    min-width: 44px;
    font-size: 0rem;
    cursor: pointer;
    img {
      box-shadow: none;
    }
    &:active,
    &:focus {
      outline: none;
      img {
        transform: scale(0.9);
      }
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  img {
    width: 33px;
    height: 43px;
    box-sizing: content-box;
    padding: 0 10px 0 10px;
    transition: transform 0.2s ease-out;
    aspect-ratio: attr(width) / attr(height);
  }
  @media (max-width: 430px) {
    margin-top: 15px;
    p {
      display: none;
    }
  }
`;
