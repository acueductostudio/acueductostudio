import styled from "styled-components";
import Fade from "react-reveal/Fade";
import createMarkup from "utils/createMarkup";

function Steps({ steps, children, iconArray }) {
  const StepContainer = ({ index, title, p, showIndex }) => {
    const StepIcon = iconArray[index];
    return (
      <StepBordered>
        <Step>
          <Fade>
            {/* {showIndex && `<span>0${index + 1}</span>`} */}
            <StepIcon />
            <h3>{title}</h3>
            <p dangerouslySetInnerHTML={createMarkup(p)} />
          </Fade>
        </Step>
      </StepBordered>
    );
  };
  return (
    <StepsSection>
      {steps.map((step, index) => (
        <StepContainer key={"step" + index} index={index} {...step} />
      ))}
      <StepBordered>{children}</StepBordered>
    </StepsSection>
  );
}

export default Steps;

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
    b {
      color: ${(p) => p.theme.colors.foreground};
      font-weight: 200;
    }
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
