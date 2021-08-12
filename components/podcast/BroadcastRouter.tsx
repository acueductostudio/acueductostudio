import styled from "styled-components";
import EpisodeProps from "utils/types/EpisodeProps";
import { logEvent } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import { P } from "components/shared/Dangerously";

interface EpisodeComplete extends EpisodeProps {
  episode?: number;
  text?: string;
  children?: React.ReactNode;
  trackClicks?: boolean;
}

const BroadcastRouter = ({
  children,
  spotify,
  apple,
  google,
  youtube,
  episode,
  trackClicks,
}: EpisodeComplete) => {
  const handleLog = (episode: number, medium: string): void => {
    logEvent("Podcast_play", `E0${episode}`, medium);
    ReactPixel.trackCustom("Podcast_play", {
      episode: `E0${episode}`,
      medio: medium,
    });
  };
  return (
    <LogoList>
      {children && <P>{children + " "}</P>}
      {spotify && (
        <a
          onClick={() => (trackClicks ? handleLog(episode, "Spotify") : null)}
          target="_blank"
          rel="noopener noreferrer"
          href={spotify}
        >
          Spotify
          <img
            src="assets/img/layout/logos/spotify.svg"
            alt="Escucha en Spotify"
            width="33px"
            height="43px"
          />
        </a>
      )}
      {apple && (
        <a
          onClick={() =>
            trackClicks ? handleLog(episode, "ApplePodcasts") : null
          }
          target="_blank"
          rel="noopener noreferrer"
          href={apple}
        >
          Apple Podcasts
          <img
            src="assets/img/layout/logos/applepodcasts.svg"
            alt="Escucha en Apple Podcasts"
            width="33px"
            height="43px"
          />
        </a>
      )}
      {google && (
        <a
          onClick={() =>
            trackClicks ? handleLog(episode, "GooglePodcasts") : null
          }
          target="_blank"
          rel="noopener noreferrer"
          href={google}
        >
          Google Podcasts
          <img
            src="assets/img/layout/logos/googlepodcasts.svg"
            alt="Escucha en Apple Podcasts"
            width="33px"
            height="43px"
          />
        </a>
      )}
      {youtube && (
        <a
          onClick={() => (trackClicks ? handleLog(episode, "YouTube") : null)}
          target="_blank"
          rel="noopener noreferrer"
          href={youtube}
        >
          Youtube
          <img
            src="/assets/img/layout/logos/youtube.svg"
            alt="Escucha en YouTube"
            width="33px"
            height="43px"
          />
        </a>
      )}
    </LogoList>
  );
};

export default BroadcastRouter;

const LogoList = styled.div`
  display: inline-flex;
  align-items: center;
  margin-top: 2rem;
  padding: 10px;
  border: 2px solid white;
  border-radius: 300px;
  p {
    padding: 0 !important;
    margin: 0 6px 0 12px;
  }
  a {
    display: flex;
    min-height: 44px;
    min-width: 44px;
    font-size: 0rem;
    cursor: pointer;
    img {
      box-shadow: none;
    }
    &:active,
    &:focus {
      outline: none;
      img {
        transform: scale(0.9);
      }
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }
  img {
    width: 33px;
    height: 43px;
    box-sizing: content-box;
    padding: 0 10px 0 10px;
    transition: transform 0.2s ease-out;
    aspect-ratio: attr(width) / attr(height);
  }
  @media (max-width: 430px) {
    margin-top: 15px;
    p {
      display: none;
    }
  }
`;
