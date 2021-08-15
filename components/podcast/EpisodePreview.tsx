import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import Picture from "components/caseStudy/shared/Picture";

const EpisodePreview = ({
  title,
  guest,
  business,
  description,
  slug,
  spotify,
  apple,
  google,
  youtube,
  episode,
}: EpisodeProps) => {
  const LinkComplex = ({ children }: { children: React.ReactNode }) => (
    <Link href={"/podcast/" + slug} passHref>
      <a>{children}</a>
    </Link>
  );
  return (
    <NewPod key={"npd" + episode} episode={episode}>
      <LinkComplex>
        <Picture
          src={`/assets/img/podcast/${episode}.jpg`}
          alt={title + " - " + guest}
          height={180}
          width={180}
        />
      </LinkComplex>
      <div>
        <Fade triggerOnce>
          <LinkComplex>
            <h2>{title}</h2>
          </LinkComplex>
          <h3>
            {guest}, {business}
          </h3>
          <p>{description}</p>
          <BroadcastRouter
            trackClicks
            episode={episode}
            spotify={spotify}
            apple={apple}
            google={google}
            youtube={youtube}
          />
        </Fade>
      </div>
    </NewPod>
  );
};

export default EpisodePreview;

const NewPod = styled.article<{ episode: number }>`
  display: flex;
  margin-top: 10%;
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 0px;
  }
  h3 {
    font-size: 2rem;
    margin-top: 6px;
    color: ${(p) => p.theme.colors.foreground_low};
    &::before {
      content: ${(p) => `"${p.episode < 10 ? "0" + p.episode : p.episode}"`};
      display: inline-block;
      background-color: ${(p) => p.theme.colors.accent};
      border-radius: 100px;
      padding: 6px 8px 6px;
      text-align: center;
      font-weight: 300;
      font-size: 1.8rem;
      width: 40px;
      height: 40px;
      color: ${(p) => p.theme.colors.background};
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
      margin-right: 10px;
    }
  }
  & > a:first-of-type {
    margin-right: 5%;
    min-width: 180px;
  }
  img {
    border-radius: 10px;
    box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
      margin-bottom: 7px;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    & > div:first-of-type {
      min-width: unset;
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    margin-top: 20%;
    h3::before {
      width: 33px;
      height: 33px;
      font-size: 1.7rem;
      padding: 3px 6px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;

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
