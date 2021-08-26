import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import EpisodePreview from "components/podcast/EpisodePreview";
import PodcastProps from "utils/types/EpisodeProps";
import Logo from "public/assets/img/layout/logo.svg";
import EpisodeNumber from "./EpisodeNumber";
import Link from "next/link";
import BorderLink from "components/shared/BorderedLink";
import CenteredSection, { Content } from "components/shared/CenteredSection";

const EpisodePage = ({
  title,
  date,
  guest,
  business,
  category,
  description,
  slug,
  spotify,
  apple,
  google,
  youtube,
  episode,
  content,
}: PodcastProps) => {
  return (
    <>
      <CenteredSection customBackground={"/assets/img/podcast/backOld.svg"}>
        <Fade triggerOnce>
          <IntroLogo>
            <Link href="/podcast" passHref>
              <a>
                <THoverable>cuando el río suena</THoverable>
                <span>
                  por <Logo />
                </span>
              </a>
            </Link>
          </IntroLogo>
        </Fade>
        <Fade triggerOnce>
          <EpisodeNumberStyled>
            <EpisodeNumber episode={episode} />
          </EpisodeNumberStyled>
          <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
          <EpisodePreview
            title={title}
            guest={guest}
            business={business}
            slug={slug}
            spotify={spotify}
            apple={apple}
            google={google}
            youtube={youtube}
            episode={episode}
            description={description}
            date={date}
            category={category}
            longFormat
          />
          <Content>{content}</Content>
        </Fade>
      </CenteredSection>
    </>
  );
};

export default React.memo(EpisodePage);

const THoverable = styled.b`
  font-weight: 300;
  ${BorderLink({ showLink: false })}
`;

const EpisodeNumberStyled = styled.div`
  @media (max-width: 1000px) {
    transform: scale(0.9);
  }
  @media (max-width: 800px) {
    transform: scale(0.8);
  }
`;

const IntroLogo = styled.p`
  line-height: 100%;
  font-size: 3.5rem;
  font-weight: 500;
  margin-bottom: 3px;
  color: ${(props) => props.theme.colors.foreground};
  text-align: center;
  margin-bottom: 15%;
  text-decoration: none;
  padding-top: 120px;
  a {
    text-decoration: none;
  }
  span {
    display: block;
    font-size: 2rem;
    font-weight: 100;
    color: ${(props) => props.theme.colors.accent};
    svg {
      max-width: 110px;
      * {
        fill: ${(props) => props.theme.colors.accent};
      }
    }
  }
  @media (max-width: 1300px) {
    padding-top: 50px;
  }
  @media (max-width: 1250px) {
    font-size: 3rem;
  }
  @media (max-width: 950px) {
    font-size: 2.5rem;
    span {
      margin-top: 5px;
      font-size: 1.5rem;
      svg {
        max-width: 90px;
      }
    }
  }
  @media (max-width: 800px) {
    font-size: 2rem;
    padding-top: 35px;
    span {
      margin-top: 0px;
      font-size: 1.3rem;
      svg {
        max-width: 70px;
      }
    }
  }
`;
