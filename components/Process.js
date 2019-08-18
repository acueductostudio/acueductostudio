import styled from "styled-components";
import TitleSection from "../components/TitleSection";
import createMarkup from "../helpers/createMarkup";
import Envision from "../static/assets/img/layout/steps/envision.svg";
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
        <Icon/>
        <h4>{props.title}</h4>
        <p dangerouslySetInnerHTML={createMarkup(props.p)} />
      </Fade>
    </Step>
  );
};

const Process = props => {
  let t = props.t.services;
  var steps = t.steps.map(function(step, index) {
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
    <ProcessWrapper>
      <TitleSection title={t.title} text={t.p} borderTop />
      <StepsSection>{steps}</StepsSection>
    </ProcessWrapper>
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
  h4 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
  span {
    color: ${props => props.theme.colors.accent};
    font-size: 2.5rem;
  }
  p {
    font-size: 1.5rem;
    color: ${props => props.theme.colors.foreground_low};
  }
  svg {
    max-width: 100px;
    margin: 15% auto;
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
`;

const ProcessWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  min-height: 90vh;
`;
