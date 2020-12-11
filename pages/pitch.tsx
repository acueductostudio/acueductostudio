import { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import styled, { createGlobalStyle } from "styled-components";
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
  Discover,
  Envision,
  BuildStory,
  Craft,
  Launch,
  Review,
  Strategy,
  Apps,
} from "components/shared/Icons";

const LogoLists = dynamic(import("components/pitch/LogoLists"), {
  ssr: false,
});

const stepsIconArray = [Discover, Envision, BuildStory, Craft, Launch, Review];

export default function Pitch({ locale, setTitle, pt }) {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "pitch.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    setloadAssets(true);
  }, [locale]);

  return (
    <PageClipper>
      <Head
        {...t.head}
        es_canonical={"https://acueducto.studio/pitch"}
        en_canonical={"https://acueducto.studio/en/pitch"}
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
        <IconContainer>
          <Strategy />
        </IconContainer>
        <H2>{t.intro.subtitle3}</H2>
        <P>{t.intro.p3}</P>
        <IconContainer>
          <Apps />
        </IconContainer>
        <H2>{t.intro.subtitle4}</H2>
        <P>{t.intro.p4}</P>
        <H2>{t.intro.subtitle5}</H2>
        <GraphicContainer>
          <span>{t.intro.img_business}</span>
          {loadAssets && (
            <img src="/assets/img/layout/design-driven.svg" alt={t.intro.alt} />
          )}
          <span>S&amp;P500</span>
        </GraphicContainer>
        <P>{t.intro.p5}</P>
      </PinnedSection>
      <TitleSection {...t.second_section} borderTop />
      <Products {...t.products_section} longer />
      <TitleSection
        title={t.process_section.title}
        p={t.process_section.p}
        borderTop
      />
      <StepsSection>
        {t.process_section.steps.map((step, index) => {
          const StepIcon = stepsIconArray[index];
          return (
            <StepBordered key={"step" + index}>
              <Step>
                <Fade triggerOnce>
                  <span>0{index + 1}</span>
                  <StepIcon />
                  <h3>{step.title}</h3>
                  <p dangerouslySetInnerHTML={createMarkup(step.p)} />
                  <ul>
                    {step.li.map((item, index) => (
                      <li key={"li1" + index}>{item}</li>
                    ))}
                  </ul>
                </Fade>
              </Step>
            </StepBordered>
          );
        })}
      </StepsSection>
      <TitleSection
        title={t.tools_section.title}
        p={t.tools_section.p}
        borderTop
      />
      {loadAssets && <LogoLists t={t} />}
      <ContactFooter />
    </PageClipper>
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

const GraphicContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  margin-top: -20px;
  img {
    width: 100%;
  }
  span {
    display: block;
    position: absolute;
    background-color: white;
    border-radius: 100px;
    color: black;
    font-size: 0.8em;
    padding: 9px 19px 13px 18px;
    &:first-of-type {
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.foreground};
      top: 60px;
      left: 28%;
    }
    &:last-of-type {
      background-color: ${(p) => p.theme.colors.foreground};
      left: 60%;
      bottom: -20px;
    }
  }
  @media (max-width: 1300px) {
    span {
      &:first-of-type {
        left: 15%;
        top: 30px;
      }
      &:last-of-type {
        left: 50%;
        bottom: -10px;
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 20px;
    span {
      padding: 6px 16px 10px 15px;
    }
  }
  @media (max-width: 500px) {
    span {
      &:first-of-type {
        right: 70px;
        left: unset;
        top: 30px;
      }
      &:last-of-type {
        left: 50%;
        bottom: -10px;
      }
    }
  }
`;

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

const StyledList = styled.ul`
  list-style: none;
  color: ${(props) => props.theme.colors.foreground_low};
  margin-bottom: 6%;
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
