import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import styled, { createGlobalStyle } from "styled-components";
import Tooltip from "react-tooltip-lite";
import { Fade } from "react-awesome-reveal";
import TitleSection from "components/shared/TitleSection";
import Products from "components/shared/Products";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import { P, H2, H3 } from "components/shared/Dangerously";
import createMarkup from "utils/createMarkup";
import PageClipper from "components/layout/PageClipper";
import ContactFooter from "components/shared/footers/ContactFooter";
import Logo from "public/assets/img/layout/logo.svg";

import {
  DigitalTransformation,
  StrategicDesign,
  Discover,
  Envision,
  BuildStory,
  Craft,
  Launch,
  Review,
} from "components/shared/Icons";

import {
  Tesla,
  Nike,
  Burberry,
  Cemex,
  Hasbro,
  Starbucks,
  NodeLogo,
  ReactLogo,
  NextLogo,
  ReactNativeLogo,
  Electron,
  Angular,
  PWA,
  Shopify,
  StyledLogo,
  Contentful,
  Css3,
  Html5,
  AWSLogo,
  TSLogo,
  WebLogo,
  Ios,
  Macos,
  Android,
  Windows,
  Linux,
  Ads,
  Analytics,
  Adsense,
  Hootsuit,
  FBM,
  Ig,
  Fb,
  Tw,
  LinkedIn,
  Snapchat,
  TikTok,
  WhatsAppBusiness,
  Tableau,
  PowerBi,
  Notion,
  Figma,
  Slack,
  Gsuite,
  Todoist,
  Git,
} from "components/shared/Logos";

const roleModelArray = [Tesla, Nike, Burberry, Cemex, Starbucks, Hasbro];

const stepIconArray = [Discover, Envision, BuildStory, Craft, Launch, Review];

const appsLogoArray = [
  { p: "Node Js", i: NodeLogo },
  { p: "React", i: ReactLogo },
  { p: "Next Js", i: NextLogo },
  { p: "React Native", i: ReactNativeLogo },
  { p: "Electron", i: Electron },
  { p: "Angular", i: Angular },
  { p: "Progressive Web Apps", i: PWA },
  { p: "Shopify", i: Shopify },
  { p: "Styled Components", i: StyledLogo },
  { p: "Contentful", i: Contentful },
  { p: "CSS 3", i: Css3 },
  { p: "HTML 5", i: Html5 },
  { p: "Amazon Web Services", i: AWSLogo },
  { p: "Typescript", i: TSLogo },
];

const marketingLogoArray = [
  { p: "Google Ads", i: Ads },
  { p: "Google Analytics", i: Analytics },
  { p: "Google AdSense", i: Adsense },
  { p: "Hootsuit", i: Hootsuit },
  { p: "Facebook Business Manager", i: FBM },
];

const contentLogoArray = [
  { p: "Instagram", i: Ig },
  { p: "Facebook", i: Fb },
  { p: "Twitter", i: Tw },
  { p: "LinkedIn", i: LinkedIn },
  { p: "Snapchat", i: Snapchat },
  { p: "TikTok", i: TikTok },
  { p: "WhatsApp for Business", i: WhatsAppBusiness },
];

const platformLogoArray = [
  { p: "Web", i: WebLogo },
  { p: "iOS", i: Ios },
  { p: "MacOS", i: Macos },
  { p: "Android", i: Android },
  { p: "Windows", i: Windows },
  { p: "Linux", i: Linux },
];
const biLogoArray = [
  { p: "Tableau", i: Tableau },
  { p: "Power BI", i: PowerBi },
];

const collaborationLogoArray = [
  { p: "Notion", i: Notion },
  { p: "Figma", i: Figma },
  { p: "Slack", i: Slack },
  { p: "G Suite", i: Gsuite },
  { p: "Todoist", i: Todoist },
  { p: "Git", i: Git },
];

const RenderLogoList = ({ array }) => (
  <LogoList>
    {array.map((i, index) => {
      let LogoIcon = array[index].i;
      return (
        <li key={array[index].p + index}>
          <Tooltip
            direction="bottom"
            tagName="span"
            hoverDelay={300}
            content={array[index].p}
            eventOff="onScroll"
          >
            <LogoIcon />
          </Tooltip>
        </li>
      );
    })}
  </LogoList>
);

