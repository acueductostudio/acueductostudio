import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1, H2 } from "components/shared/Dangerously";
import Services from "components/shared/Services";
import CaseList from "components/caseStudy/CaseList";
import Head from "components/layout/Head";
import Carousel from "components/Carousel";
import Products from "components/shared/Products";
import ButtonArrow from "components/shared/footers/ButtonArrow";

function Index({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "home.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio"}
        en_canonical={"https://acueducto.studio/en"}
      />
      <Land id="land">
        <LandContainer>
          <H1>{t.landing.heading}</H1>
          <H2>{t.landing.tagline}</H2>
          <Link
            href={"/portafolio"}
            as={locale === "en" ? "/work" : "/portafolio"}
            locale={locale}
            passHref
          >
            <ButtonArrow text={t.landing.button} inverse />
          </Link>
        </LandContainer>
      </Land>
      <Intro id="removeArrow">
        <TitleSection {...t.intro} borderTop />
      </Intro>
      <Carousel items={t.carousel} />
      <TitleSection {...t.studies.intro} borderTop />
      <CaseList />
      <Services services={t.services} />
      <Products {...t.products_section} />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Index);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "home.json" });
  return {
    props: {
      pt,
    },
  };
};

const Land = styled.section`
  min-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  padding: 0 4%;
  grid-gap: 2.2rem;
  align-items: center;
  h2 {
    font-size: 2.1rem;
    margin-top: 15px;
    max-width: 520px;
    color: ${(props) => props.theme.colors.white};
  }
  h1 {
    color: ${(props) => props.theme.colors.white};
    line-height: 100%;
    font-size: 7rem;
    max-width: 830px;
  }
  @media (max-width: 1115px) {
    h1 {
      font-size: 6.7rem;
    }
  }
  @media (max-width: 1070px) {
    h1 {
      font-size: 6.4rem;
    }
  }
  @media (max-width: 1025px) {
    h1 {
      font-size: 6.2rem;
    }
  }
  @media (max-width: 1000px) {
    h1 {
      font-size: 5.9rem;
    }
  }
  @media (max-width: 900px) {
    h1 {
      font-size: 5rem;
      max-width: 360px;
    }
    h2 {
      font-size: 1.8rem;
      max-width: 420px;
    }
  }
  @media (max-width: 700px) {
    h1 {
      font-size: 4rem;
      max-width: 450px;
    }
  }
  @media (max-width: 520px) {
    h1 {
      max-width: 280px;
    }
  }
  @media (max-width: 420px) {
    h1 {
      font-size: 3.35rem;
      max-width: 250px;
    }
    h2 {
      font-size: 1.6rem;
      max-width: 280px;
    }
  }
`;

const LandContainer = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 2 / span 10;
  h2 {
    margin-bottom: 2rem;
  }
  @media (max-width: 570px) {
    grid-column: 1 / span 11;
  }
  @media (max-width: 420px) {
    grid-column: 1 / span 12;
  }
`;

const Intro = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  transition: 0.3s ease all;
  & > div {
    padding-bottom: 6%;
  }
  @media (max-width: 900px) {
    padding-bottom: 6%;
  }
`;
