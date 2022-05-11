import styled from "styled-components";
import React, { useEffect } from "react";
import { GetStaticProps } from "next";
import EpisodeProps from "utils/types/EpisodeProps";
import EpisodePreview from "components/podcast/EpisodePreview";
import ssrLocale from "utils/ssrLocale";
import { getAllEpisodes, getEpisodeBySlug } from "utils/podcastApi";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import TitleSection from "components/shared/TitleSection";
import MetalForm from "components/shared/MetalForm";

function PodcastLanding({ locale, setTitle, episodes, pt }) {
  const { intro, head, banner } = pt;

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
            <MetalForm onSubmit={onSubmit} id={"podcastOL"} text={intro.form} infinite />
          </div>
          <Image
            width={380}
            height={380}
            src={"/assets/img/layout/podcast_cover.svg"}
            alt={"Cuando el río suena"}
          />
        </Fade>
      </PodcastGrid>
      <FullSection>
        <h2>{banner.title}</h2>
        <p>{banner.p}</p>
      </FullSection>
      <PodcastList>
        {episodes.map((episode, index) =>
          index < 5 ? <EpisodePreview {...episode} key={"npd" + index} /> : null
        )}
      </PodcastList>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(PodcastLanding);

export const getStaticProps: GetStaticProps = async (context) => {
  const sortedEpisodes = getAllEpisodes(["slug", "episode"]).sort((ep1, ep2) =>
    ep1.episode > ep2.episode ? 1 : -1
  );
  const episodes = sortedEpisodes.map((episode: EpisodeProps) =>
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

const FullSection = styled.section`
  background-color: ${(p) => p.theme.colors.accent};
  text-align:center;
  padding: 10% 4%;
  display:flex;
  flex-direction:column;
  align-items:center;
  h2{
    max-width:1100px;
  }
`;

const PodcastGrid = styled(TitleSectionGrid)`
  background-color: ${(p) => p.theme.colors.background};
  background-image: url("/assets/img/podcast/back.svg");
  background-size: cover;
  background-position: top right;
  width: 100%;
  padding: 10% 4%;
  position: relative;
  margin-bottom: -1px;
  align-items: center;
  & > div:nth-of-type(2) {
    grid-column: 8 / span 4;
    padding-left: 5%;
  }
  & > div:nth-of-type(1){
    grid-column: 2 / span 6;
  }
  h1 {
    letter-spacing: 0;
    line-height: 100%;
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
  @media (max-width: 1250px) {
    h1 {
      font-size: 6rem;
    }
  }
  @media (max-width: 950px) {
    h1 {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    h1 {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 15%;
    & > div {
      grid-column: 1 / span 12;
    }
    p {
      padding-top: 10px;
    }
    h1 {
      line-height: 0.9;
      padding-top: 5%;
      padding-bottom: 3%;
      grid-column-end: 12;
    }
  }
`;

const PodcastList = styled.div`
  display: flex;
  flex-direction: column-reverse;
  margin-top: 5%;
  max-width: 800px;
`;
