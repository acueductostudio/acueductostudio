import styled from "styled-components";
import { useRef } from "react";
import createMarkup from "../../helpers/createMarkup";
import Fade from "react-reveal/Fade";
import Arrow from "../../static/assets/img/layout/arrow.svg";
import Link from "next/link";

const SingleCase = props => {
  const video = useRef(null);
  return (
    <Case>
      <Link
        href={
          props.lang === "en"
            ? "/en/work" + props.link
            : "portafolio" + props.link
        }
        passHref
      >
        <a>
          <Fade>
            <VidContainer>
              <Logo
                src={`../../static/assets/img/casestudies${props.link}/portfolio_logo.svg`}
              />
              {props.noPlay ? (
                <video
                  ref={video}
                  playsInline
                  muted
                  loop
                  poster={`../static/assets/img/casestudies${props.link}/portfolio_poster.svg`}
                >
                  <source
                    src={`../static/assets/video/casestudies${props.link}/portfolio.mp4`}
                  />
                </video>
              ) : (
                <video
                  ref={video}
                  playsInline
                  autoPlay
                  muted
                  loop
                  poster={`../static/assets/img/casestudies${props.link}/portfolio_poster.svg`}
                >
                  <source
                    src={`../static/assets/video/casestudies${props.link}/portfolio.mp4`}
                  />
                </video>
              )}
            </VidContainer>
          </Fade>
        </a>
      </Link>
      <Info>
        <Fade>
          <Link
            href={
              props.lang === "en"
                ? "/en/work" + props.link
                : "portafolio" + props.link
            }
            passHref
          >
            <a>
              <h4>{props.title}</h4>
            </a>
          </Link>
        </Fade>
        <Flexed>
          <Fade>
            <p dangerouslySetInnerHTML={createMarkup(props.tags)} />
          </Fade>
          <Link
            href={
              props.lang === "en"
                ? "/en/work" + props.link
                : "portafolio" + props.link
            }
            passHref
          >
            <a>
              <Arrow />
            </a>
          </Link>
        </Flexed>
      </Info>
    </Case>
  );
};

const CaseList = props => {
  let c = props.c;
  let cases = Object.entries(c).map(function(study, index) {
    study = study[1];
    if (props.limit !== undefined && index + 1 > props.limit) {
      return;
    } else {
      return (
        <SingleCase
          key={"case" + index}
          title={study.title}
          tags={study.tags}
          link={study.link}
          video={study.video}
          logo={study.logo}
          noPlay={props.noPlay}
          lang={props.lang}
        />
      );
    }
  });
  return <CaseStudiesWrapper>{cases}</CaseStudiesWrapper>;
};

export default React.memo(CaseList);

const Logo = styled.img`
  width: 70%;
  transform: translateZ(1px) translateY(-50%);
  align-self: center;
  justify-self: center;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 50%;
`;

const Flexed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  a {
    justify-content: flex-end;
    display: flex;
  }
`;

const Info = styled.div`
  padding: 10% 10% 10% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  a {
    text-decoration: none;
  }
  h4 {
    font-size: 4.5rem;
    font-weight: 200;
    line-height: 110%;
    max-width: 500px;
    cursor: pointer;
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
  }
  svg {
    align-self: flex-end;
    width: 50px;
    height: 40px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
  }
  @media (max-width: 1160px) {
    h4 {
      font-size: 4rem;
    }
  }
  @media (max-width: 950px) {
    h4 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 780px) {
    h4 {
      font-size: 3rem;
    }
    p {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${props => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -10px;
    }
  }
  @media (max-width: 500px) {
    h4 {
      font-size: 2.5rem;
    }
  }
`;

const VidContainer = styled.div`
  margin: 10%;
  width: 80%;
  height: 0;
  padding-bottom: 80%;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  video {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
  }
`;

const Case = styled.div`
  display: grid;
  border-top: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    ${VidContainer} {
      margin: 5% 5% 25px 5%;
      width: 90%;
      padding-bottom: 45%;
      video {
        top: -50%;
      }
    }
    ${Info} {
      padding: 0 5% 5% 5%;
    }
    h4 {
      margin-bottom: 20px;
    }
  }
`;

const CaseStudiesWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
