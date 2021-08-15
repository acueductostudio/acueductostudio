import { useEffect } from "react";
import { GetStaticProps } from "next";
import EpisodeProps from "utils/types/EpisodeProps";
import markdownToHtml from "utils/markdownToHtml";
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PodcastPage from "components/podcast/PodcastPage";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Episodio({ locale, setTitle, episode }) {
  useEffect(() => {
    setTitle("Episodio");
  }, [locale]);

  return (
    <PageClipper>
      <Head
        title={episode.title + " | " + episode.guest + ", " + episode.business}
        description={episode.subtitle}
        headerTitle="Episodio"
        es_canonical={`https://acueducto.studio/podcast/${episode.slug}`}
        image={{
          fileName: `/assets/img/podcast/${episode.episode}.jpg`,
          alt: episode.title + " | " + episode.guest + ", " + episode.business,
        }}
      ></Head>
      <PodcastPage {...episode} slug={episode.slug} />
      <ResourceFooter identify={episode.slug} />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const episode: EpisodeProps = getEpisodeBySlug(context.params.slug, [
    "title",
    "guest",
    "business",
    "description",
    "episode",
    "slug",
    "spotify",
    "apple",
    "google",
    "youtube",
    "content",
  ]);
  const content = await markdownToHtml(episode.content || "");
  if (!episode) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      episode: {
        ...episode,
        content,
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
