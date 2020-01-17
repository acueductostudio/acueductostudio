import Head from "components/Head";
import styled from "styled-components";
import { useEffect } from "react";
// import Fade from "react-reveal/Fade";
import { Fade } from "react-awesome-reveal";
import { darken } from "polished";
import TitleSection from "components/shared/TitleSection";
import PinnedSection from "components/shared/PinnedSection";
import { P, H2, H3 } from "components/shared/Dangerously";
import createMarkup from "utils/createMarkup";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";

import Logo from "static/assets/img/layout/logo.svg";
import DigitalTransformation from "static/assets/img/layout/icons/digitaltransformation.svg";
import StrategicDesign from "static/assets/img/layout/icons/strategicdesign.svg";

import Tesla from "static/assets/img/layout/logos/tesla.svg";
import Nike from "static/assets/img/layout/logos/nike.svg";
import Burberry from "static/assets/img/layout/logos/burberry.svg";
import Cemex from "static/assets/img/layout/logos/cemex.svg";
import Hasbro from "static/assets/img/layout/logos/hasbro.svg";
import Starbucks from "static/assets/img/layout/logos/starbucks.svg";

import NodeLogo from "static/assets/img/layout/logos/node.svg";
import ReactLogo from "static/assets/img/layout/logos/react.svg";
import NextLogo from "static/assets/img/layout/logos/next.svg";
import ReactNativeLogo from "static/assets/img/layout/logos/react-native.svg";
import Electron from "static/assets/img/layout/logos/electron.svg";
import Angular from "static/assets/img/layout/logos/angular.svg";
import PWA from "static/assets/img/layout/logos/pwa.svg";

import Shopify from "static/assets/img/layout/logos/shopify.svg";
import StyledLogo from "static/assets/img/layout/logos/styled.svg";
import Sass from "static/assets/img/layout/logos/sass.svg";
import Css3 from "static/assets/img/layout/logos/css3.svg";
import Html5 from "static/assets/img/layout/logos/html5.svg";
import Ads from "static/assets/img/layout/logos/ads.svg";
import Git from "static/assets/img/layout/logos/git.svg";

import Ios from "static/assets/img/layout/logos/ios.svg";
import Macos from "static/assets/img/layout/logos/macos.svg";
import Android from "static/assets/img/layout/logos/android.svg";
import Windows from "static/assets/img/layout/logos/windows.svg";
import Linux from "static/assets/img/layout/logos/linux.svg";
import Notion from "static/assets/img/layout/logos/notion.svg";
import Figma from "static/assets/img/layout/logos/figma.svg";

import i1 from "static/assets/img/layout/icons/discover.svg";
import i2 from "static/assets/img/layout/icons/envision.svg";
import i3 from "static/assets/img/layout/icons/buildstory.svg";
import i4 from "static/assets/img/layout/icons/craft.svg";
import i5 from "static/assets/img/layout/icons/launch.svg";
import i6 from "static/assets/img/layout/icons/review.svg";

const stepIconArray = [i1, i2, i3, i4, i5, i6];

const techIconArray = [
  NodeLogo,
  ReactLogo,
  NextLogo,
  ReactNativeLogo,
  Electron,
  Angular,
  PWA,
  Shopify,
  StyledLogo,
  Sass,
  Css3,
  Html5,
  Ads,
  Git,
  Ios,
  Macos,
  Android,
  Windows,
  Linux,
  Notion,
  Figma
];

const StepContainer = ({ index, title, p, li, p2 }) => {
  const StepIcon = stepIconArray[index];
  return (
    <Step>
      <Fade>
        <span>0{index + 1}</span>
        <StepIcon />
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup(p)} />
        <ul>
          {li.map((item, index) => (
            <li key={"li1" + index}>{item}</li>
          ))}
        </ul>
        <p>{p2}</p>
      </Fade>
    </Step>
  );
};

