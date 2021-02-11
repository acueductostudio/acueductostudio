import { useEffect } from "react";
import { GetStaticProps } from "next";
import ArticleProps from "utils/types/ArticleProps";
import markdownToHtml from "utils/markdownToHtml";
import { getAllPosts, getPostBySlug } from "utils/blogApi";
import Head from "components/layout/Head";
import ArticleSection from "components/articles/ArticleSection";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Article({ locale, setTitle, post }) {
  useEffect(() => {
    setTitle("Artículo");
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        title={post.title}
        description={post.subtitle}
        headerTitle="Artículo"
        es_canonical={`https://acueducto.studio/articulos/${post.slug}`}
        image={{ fileName: `${post.slug}.png`, alt: post.title }}
      ></Head>
      <ArticleSection {...post} slug={post.slug} />
      <ResourceFooter />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const post: ArticleProps = getPostBySlug(context.params.slug, [
    "title",
    "subtitle",
    "date",
    "slug",
    "author",
    "content",
  ]);
  const content = await markdownToHtml(post.content || "");
  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: {
        ...post,
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
