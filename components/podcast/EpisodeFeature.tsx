import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import Picture from "components/caseStudy/shared/Picture";
import BorderLink from "components/shared/BorderedLink";

type FullEpisodeProps = EpisodeProps & {
  blue?: boolean;
};

const EpisodeFeature = ({
  title,
  guest,
  business,
  slug,
  episode,
  blue,
}: FullEpisodeProps) => {
  return (
    <Link href={"/podcast/" + slug} passHref key={"npd" + episode}>
      <NewPod blue={blue}>
        <PictureContainer hoverable={true}>
          <Picture
            src={`/assets/img/podcast/solas/${episode}.jpg`}
            alt={title + " - " + guest}
            height={142}
            width={142}
          />
        </PictureContainer>
        <Fade triggerOnce>
          <Guest blue={blue}>
            <h3>
              {guest} <span>{business}</span>
            </h3>
          </Guest>
          <HoverableContainer>
            <H2overable>{title}</H2overable>
          </HoverableContainer>
        </Fade>
      </NewPod>
    </Link>
  );
};

export default EpisodeFeature;

const HoverableContainer = styled.div`
  margin-bottom: 8px;
`;

const H2overable = styled.h3`
  ${BorderLink({ showLink: false })}
  &:first-letter {
    text-transform: lowercase;
  }
`;

const PictureContainer = styled.div<{ hoverable: boolean }>`
  margin-bottom: 7%;
  & > div {
    border-radius: 25px;
    overflow: hidden;
    display: inline-block;
    height: 142px;
  }
  img {
    transition: all 0.25s ease-out;
    background-color: #131516;
    transform: scale(1.01);
  }
`;

const Guest = styled.div<{ blue: boolean }>`
  display: flex;
  margin-bottom: 10px;
  text-shadow: ${(p) =>
    p.blue
      ? "-1px -1px 0 #305EE3,  1px -1px 0 #305EE3,-1px 1px 0 #305EE3,1px 1px 0 #305EE3;"
      : "-1px -1px 0 #131516,  1px -1px 0 #131516,-1px 1px 0 #131516,1px 1px 0 #131516;"};
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

const NewPod = styled.a<{ blue: boolean }>`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 800px;
  width: 100%;
  background-image: ${(p) =>
    p.blue
      ? 'url("/assets/img/layout/backCardWhite.svg")'
      : 'url("/assets/img/layout/backCard.svg")'};
  background-size: cover;
  background-position: bottom;
  background-color: ${(p) => (p.blue ? "#305EE3" : "#131516")};
  border-radius: 50px;
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  text-decoration: none;
  transition: 0.3s ease-out all;
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 2.1rem;
    font-weight: 100;
    line-height: 120%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  h3 {
    font-size: 2rem;
    color: ${(p) => p.theme.colors.foreground};
    margin-top: -4px;
    text-align: left;
    span {
      display: block;
      font-size: 1.2rem;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      font-weight: 200;
      color: #c8c8c8;
    }
  }
  div p {
    color: ${(p) => p.theme.colors.foreground_low};
    padding-top: 1.3rem;
    line-height: 145%;
    &:empty {
      display: none;
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(p) => (p.blue ? "#3A65E4" : "#171a1c")};
    }
  }
  &:active {
    background-color: ${(p) => (p.blue ? "#3A65E4" : "#171a1c")};
  }

  @media (max-width: 970px) {
    h2 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 900px) {
    flex-direction: column;
    padding: 3rem 3rem 2rem 3rem;
    border-radius: 40px;
    ${PictureContainer} {
      min-width: unset;
      max-width: 150px;
      margin-bottom: 2rem;
    }
  }
  @media (max-width: 620px) {
    padding: 2.5rem 2.5rem 1.5rem 2.5rem;
    border-radius: 30px;
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
