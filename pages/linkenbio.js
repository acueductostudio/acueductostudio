import { useEffect } from "react";
import styled from "styled-components";
import Head from "components/Head";
import Link from "next/link";
import PageClipper from "components/PageClipper";
import SimplePinnedSection from "components/shared/SimplePinnedSection";
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
      <SimplePinnedSection title={title}>
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
      </SimplePinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

const Subtitle = styled.p`
  color: ${(p) => p.theme.colors.accent} !important;
  font-size: 2.3rem;
  margin: 25px 0 10px !important;
`;

const SecondaryUl = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2.2rem;
  a {
    padding: 17% 12% 12% 15% !important;
  }
`;

const Resource = styled.li`
  border: 2px solid ${(p) => p.theme.colors.foreground};
  border-radius: 30px;
  margin-bottom: 20px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "" !important;
  }
  a {
    padding: 12% 7% 7%;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    background-image: none;
    &:hover {
      background-image: none;
    }
  }
  span {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.3rem !important;
    letter-spacing: 0.15rem;
  }
  h2 {
    margin: 0 !important;
    text-transform: lowercase;
  }
  h3 {
    font-size: 3rem !important;
    color: ${(p) => p.theme.colors.accent} !important;
    text-transform: lowercase;
    &::before {
      content: "" !important;
    }
  }
  svg {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
