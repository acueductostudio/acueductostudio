import { useEffect } from "react";
import { GetStaticProps } from "next";
import ArticleProps from "utils/types/ArticleProps";
import ssrLocale from "utils/ssrLocale";
import { getAllPosts, getPostBySlug } from "utils/blogApi";
import { getAllEpisodes } from "utils/podcastApi";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import SingleArticle from "components/articles/SingleArticle";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Articles({ locale, setTitle, posts, pt, numberOfE }) {
  const { intro, head } = pt;

  useEffect(() => {
    setTitle("Artículos");
  }, [locale]);

  return (
    <PageClipper>
      <Head
        {...head}
        es_canonical={`https://acueducto.studio/articulos`}
      ></Head>
      <TitleSection {...intro} />
      {posts.map((post, i) => (
        <SingleArticle
          {...post}
          featured={i === 0}
          reverse={i % 2}
          key={`article${i}`}
        />
      ))}
      <ResourceFooter identify="articulos" podcastEpisodes={numberOfE} />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const articles = getAllPosts(["slug"]);
  const posts = articles.map((post: ArticleProps) =>
    getPostBySlug(post.slug, [
      "title",
      "subtitle",
      "date",
      "slug",
      "author",
      "excerpt",
    ])
  ).sort((a,b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  const pt = ssrLocale({ locale: context.locale, fileName: "articulos.json" });

  //For podcast episode number in footer
  const episodes = getAllEpisodes(["slug"]);
  const numberOfE = Object.keys(episodes).length;

  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      numberOfE: numberOfE,
      posts: [...posts],
      pt,
    },
  };
};
