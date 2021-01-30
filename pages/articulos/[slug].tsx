import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import { getAllPosts } from "utils/blogApi";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import ArticleSection from "components/articles/ArticleSection";
import PageClipper from "components/layout/PageClipper";
import ResourceFooter from "components/shared/footers/ResourceFooter";

export default function Contact({ locale, setTitle, pt, slug }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: `articulos/${slug}.json`,
      callBack: (nT) => {
        setT(nT);
        setTitle("Artículo");
      },
    });
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        {...t.head}
        es_canonical={`https://acueducto.studio/articulos/${slug}`}
        image={{ fileName: `${slug}.png`, alt: t.head.image_alt }}
      ></Head>
      <ArticleSection {...t.article} slug={slug} />
      <ResourceFooter />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: `articulos/${context.params.slug}.json`,
  });
  const slug = context.params.slug;
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pt,
      slug,
    },
  };
};

export async function getStaticPaths() {
  const articles = getAllPosts(["slug"]);
  return {
    paths: articles.map((article: { slug: string, content?:[] }) => {
      return {
        params: {
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}
