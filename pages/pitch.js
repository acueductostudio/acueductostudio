import Head from "components/Head";
import styled from "styled-components";
import { useEffect } from "react";
import TitleSection from "components/shared/TitleSection";
import PinnedSection from "components/shared/PinnedSection";
import { P } from "components/shared/Dangerously";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import DigitalTransformation from "static/assets/img/layout/icons/digitaltransformation.svg";
import StrategicDesign from "static/assets/img/layout/icons/strategicdesign.svg";
import Logo from "static/assets/img/layout/logo.svg";
import Tesla from "static/assets/img/layout/logos/tesla.svg";
import Nike from "static/assets/img/layout/logos/nike.svg";
import Burberry from "static/assets/img/layout/logos/burberry.svg";
import Cemex from "static/assets/img/layout/logos/cemex.svg";
import Hasbro from "static/assets/img/layout/logos/hasbro.svg";
import Starbucks from "static/assets/img/layout/logos/starbucks.svg";
import NodeLogo from "static/assets/img/layout/logos/node.svg";
import ReactLogo from "static/assets/img/layout/logos/react.svg";

export default function Work(props) {
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
            <li key={"li1" + index}>{item}</li>
          ))}
        </StyledList>
        <P>{t.intro.p1}</P>
        <h3>{t.intro.subtitle2}</h3>
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
        <IconContainer>
          <StrategicDesign />
        </IconContainer>
        <h2>{t.intro.subtitle3}</h2>
        <P>{t.intro.p3}</P>
        <IconContainer>
          <DigitalTransformation />
        </IconContainer>
        <h2>{t.intro.subtitle4}</h2>
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
      <TitleSection
        title={t.tools_section.title}
        text={t.tools_section.p}
        borderTop
      />
      <LogoListContainer>
        <LogoList>
          <li>
            <NodeLogo />
          </li>
          <li>
            <ReactLogo />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
        </LogoList>
      </LogoListContainer>
      <ContactFooter />
    </PageClipperPadded>
  );
}

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
  grid-gap: 2.2rem;
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
