import { useEffect } from "react";
import { GetStaticProps } from "next";
import ArticleProps from "utils/types/ArticleProps";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/blogApi";
import { getAllEpisodes } from "utils/podcastApi";
import Head from "components/layout/Head";
import ArticlePage from "components/articles/ArticlePage";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Article({ locale, setTitle, article, numberOfE }) {
  useEffect(() => {
    setTitle("Artículo");
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        title={article.title}
        description={article.subtitle}
        headerTitle="Artículo"
        es_canonical={`https://acueducto.studio/articulos/${article.slug}`}
        image={{ fileName: `${article.slug}.png`, alt: article.title }}
      ></Head>
      <ArticlePage {...article} slug={article.slug} />
      <ResourceFooter identify={article.slug} podcastEpisodes={numberOfE} />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const article: ArticleProps = getPostBySlug(context.params.slug, [
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(article.content || "");

  //For podcast episode number in footer
  const episodes = getAllEpisodes(["slug"]);
  const numberOfE = Object.keys(episodes).length;

  if (!article) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      numberOfE: numberOfE,
      article: {
        ...article,
        content,
      },
    },
  };
};

export async function getStaticPaths() {
  const articles = getAllPosts(["slug"]);
  return {
    paths: articles.map((article: ArticleProps) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}
