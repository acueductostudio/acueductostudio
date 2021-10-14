import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import Picture from "components/caseStudy/shared/Picture";
import EpisodeNumber from "./EpisodeNumber";
import ShareRouter from "./ShareRouter";
import BorderLink from "components/shared/BorderedLink";
import ButtonArrow from "components/shared/footers/ButtonArrow";

interface EpisodeFormat extends EpisodeProps {
  longFormat?: boolean;
  nextEpisode?: boolean;
}

const EpisodePreview = ({
  title,
  guest,
  business,
  description,
  category,
  slug,
  date,
  spotify,
  apple,
  google,
  youtube,
  episode,
  longFormat,
  next,
  nextEpisode,
}: EpisodeFormat) => {
  const LinkComplex = ({ children }: { children: React.ReactNode }) => (
    <Link href={"/podcast/" + slug} passHref>
      <a>{children}</a>
    </Link>
  );
  let fullDate = new Date(`${date}T00:00:00`);
  let formatDate = fullDate.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <NewPod
        key={"npd" + episode}
        nextEpisode={nextEpisode}
        className={`${
          category == "Growth/marketing"
            ? "growth-marketing"
            : category.toLowerCase()
        } npd`}
      >
        <PictureContainer hoverable={!longFormat}>
          {longFormat ? (
            <Picture
              src={`/assets/img/podcast/${episode}.jpg`}
              alt={title + " - " + guest}
              height={180}
              width={180}
            />
          ) : (
            <LinkComplex>
              <Picture
                src={`/assets/img/podcast/${episode}.jpg`}
                alt={title + " - " + guest}
                height={nextEpisode ? 200 : 180}
                width={nextEpisode ? 200 : 180}
              />
            </LinkComplex>
          )}
        </PictureContainer>
        <div>
          <Fade triggerOnce>
            <HoverableContainer>
              {!longFormat && !nextEpisode && (
                <LinkComplex>
                  {console.log(next)}
                  <H2overable>{title}</H2overable>
                </LinkComplex>
              )}
            </HoverableContainer>
            <Guest>
              {!longFormat ? (
                <LinkComplex>
                  <EpisodeNumber episode={episode} />
                  <h3>
                    {guest} <span>{business}</span>
                  </h3>
                </LinkComplex>
              ) : (
                <h3>
                  {guest} <span>{business}</span>
                </h3>
              )}
            </Guest>
            <DateCat>
              {longFormat && (
                <time dateTime={date.toString()}>{formatDate}</time>
              )}
              <span>{category}</span>
            </DateCat>
            <p>{!nextEpisode && description}</p>
            <div>
              {!nextEpisode && (
                <BroadcastRouter
                  trackClicks
                  episode={episode}
                  spotify={spotify}
                  apple={apple}
                  google={google}
                  youtube={youtube}
                >
                  {longFormat && "Escúchalo en"}
                </BroadcastRouter>
              )}
            </div>
            <div>
              {longFormat && (
                <ShareRouter
                  shareUrl={`https://acueducto.studio/podcast/${slug}`}
                >
                  Comparte
                </ShareRouter>
              )}
            </div>
          </Fade>
          <ButtonSpace>
            {nextEpisode && (
              <LinkComplex>
                <ButtonArrow text={"seguir aprendiendo"} inverse />
              </LinkComplex>
            )}
          </ButtonSpace>
        </div>
      </NewPod>
    </>
  );
};

export default EpisodePreview;

const ButtonSpace = styled.div`
  min-width: 270px;
  display: flex;
  align-items: flex-start;
  margin-top: 2rem;
  @media (max-width: 600px) {
    min-width: 241px;
  }
`;

const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

const H2overable = styled.h2`
  ${BorderLink({ showLink: false })}
`;

const PictureContainer = styled.div<{ hoverable: boolean }>`
  min-width: 180px;
  margin-right: 5%;
  img {
    border-radius: 20px;
    transition: all 0.25s ease-out;
    opacity: ${(p) => (p.hoverable ? 0.9 : 1)};
    background-color: black;
    transform: scale(1);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        opacity: 1;
        transform: ${(p) => (p.hoverable ? "scale(0.99)" : "scale(1)")};
      }
    }
  }
  &:active {
    img {
      opacity: 1;
      transform: scale(0.99);
    }
  }
`;

const Guest = styled.div`
  display: flex;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      div {
        transform: scale(0.97);
      }
    }
  }
  &:active {
    div {
      transform: scale(0.95);
    }
  }
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

const DateCat = styled.div`
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.foreground};
  margin-top: 10px;
  margin-bottom: 0px;
  address {
    display: inline-block;
    font-style: normal;
  }
  time {
    margin-right: 10px;
  }
  span {
    border: 2px solid ${(p) => p.theme.colors.accent};
    border-radius: 50px;
    padding: 4px 13px 8px 14px;
    text-transform: lowercase;
    color: ${(p) => p.theme.colors.foreground_low};
    font-size: 1.5rem;
    mix-blend-mode: exclusion;
    background-color: ${(p) => p.theme.colors.background};
  }
`;

const NewPod = styled.article<{ nextEpisode: boolean }>`
  display: flex;
  max-width: 800px;
  margin-top: ${(p) => (p.nextEpisode ? "3.5rem" : "10%")};
  width: ${(p) => (p.nextEpisode ? "100%" : "inherit")};
  justify-content: ${(p) => (p.nextEpisode ? "center" : "inherit")};
  a {
    text-decoration: none;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 200;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  h3 {
    font-size: 2.2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -4px;
    text-align: left;
    span {
      display: block;
      font-size: 1.4rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: ${(p) => p.theme.colors.foreground_low};
    }
  }
  div p {
    color: ${(p) => p.theme.colors.foreground_low};
    padding-top: 1.3rem;
    line-height: 145%;
  }
  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: ${(p) => (p.nextEpisode ? "center" : "inherit")};
    ${PictureContainer} {
      min-width: unset;
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    ${DateCat} {
      span {
        font-size: 1.3rem;
      }
    }
    margin-top: ${(p) => (p.nextEpisode ? "3.5rem" : "20%")};
    p {
      padding-top: 9px;
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.8rem;
    }
  }
`;