const StepContainer = ({ index, title, p, li, p2 }) => {
  const StepIcon = stepIconArray[index];
  return (
    <StepBordered>
      <Step>
        <Fade triggerOnce>
          <span>0{index + 1}</span>
          <StepIcon />
          <h3>{title}</h3>
          <p dangerouslySetInnerHTML={createMarkup(p)} />
          <ul>
            {li.map((item, index) => (
              <li key={"li1" + index}>{item}</li>
            ))}
          </ul>
          <br />
          <p>{p2}</p>
        </Fade>
      </Step>
    </StepBordered>
  );
};

export default function Pitch({ locale, setTitle, pt }) {
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "pitch.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.headerTitle);
      },
    });
  }, [locale]);

  return (
    <PageClipperPadded>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/pitch"}
        en_canonical={"https://acueducto.studio/en/pitch"}
        structured={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "@id": "https://acueducto.studio",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://acueducto.studio",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pitch",
              item: "https://acueducto.studio/pitch",
            },
          ],
        }}
      />
      <StyledHeadings />
      <PinnedSection title={t.intro.title}>
        <AcueductoLogo />
        <P>{t.intro.p0}</P>
        <H3>{t.intro.subtitle1}</H3>
        <StyledList>
          {t.intro.li1.map((item, index) => (
            <li key={"li1nside" + index}>{item}</li>
          ))}
        </StyledList>
        <P>{t.intro.p1}</P>
        <H3>{t.intro.subtitle2}</H3>
        <BusinessLogoList>
          {roleModelArray.map((item, index) => {
            let LogoIcon = roleModelArray[index];
            return (
              <li key={"rolemodel" + index}>
                <LogoIcon />
              </li>
            );
          })}
        </BusinessLogoList>
        <IconContainer>
          <StrategicDesign />
        </IconContainer>
        <H2>{t.intro.subtitle3}</H2>
        <P>{t.intro.p3}</P>
        <IconContainer>
          <DigitalTransformation />
        </IconContainer>
        <H2>{t.intro.subtitle4}</H2>
        <P>{t.intro.p4}</P>
      </PinnedSection>
      <TitleSection {...t.second_section} borderTop />
      <Products {...t.products_section} longer />
      <TitleSection
        title={t.process_section.title}
        p={t.process_section.p}
        borderTop
      />
      <StepsSection>
        {t.process_section.steps.map((step, index) => (
          <StepContainer key={"step" + index} index={index} {...step} />
        ))}
      </StepsSection>
      <TitleSection
        title={t.tools_section.title}
        p={t.tools_section.p}
        borderTop
      />
      <LogoListContainer>
        <Fade triggerOnce>
          <H3>{t.tools_section.apps}</H3>
          <RenderLogoList array={appsLogoArray} />

          <H3>{t.tools_section.platforms}</H3>
          <RenderLogoList array={platformLogoArray} />

          <H3>{t.tools_section.marketing}</H3>
          <RenderLogoList array={marketingLogoArray} />

          <H3>{t.tools_section.content}</H3>
          <RenderLogoList array={contentLogoArray} />

          <H3>{t.tools_section.bi}</H3>
          <RenderLogoList array={biLogoArray} />

          <H3>{t.tools_section.collaboration}</H3>
          <RenderLogoList array={collaborationLogoArray} />
        </Fade>
      </LogoListContainer>
      <ContactFooter />
    </PageClipperPadded>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "pitch.json" });
  return {
    props: {
      pt,
    },
  };
};

const AcueductoLogo = styled(Logo)`
  width: 65%;
  max-width: 390px;
  height: auto;
  margin-bottom: 3%;
`;

