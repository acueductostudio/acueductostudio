import styled from "styled-components";
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import EpisodeFeature from "components/podcast/EpisodeFeature";
import ssrLocale from "utils/ssrLocale";
import { getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1, H5 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import TitleSection from "components/shared/TitleSection";
import MetalForm from "components/shared/MetalForm";
import ButtonArrow from "components/shared/footers/ButtonArrow";
import Tilt from "react-parallax-tilt";
import { Persona, Check, BuildStory } from "components/shared/Icons";

const iconArray = [Persona, Check, BuildStory];

function PodcastLanding({ locale, setTitle, episodes, pt }) {
  const { intro, head, banner, favorites, chapters, closing } = pt;

  useEffect(() => {
    setTitle(head.headerTitle);
  }, [locale]);

  const onSubmit = (data) => {
    console.log("Desactivado", data);
    // // Create contact and add to list 3 (Consulting funnel) w/ test results
    // createContact({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   listIds: [3],
    //   updateEnabled: true,
    // });
    // Cookies.set("ue", data.email);
    // ReactPixel.init("506854653278097", advancedMatching(data.email));
    // // Pidió consultoría
    // ReactPixel.track("SubmitApplication", { email: data.email });
  };

  return (
    <PageClipper>
      <Head
        {...head}
        image={{ fileName: "og_image_podcast.png", alt: head.image_alt }}
        es_canonical={`https://acueducto.studio/podcast`}
      ></Head>
      <PodcastGrid>
        <Fade triggerOnce>
          <div>
            <H1>{intro.title}</H1>
            <p>{intro.p}</p>
            <MetalForm onSubmit={onSubmit} id={"podcastOL"} text={intro.form} />
          </div>
          <Tilt trackOnWindow={true} gyroscope={true}>
            <Image
              width={380}
              height={380}
              src={"/assets/img/layout/podcast_cover.svg"}
              alt={"Cuando el río suena"}
            />
          </Tilt>
        </Fade>
      </PodcastGrid>
      <FullSection>
        <Fade triggerOnce>
          <h2>{banner.title}</h2>
          <p>{banner.p}</p>
        </Fade>
      </FullSection>
      <EpisodesSection>
        <TitleSection title={favorites.title} heading={2} />
        <FeatureList>
          <div>
            {episodes.map((episode, index) => (
              <div key={"npd" + index}>
                <Tilt gyroscope={true} tiltMaxAngleX={10} tiltMaxAngleY={10}>
                  <EpisodeFeature {...episode} />
                </Tilt>
              </div>
            ))}
          </div>
        </FeatureList>
        <Fade>
          <Link href={"/podcast/archivo"} passHref>
            <ButtonArrow text={favorites.button} inverse={true} />
          </Link>
        </Fade>
      </EpisodesSection>
      <FeaturesSection>
        <TitleSection title={chapters.title} borderTop heading={2} />
        <Fade triggerOnce>
          <FeatureList narrow>
            <div>
              {chapters.themes.map((chapter, index) => {
                const Icon = iconArray[index];
                return (
                  <Feature key={"chtr" + index}>
                    <div>
                      <Icon />
                    </div>
                    <H5>{chapter.title}</H5>
                    <p>{chapter.p}</p>
                  </Feature>
                );
              })}
            </div>
          </FeatureList>
        </Fade>
      </FeaturesSection>
      <FullLastSection>
        <Fade triggerOnce>
          <h5>
            <span>{closing.label}</span>
            {closing.title}
          </h5>
          <p>{closing.p}</p>
          <div>
            <MetalForm onSubmit={onSubmit} id={"podcastOL"} text={intro.form} />
          </div>
        </Fade>
      </FullLastSection>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(PodcastLanding);

export const getStaticProps: GetStaticProps = async (context) => {
  const featuredSlugs = [
    { slug: "construye-identidades-que-cuenten-historias" },
    { slug: "un-capitulo-que-todo-ceo-debe-escuchar" },
    { slug: "como-se-disenan-las-apps-mas-exitosas" },
    { slug: "growth-es-el-nuevo-marketing" },
    { slug: "cual-es-el-trabajo-de-un-director-de-operaciones-en-una-startup" },
    { slug: "asi-funcionan-las-startups-basadas-en-ciencia" },
  ];

  const episodes = featuredSlugs.map((episode: EpisodeProps) =>
    getEpisodeBySlug(episode.slug, [
      "title",
      "guest",
      "business",
      "description",
      "category",
      "episode",
      "date",
      "slug",
      "spotify",
      "apple",
      "google",
      "youtube",
    ])
  );
  const pt = ssrLocale({ locale: context.locale, fileName: "podcast.json" });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      episodes: [...episodes],
      pt,
    },
  };
};

const Feature = styled.article`
  display: flex;
  flex-direction: column;
  background-color: #101213;
  border-radius: 50px;
  padding: 3.5rem 3.5rem 3.5rem 3.5rem;
  h5 {
    font-size: 2rem;
    font-weight: 100;
    margin: 20px 0;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_lower};
    font-size: 1.7rem;
  }
  div {
    padding: 20px;
    background-color: #1e2224;
    border-radius: 40px;
    display: flex;
    align-self: flex-start;
  }
  svg {
    width: 40px;
    * {
      stroke: ${(p) => p.theme.colors.foreground};
      stroke-width: 8px;
      fill: transparent;
    }
    .accent {
      stroke: ${(p) => p.theme.colors.accent};
    }
  }
`;

const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 8%;
  & > :first-child {
    padding-bottom: 4%;
  }
`;

const EpisodesSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > :first-child {
    padding-bottom: 4%;
  }
  & > :last-child {
    align-self: center;
    margin-bottom: 8%;
    margin-top: 2%;
  }
`;

const FullSection = styled.section`
  background-color: ${(p) => p.theme.colors.accent};
  text-align: center;
  padding: 8% 4%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-weight: 400;
    font-size: 5rem;
    line-height: 118%;
    margin-bottom: 28px;
    max-width: 930px;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 4rem;
      max-width: 750px;
    }
  }
`;

const FullLastSection = styled.section`
  text-align: center;
  padding: 0 4% 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  h5 {
    max-width: 1100px;
    font-weight: 400;
    font-size: 6.5rem;
    line-height: 110%;
    margin-bottom: 28px;
    margin-top: 0px;
    max-width: 850px;
    color: ${(p) => p.theme.colors.accent};
    & > span {
      text-transform: uppercase;
      font-size: 1.4rem;
      letter-spacing: 4px;
      color: ${(p) => p.theme.colors.foreground_low};
      display: block;
      text-align: center;
      line-height: 30px;
    }
  }
  & > p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 610px;
  }
  & > div {
    min-width: 455px;
  }
`;

const PodcastGrid = styled(TitleSectionGrid)`
  background-color: ${(p) => p.theme.colors.background};
  background-repeat: no-repeat;
  background-image: url("/assets/img/podcast/backOld.svg");
  background-size: cover;
  background-position: top right;
  background-attachment: fixed;
  width: 100%;
  padding: 10% 4%;
  position: relative;
  margin-bottom: -1px;
  align-items: center;
  min-height: 85vh;
  & > div:nth-of-type(2) {
    grid-column: 8 / span 4;
    padding-left: 5%;
  }
  & > div:nth-of-type(1) {
    grid-column: 2 / span 6;
  }
  h1 {
    letter-spacing: 0;
    line-height: 105%;
    font-size: 7rem;
    margin-bottom: 3px;
    max-width: 810px;
    color: ${(props) => props.theme.colors.foreground};
  }
  p {
    padding-top: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    position: relative;
    max-width: 510px;
  }
  @media (max-width: 1480px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 1280px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 1100px) {
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 2 / span 12;
      padding-left: 0;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 3 / span 8;
    }
    h1 {
      margin-bottom: 5%;
      font-size: 4rem;
      font-weight: 200;
      line-height: 110%;
    }
  }
  @media (max-width: 600px) {
    background-attachment: auto;
    & > div {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2),
    & > div:nth-of-type(1) {
      grid-column: 1 / span 12;
    }
    & > div:nth-of-type(2) {
      padding: 5%;
    }

    p {
      padding-top: 10px;
    }
    h1 {
      font-size: 3.4rem;
      line-height: 110%;
    }
  }
`;

const FeatureList = styled(TitleSectionGrid)<{ narrow?: boolean }>`
  padding-top: 0;
  padding-bottom: 2%;
  & > div {
    grid-column: 2 span 9;
    display: flex;
    gap: ${(props) => (props.narrow ? "1rem" : "3.5rem")};
    flex-wrap: wrap;
    justify-content: space-between;
  }
  article {
    width: ${(props) =>
      props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  & > div > div {
    width: ${(props) =>
      props.narrow ? "calc(33% - 1rem)" : "calc(33% - 2.5rem)"};
  }
  @media (max-width: 1360px) {
    & > div {
      gap: ${(props) => (props.narrow ? "1rem" : "4rem")};
      & > div,
      article {
        width: ${(props) =>
          props.narrow ? "calc(50% - 1rem)" : "calc(50% - 2rem)"};
        a {
          max-width: unset;
        }
      }
    }
  }
  @media (max-width: 950px) {
    & > div {
      & > div,
      article {
        width: 100%;
      }
    }
  }
`;
