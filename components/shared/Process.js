import React from "react";
import { useLocaleContext } from "utils/LangContext";
import styled from "styled-components";
import TitleSection from "components/shared/TitleSection";
import { Fade } from "react-awesome-reveal";
import createMarkup from "utils/createMarkup";
import {
  Discover,
  Envision,
  BuildStory,
  Craft,
  Launch,
  Review,
} from "components/shared/Icons";

const iconArray = [Discover, Envision, BuildStory, Craft, Launch, Review];

const StepContainer = ({ index, title, p }) => {
  const Icon = iconArray[index];
  return (
    <Step>
      <Fade triggerOnce>
        <span>0{index + 1}</span>
        <Icon />
        <h3>{title}</h3>
        <p dangerouslySetInnerHTML={createMarkup(p)} />
      </Fade>
    </Step>
  );
};

const Process = () => {
  const context = useLocaleContext();
  const { title, p, steps } = context.home_page.process;
  return (
    <ProcessSection>
      <TitleSection title={title} p={p} borderTop />
      <StepsSection>
        {steps.map((step, index) => (
          <StepContainer key={"step" + index} index={index} {...step} />
        ))}
      </StepsSection>
    </ProcessSection>
  );
};

export default React.memo(Process);

const Step = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  border: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-left: 0;
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
    opacity: 1;
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
    font-size: 1.5rem;
    color: ${(props) => props.theme.colors.foreground_low};
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  svg {
    max-width: 100px;
    margin: 22% auto;
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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  ${Step} {
    :nth-of-type(4),
    :nth-of-type(5),
    :nth-of-type(6) {
      border-top: 0;
      border-bottom: 0;
    }
    :nth-of-type(3),
    :nth-of-type(6) {
      border-right: 0;
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    ${Step} {
      :nth-of-type(3) {
        border-top: 0;
        border-right: ${(props) =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
      :nth-of-type(4) {
        border-bottom: ${(props) =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
    }
  }
`;

const ProcessSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;
