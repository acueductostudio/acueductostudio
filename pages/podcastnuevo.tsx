import styled from "styled-components";
import { useEffect } from "react";
import { GetStaticProps } from "next";
import EpisodeProps from "utils/types/EpisodeProps";
import EpisodePreview from "components/podcast/EpisodePreview";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import ssrLocale from "utils/ssrLocale";
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";
import Logo from "public/assets/img/layout/logo.svg";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";

export default function Articles({ locale, setTitle, episodes, pt }) {
  const { intro, head } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  return (
    <PageClipper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image_alt }}
        es_canonical={`https://acueducto.studio/podcast`}
      ></Head>
      <PodcastGrid>
        <div>
          <Fade triggerOnce>
            <H1>{intro.title}</H1>
            <span>
              por <Logo />
            </span>
            <p>{intro.p}</p>
          </Fade>
          <BroadcastRouter
            text="Escúchalo en "
            spotify="https://open.spotify.com/show/2YLB7SOeJsLp5DtDuIwX8t"
            google="https://podcasts.google.com/?feed=aHR0cHM6Ly9mZWVkcy5idXp6c3Byb3V0LmNvbS84OTU5NzIucnNz"
            youtube="https://www.youtube.com/playlist?list=PLX3VC_2vq4TTRsyLoyWOHutWND0hQt9lD"
            apple="https://podcasts.apple.com/mx/podcast/cuando-el-r%C3%ADo-suena/id1500473556?i=1000466665137"
          >
            Escúchalo en
          </BroadcastRouter>
          <PodcastList>
            {episodes.map((episode, index) => (
              <EpisodePreview
                {...episode}
                key={"npd" + index}
                episode={index + 1}
              />
            ))}
          </PodcastList>
        </div>
      </PodcastGrid>
      <ResourceFooter shadow identify="podcast" />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const episodeCollection = getAllEpisodes(["slug"]);
  const episodes = episodeCollection.map((episode: EpisodeProps) =>
    getEpisodeBySlug(episode.slug, [
      "title",
      "guest",
      "business",
      "description",
      "slug",
      "spotify",
      "apple",
      "google",
      "youtube",
    ])
  );
  const pt = ssrLocale({ locale: context.locale, fileName: "podcast.json" });
  return {
    props: {
      episodes: [...episodes],
      pt,
    },
  };
};

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