const StyledHeadings = createGlobalStyle`
  .react-tooltip-lite {
    background: ${(props) => props.theme.colors.accent};
    color: ${(props) => props.theme.colors.foreground};
    border-radius: 5px;
    transition: opacity 0.3s 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    box-shadow: 0px 3px 7px rgba(0,0,0,0.3);
  }
  .react-tooltip-lite-arrow {
    border-color: ${(props) => props.theme.colors.accent};
  }
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
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.9rem;
    }
    h2{
      font-size:2.2rem;
    }
  }
  @media (max-width: 1050px) {
    h3 {
      font-size: 2.5rem;
    }
    h2 {
      font-size: 2rem;
    }
  }
`;

const StepBordered = styled.div`
  width: 100%;
  padding: 13% 15%;
  border: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-left: 0;
  border-bottom: 0;
  display: flex;
  @media (max-width: 1050px) {
    padding: 10%;
  }
  @media (max-width: 550px) {
    padding: 8%;
  }
`;

const Step = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 360px;
  width: 100%;
  position: relative;
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
        color: ${(props) => props.theme.colors.foreground};
      }
    }
  }
  h3 {
    font-size: 2.5rem;
    line-height: 125%;
    margin-bottom: 16px;
    font-weight: 200;
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  span {
    color: ${(props) => props.theme.colors.accent_smalltext};
    font-size: 1.5rem;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  ul {
    list-style: none;
    color: ${(props) => props.theme.colors.foreground_low};
    li {
      list-style: none;
      &:before {
        content: "– ";
        color: ${(props) => props.theme.colors.accent};
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
      stroke-width: ${(props) => props.theme.stroke};
      stroke: ${(props) => props.theme.colors.foreground};
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .accent,
    .accentdisco,
    .accentcubo,
    .accentrock {
      stroke: ${(props) => props.theme.colors.accent};
      will-change: transform;
    }
  }
  @media (max-width: 1000px) {
    p,
    li {
      font-size: 1.4rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 550px) {
    svg {
      max-width: 70px;
    }
  }
`;

const StepsSection = styled.div`
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  display: grid;
  ${StepBordered} {
    :nth-of-type(1),
    :nth-of-type(3),
    :nth-of-type(5) {
      justify-content: flex-end;
    }
    :nth-of-type(2),
    :nth-of-type(4),
    :nth-of-type(6) {
      border-right: 0;
    }
  }
`;

const LogoListContainer = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  & > div {
    grid-column: 3 / span 7;
  }
  h3 {
    font-size: 2.5rem;
    margin-top: 0;
    margin-bottom: 1%;
  }
  @media (max-width: 1300px) {
    & > div {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 950px) {
    font-size: 2rem;
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.3rem;
    }
  }
  @media (max-width: 600px) {
    & > div {
      grid-column: 1 / span 12;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 0;
    }
  }
`;

const LogoList = styled.ul`
  grid-column: 3 / span 7;
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 2.2rem;
  margin-bottom: 2%;
  li {
    margin-bottom: 25%;
    svg {
      max-width: 95px;
      transition: filter 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
      &:hover {
        filter: brightness(1.5);
      }
    }
  }
  @media (max-width: 1300px) {
    grid-column: 2 / span 8;
  }
  @media (max-width: 1050px) {
    grid-column: 2 / span 9;
  }
  @media (max-width: 900px) {
    grid-column: 2 / span 10;
    grid-template-columns: repeat(6, 1fr);
  }
  @media (max-width: 750px) {
    grid-template-columns: repeat(5, 1fr);
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
    grid-template-columns: repeat(4, 1fr);
    li {
      margin-bottom: 5%;
    }
  }
`;

const BusinessLogoList = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-gap: 2.2rem;
`;

const StyledList = styled.ul`
  list-style: none;
  color: ${(props) => props.theme.colors.foreground_low};
  li {
    &:before {
      content: "– ";
      color: ${(props) => props.theme.colors.accent};
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
      stroke-width: ${(props) => props.theme.stroke};
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    .accent,
    .accentdisco,
    .accentcubo,
    .accentrock {
      stroke: ${(props) => props.theme.colors.accent};
      will-change: transform;
    }
  }
  @media (max-width: 1300px) {
    padding-top: 5%;
  }
  @media (max-width: 600px) {
    svg {
      max-width: 70px;
      margin-top: 5%;
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
