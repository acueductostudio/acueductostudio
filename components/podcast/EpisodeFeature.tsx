import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import EpisodeProps from "utils/types/EpisodeProps";
import Picture from "components/caseStudy/shared/Picture";
import BorderLink from "components/shared/BorderedLink";

const EpisodeFeature = ({
  title,
  guest,
  business,
  slug,
  episode,
}: EpisodeProps) => {
  return (
    <Link href={"/podcast/" + slug} passHref key={"npd" + episode}>
      <NewPod>
        <PictureContainer hoverable={true}>
          <Picture
            src={`/assets/img/podcast/solas/${episode}.jpg`}
            alt={title + " - " + guest}
            height={142}
            width={142}
          />
        </PictureContainer>
        <Fade triggerOnce>
          <Guest>
              <h4>
                {guest} <span>{business}</span>   
              </h4>
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
    background-color: pink;
    overflow: hidden;
    display: inline-block;
    height: 142px;
  }
  img {
    transition: all 0.25s ease-out;
    background-color: black;
    transform: scale(1.01);
  }
`;

const Guest = styled.div`
  display: flex;
  margin-bottom: 10px;
  a {
    display: flex;
  }
  div {
    margin-right: 15px;
    transition: transform 0.3s ease;
  }
`;

const NewPod = styled.a`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width:100%;
  background-image: url("/assets/img/podcast/backCard.svg");
  background-size: cover;
  background-position: bottom;
  background-color: #101213;
  border-radius: 50px;
  padding: 3.5rem 3.5rem 2.5rem 3.5rem;
  text-decoration:none;
  transition: 0.3s ease-out all;
  a {
    text-decoration: none;
  }
  h3 {
    font-size: 2.1rem;
    font-weight: 100;
    line-height: 125%;
    margin-top: 0;
    margin-bottom: 12px;
    transition: 0.3s ease all;
  }
  h4 {
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
      color: #C8C8C8;
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
      background-color: #151819;
    }
  }
  &:active {
    background-color: #151819;
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
