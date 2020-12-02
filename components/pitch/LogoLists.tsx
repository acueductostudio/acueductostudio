import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Tooltip from "react-tooltip-lite";
import { P, H2, H3 } from "components/shared/Dangerously";
import {
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

const LogoLists = ({t}) => (
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
);

export default LogoLists;

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
