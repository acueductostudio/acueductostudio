import styled from "styled-components";
import TitleSection from "../components/TitleSection";
import createMarkup from "../helpers/createMarkup";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";

const StepContainer = props => {
  const Icon = dynamic(
    import(`../static/assets/img/layout/steps/${props.icon}`),
    {
      loading: () => <p>Loading icon...</p>
    }
  );
  return (
    <Step>
      <Fade>
        <span>0{props.index}</span>
        <Icon />
        <h3>{props.title}</h3>
        <p dangerouslySetInnerHTML={createMarkup(props.p)} />
      </Fade>
    </Step>
  );
};

const Process = props => {
  let p = props.p;
  var steps = p.steps.map(function(step, index) {
    return (
      <StepContainer
        key={"step" + index}
        icon={step.icon}
        index={index + 1}
        title={step.title}
        p={step.p}
      />
    );
  });
  return (
    <ProcessSection>
      <TitleSection title={p.title} text={p.p} borderTop />
      <StepsSection>{steps}</StepsSection>
    </ProcessSection>
  );
};

export default Process;

const Step = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  border: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-left: 0;
  h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 200;
  }
  span {
    color: ${props => props.theme.colors.accent};
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.foreground_low};
  }
  svg {
    max-width: 100px;
    margin: 22% auto;
    display: block;
    * {
      vector-effect: non-scaling-stroke;
      stroke-width: ${props => props.theme.stroke};
      stroke: ${props => props.theme.colors.foreground};
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
    }
    .accent {
      stroke: ${props => props.theme.colors.accent};
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
    p {
      /* font-size: 1.2rem; */
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

const ProcessSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
