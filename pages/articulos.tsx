import { useEffect } from "react";
import { GetStaticProps } from "next";
import ArticleProps from "utils/types/ArticleProps";
import ssrLocale from "utils/ssrLocale";
import { getAllPosts, getPostBySlug } from "utils/blogApi";
import Head from "components/layout/Head";
import TitleSection from "components/shared/TitleSection";
import SingleArticle from "components/articles/SingleArticle";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Articles({ locale, setTitle, posts, pt }) {
  const { intro, head } = pt;

  useEffect(() => {
    setTitle("Artículos");
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        {...head}
        es_canonical={`https://acueducto.studio/articulos`}
        // image={{ fileName: `${post.slug}.png`, alt: post.title }}
      ></Head>
      <TitleSection {...intro} />
      {posts.reverse().map((post, i) => (
        <SingleArticle
          {...post}
          featured={i === 0}
          reverse={i % 2}
          key={`article${i}`}
        />
      ))}
      <ResourceFooter />
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
  );
  const pt = ssrLocale({ locale: context.locale, fileName: "articulos.json" });
  return {
    props: {
      posts: [...posts],
      pt,
    },
  };
};