export default function Pitch(props) {
  let t = props.locale.pitch_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipperPadded>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/pitch"}
        en_canonical={"https://acueducto.studio/en/pitch"}
        lang={props.lang}
      />
      <StyledPinnedSection title={t.intro.title} p={t.intro.p0}>
        <LogoFull />
        <P>{t.intro.p0}</P>
        <h3>{t.intro.subtitle1}</h3>
        <StyledList>
          {t.intro.li1.map((item, index) => (
            <li key={"li1nside" + index}>{item}</li>
          ))}
        </StyledList>
        <P>{t.intro.p1}</P>
        <H3>{t.intro.subtitle2}</H3>
        <BusinessLogoList>
          <li>
            <Tesla />
          </li>
          <li>
            <Nike />
          </li>
          <li>
            <Burberry />
          </li>
          <li>
            <Cemex />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
        </BusinessLogoList>
        <Fade>
          <IconContainer>
            <StrategicDesign />
          </IconContainer>
        </Fade>
        <H2>{t.intro.subtitle3}</H2>
        <P>{t.intro.p3}</P>
        <Fade>
          <IconContainer>
            <DigitalTransformation />
          </IconContainer>
        </Fade>
        <H2>{t.intro.subtitle4}</H2>
        <P>{t.intro.p4}</P>
      </StyledPinnedSection>
      <TitleSection
        title={t.second_section.title}
        text={t.second_section.p}
        borderTop
      />
      <TitleSection
        title={t.process_section.title}
        text={t.process_section.p}
        borderTop
      />
      <StepsSection>
        {t.process_section.steps.map((step, index) => (
          <StepContainer
            key={"step" + index}
            index={index}
            title={step.title}
            p={step.p}
            li={step.li}
            p2={step.p2}
          />
        ))}
      </StepsSection>
      <TitleSection
        title={t.tools_section.title}
        text={t.tools_section.p}
        borderTop
      />
      <LogoListContainer>
        <LogoList>
          {techIconArray.map((item, index) => {
            let LogoIcon = techIconArray[index];
            return (
              <Fade key={"techlist" + index} triggerOnce>
                <li key={"logo3" + index}>
                  <LogoIcon />
                </li>
              </Fade>
            );
          })}
        </LogoList>
      </LogoListContainer>
      <ContactFooter />
    </PageClipperPadded>
  );
}

const Step = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  padding-bottom: 12%;
  position: relative;
  margin-top: 10%;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(1.05);
        .accentdisco {
          transform: translate(18px, -4px) scale(0.92);
        }
        .accent {
          transform: translateY(-10px) scale(1.02);
        }
        .accentcubo {
          transform: translate(-4px, -9px);
        }
        .accentrock {
          transform: translateY(-10px) scale(1.05);
        }
      }
      p {
        color: ${props => props.theme.colors.foreground};
      }
    }
  }
  h3 {
    font-size: 2.5rem;
    opacity: 1;
    line-height: 125%;
    margin-bottom: 16px;
    font-weight: 200;
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  span {
    color: ${props => darken(0.12, props.theme.colors.accent)};
    font-size: 11.5rem;
    font-weight: 200;
    position: absolute;
    top: 0;
    line-height: 0.55;
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  ul {
    list-style: none;
    margin-bottom: 4%;
    color: ${props => props.theme.colors.foreground_low};
    li {
      list-style: none;
      &:before {
        content: "– ";
        color: ${props => props.theme.colors.accent};
      }
    }
  }
  svg {
    max-width: 100px;
    padding-top: 6%;
    margin: 0 auto 10% auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    * {
      vector-effect: non-scaling-stroke;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.foreground};
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .accent,
    .accentdisco,
    .accentcubo,
    .accentrock {
      stroke: ${props => props.theme.colors.accent};
      will-change: transform;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 550px) {
    padding: 8%;
    svg {
      max-width: 70px;
    }
  }
`;

const StepsSection = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  ${Step} {
    :nth-of-type(1),
    :nth-of-type(3),
    :nth-of-type(5) {
      grid-column: 3 / span 4;
    }

    :nth-of-type(2),
    :nth-of-type(4),
    :nth-of-type(6) {
      grid-column: 7 / span 4;
    }

    :nth-of-type(1),
    :nth-of-type(2) {
      margin-top: 0;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    ${Step} {
      :nth-of-type(3) {
        border-top: 0;
        border-right: ${props =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
      :nth-of-type(4) {
        border-bottom: ${props =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
    }
  }
`;

const LogoListContainer = styled.ul`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
`;

const LogoList = styled.ul`
  grid-column: 3 / span 7;
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 2.2rem;
  grid-row-gap: 25%;
  margin-bottom: 18%;
`;

const BusinessLogoList = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-gap: 2.2rem;
`;

const LogoFull = styled(Logo)`
  width: 100%;
  height: auto;
  max-width: 380px;
  padding-bottom: 3%;
`;

const StyledPinnedSection = styled(PinnedSection)`
  h2 {
    font-size: 2.5rem;
    opacity: 1;
    line-height: 125%;
    margin-bottom: 16px;
    margin-top: 3%;
    font-weight: 200;
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  h3 {
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 100;
    margin: 4% 0 3.5%;
  }
`;

const StyledList = styled.ul`
  list-style: none;
  color: ${props => props.theme.colors.foreground_low};
  li {
    &:before {
      content: "– ";
      color: ${props => props.theme.colors.accent};
    }
  }
`;

const IconContainer = styled.div`
  svg {
    max-width: 100px;
    margin-top: 10%;
    display: block;
    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    * {
      vector-effect: non-scaling-stroke;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.foreground};
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .accent,
    .accentdisco,
    .accentcubo,
    .accentrock {
      stroke: ${props => props.theme.colors.accent};
      will-change: transform;
    }
  }
`;

const PageClipperPadded = styled(PageClipper)`
  @media (max-width: 1300px) {
    padding-top: 5%;
  }
  @media (max-width: 700px) {
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 15%;
  }
`;
