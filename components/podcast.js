import styled from "styled-components";
import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import Fade from "react-reveal/Fade";
import es from "public/locales/es/podcast.json";
import Logo from "public/assets/img/layout/logo.svg";
import Spotify from "public/assets/img/casestudies/salvajenada/spotify.svg";

function Podcast(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    title,
    p,
    podcasts
  } = es.podcast_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/podcast"}
        lang={props.lang}
      />
      <PodcastGrid>
        <h1>{title}</h1>
        <span>
          por <Logo />
        </span>
        <p>{p}</p>
        <LogoList>
          <p>escúchalo en </p>
          <Spotify />
          <Spotify />
          <Spotify />
        </LogoList>
        <PodcastList>
          {podcasts.map((pod, index) => (
            <Pod key={"belief" + index}>
              <Fade>
                <iframe
                  src={pod.url}
                  frameBorder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                ></iframe>
              </Fade>
            </Pod>
          ))}
        </PodcastList>
      </PodcastGrid>
      <ContactFooter />
    </PageClipper>
  );
}
export default React.memo(Podcast);

const PodcastGrid = styled.div`
  background-color: ${props => props.theme.colors.background};
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.2rem 2.5rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  h1 {
    grid-column: 2 / span 10;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 0;
    max-width: 810px;
    color: ${props => props.theme.colors.foreground};
  }
  span {
    grid-column: 2 / span 10;
    color: ${props => props.theme.colors.accent};
    svg * {
      fill: ${props => props.theme.colors.accent};
    }
  }
  p {
    grid-column: 2 / span 5;
    padding-top: 2.5rem;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
  }
`;

const PodcastList = styled.ul`
  grid-column: 2 / span 7;
  list-style: none;
  margin-top: 5%;
`;

const Pod = styled.li`
  grid-column: 2 / span 10;
  position: relative;
  margin-bottom: 5%;
  iframe {
    height: 150px;
    width: 100%;
  }
`;

const LogoList = styled.div`
  grid-column: 2 / span 10;
  display: flex;
  align-items: center;
  padding-top: 2.5rem;
  p {
    padding: 0 10px 0 0;
  }
  svg {
    width: 30px;
    box-sizing: content-box;
    padding: 0 10px 0 10px;
  }
`;
