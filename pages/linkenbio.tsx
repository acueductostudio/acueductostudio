import { useEffect } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import styled from "styled-components";
import Head from "components/layout/Head";
import Link from "next/link";
import PageClipper from "components/layout/PageClipper";
import MetalPinnedSection from "components/shared/pinnedSections/MetalPinnedSection";
import { Fade } from "react-awesome-reveal";
import ContactFooter from "components/shared/footers/ContactFooter";
import Articulos from "public/assets/img/layout/linkenbio/articulos.svg";
import Podcast from "public/assets/img/layout/linkenbio/podcast.svg";

export default function LinkEnBio({ locale, setTitle, pt }) {
  let { head, title, links, secondary_links, p } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  return (
    <PageClipper>
      <Head
        {...head}
        es_canonical={"https://acueducto.studio/linkenbio"}
      ></Head>
      <MetalPinnedSection title={title}>
        <ul>
          {links.map((link, index) => (
            <Resource key={"linkentry" + index}>
              {index === 0 && (
                <img src="/assets/img/layout/linkenbio/kit.png" alt="Kit de inicio para Startups"/>
              )}
              {index === 2 && <Articulos />}
              {index === 1 && <Podcast />}
              <Link href={link.url} passHref locale={locale}>
                <a>
                  <Fade triggerOnce>
                    <span>{link.subtitle}</span>
                    <h2>{link.title}</h2>
                  </Fade>
                </a>
              </Link>
            </Resource>
          ))}
        </ul>
        <Subtitle>{p}</Subtitle>
        <ul>
          {secondary_links.map((link, index) => (
            <Resource key={"linkentry2" + index}>
                            {index === 0 && (
                <img src="/assets/img/layout/linkenbio/portafolio.png" alt="Casos de estudio"/>
              )}
              <Link href={link.url} passHref>
                <a>
                  <Fade triggerOnce>
                    <span>{link.subtitle}</span>
                    <h2>{link.title}</h2>
                  </Fade>
                </a>
              </Link>
            </Resource>
          ))}
        </ul>
      </MetalPinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "linkenbio.json" });
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

const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.accent} !important;
  font-size: 2.3rem;
  margin: 25px 0 20px;
  @media (max-width: 1250px) {
    font-size: 2rem;
  }
`;

const SecondaryUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.2rem;
  a {
    padding: 17% 12% 11% 15% !important;
  }
`;

const Resource = styled.li`
  border: 2px solid #828282;
  border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  transition: 0.2s ease-out border-color;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${(p) => p.theme.colors.accent};
    }
  }
  &:focus,
  &:active {
    border-color: ${(p) => p.theme.colors.accent};
    h3 {
      color: ${(p) => p.theme.colors.foreground};
    }
  }
  a {
    padding: 12% 7% 5.5%;
    display: flex;
    flex-direction: column;
  }
  span {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.3rem;
    letter-spacing: 0.15rem;
  }
  h2 {
    font-size: 3rem;
    line-height: 110%;
    margin: 0;
    text-transform: lowercase;
    font-weight: 200;
  }
  h3 {
    font-size: 3rem;
    color: ${(p) => p.theme.colors.accent};
    font-weight: 200;
    transition: 0.3s ease-out color;
  }
  svg, img {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
  }
  @media (max-width: 1250px) {
    h2,
    h3 {
      font-size: 2.5rem;
    }
    span {
      font-size: 1rem;
    }
  }
  @media (max-width: 800px) {
    border-radius: 25px;
  }
  @media (max-width: 600px) {
    border-radius: 20px;
    border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    a {
      padding: 13% 2% 5.5% 5%;
    }
    h2 {
      font-size: 2.1rem;
    }
    h3 {
      font-size: 1.8rem;
    }
    span {
      font-size: 1rem;
    }
  }
`;
