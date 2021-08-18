import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import BroadcastRouter from "components/podcast/BroadcastRouter";
import Picture from "components/caseStudy/shared/Picture";
import EpisodeNumber from "./EpisodeNumber";
import ShareRouter from "./ShareRouter";
import BorderLink from "components/shared/BorderedLink";
import ssrLocale from "utils/ssrLocale";

interface EpisodeFormat extends EpisodeProps {
  longFormat?: boolean;
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
    <NewPod key={"npd" + episode}>
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
              height={180}
              width={180}
            />
          </LinkComplex>
        )}
      </PictureContainer>
      <div>
        <Fade triggerOnce>
          <HoverableContainer>
            {!longFormat && (
              <LinkComplex>
                <H2overable>{title}</H2overable>
              </LinkComplex>
            )}
          </HoverableContainer>
          <Guest>
            {!longFormat && <EpisodeNumber episode={episode} />}
            <h3>
              {guest} <span>{business}</span>
            </h3>
          </Guest>
          <DateCat>
            {longFormat && <time dateTime={date.toString()}>{formatDate}</time>}
            <span>{category}</span>
          </DateCat>
          <p>{description}</p>
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
      </div>
    </NewPod>
  );
};

export default EpisodePreview;

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
    transition: transform 0.25s ease-out;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      img {
        transform: ${(p) => (p.hoverable ? "scale(0.95)" : "scale(1)")};
      }
    }
  }
  &:active {
    img {
      transform: scale(0.95);
    }
  }
`;

const Guest = styled.div`
  display: flex;
  div {
    margin-right: 15px;
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

const NewPod = styled.article`
  display: flex;
  margin-top: 10%;
  max-width: 800px;
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
    margin-top: 20%;
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
