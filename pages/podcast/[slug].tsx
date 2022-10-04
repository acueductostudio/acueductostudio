import { useEffect } from "react";
import { GetStaticProps } from "next";
import EpisodeProps from "utils/types/EpisodeProps";
import markdownToHtml from "utils/markdownToHtml";
import {
  getAllEpisodes,
  getEpisodeBySlug,
  getNextEpisodeSlug,
} from "utils/podcastApi";
import Head from "components/layout/Head";
import EpisodePage from "components/podcast/EpisodePage";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Episodio({ locale, setTitle, episode, numberOfE }) {
  useEffect(() => {
    setTitle("Podcast");
  }, [locale]);

  return (
    <PageClipper>
      <Head
        title={episode.title + " | " + episode.guest + ", " + episode.business}
        description={episode.description}
        headerTitle="Episodio"
        es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
        image={{
          fileName: episode.episode >= 63 ? `og_image_e${episode.episode}.gif` : `og_image_e${episode.episode}.png`,
          alt: episode.title + " | " + episode.guest + ", " + episode.business,
        }}
      ></Head>
      <EpisodePage {...episode} slug={episode.slug} />
      <ResourceFooter
        shadow
        identify={episode.slug}
        podcastEpisodes={numberOfE}
      />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const episode: EpisodeProps = getEpisodeBySlug(context.params.slug, [
    "title",
    "guest",
    "date",
    "business",
    "category",
    "description",
    "episode",
    "slug",
    "spotify",
    "apple",
    "google",
    "youtube",
    "content",
  ]);
  const next: EpisodeProps = getEpisodeBySlug(
    getNextEpisodeSlug(episode.episode),
    [
      "title",
      "guest",
      "date",
      "business",
      "category",
      "description",
      "episode",
      "slug",
      "spotify",
      "apple",
      "google",
      "youtube",
    ]
  );

  const content = await markdownToHtml(episode.content || "");

  //For podcast episode number in footer
  const episodes = getAllEpisodes(["slug"]);
  const numberOfE = Object.keys(episodes).length + 1;

  if (!episode) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      numberOfE: numberOfE,
      episode: {
        ...episode,
        content,
        next,
      },
      nextEpisode: {
        ...next,
      },
    },
  };
};

export async function getStaticPaths() {
  const episodes = getAllEpisodes(["slug"]);
  return {
    paths: episodes.map((episode: EpisodeProps) => {
      return {
        params: {
          slug: episode.slug,
        },
      };
    }),
    fallback: false,
  };
}
