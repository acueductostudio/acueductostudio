import { useEffect } from "react";
import styled from "styled-components";
import Head from "components/Head";
import Link from "next/link";
import PageClipper from "components/PageClipper";
import MetalPinnedSection from "components/shared/MetalPinnedSection";
import { Fade } from "react-awesome-reveal";
import ContactFooter from "components/ContactFooter";
import es from "public/locales/es/linkenbio.json";
import Consultoria from "public/assets/img/layout/linkenbio/consultoria.svg";
import Podcast from "public/assets/img/layout/linkenbio/podcast.svg";

export default function LinkEnBio(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    title,
    links,
    secondary_links,
    p,
  } = es.linkenbio_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        lang={props.lang}
      ></Head>
      <MetalPinnedSection title={title}>
        <ul>
          {links.map((link, index) => (
            <Resource key={"linkentry" + index}>
              {index === 2 && <Consultoria />}
              {index === 1 && <Podcast />}
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
        <Subtitle>{p}</Subtitle>
        <SecondaryUl>
          {secondary_links.map((link, index) => (
            <Resource key={"linkentry" + index}>
              <Link href={link.url} passHref>
                <a>
                  <Fade triggerOnce>
                    <h3>{link.title}</h3>
                  </Fade>
                </a>
              </Link>
            </Resource>
          ))}
        </SecondaryUl>
      </MetalPinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

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
  transition: .2s ease-out border-color;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      border-color: ${(p) => p.theme.colors.accent};
    }
  }
  &:focus, &:active{
    border-color: ${(p) => p.theme.colors.accent};
    h3{
      color:${(p) => p.theme.colors.foreground};
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
    transition: .3s ease-out color;
  }
  svg {
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
