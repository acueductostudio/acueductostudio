import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";

const QuestionWrapper = ({ q, i }) => {
  const [toggled, setToggled] = useState(false);
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const onPageLoad = () => {
      let style = getComputedStyle(ref.current);
      let marginTop = parseInt(style.marginTop);
      let marginBottom = parseInt(style.marginBottom);

      //to add the extra margin on mobile
      if (window.innerWidth < 760) {
        setHeight(ref.current.offsetHeight + marginTop + marginBottom + 20);

      } else {
        setHeight(ref.current.offsetHeight + marginTop + marginBottom);
      }
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, []);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Question hide={!toggled} height={height} onClick={handleToggle}>
      <Fade triggerOnce>
        <div>
          <div>
            <span>0{i + 1}</span>
            <p>{q.title}</p>
          </div>
          <Cross open={toggled} />
        </div>
        <div>
          <p ref={ref}>{q.p}</p>
        </div>
      </Fade>
    </Question>
  );
};

const FAQ = ({ t }) => {
  return (
    <FAQSection
      as={PinnedSection}
      title={t.title}
      notSticky
      borderTop
      disableFade
    >
      <>
        <ol>
          {t.questions.map(function (q, i) {
            return <QuestionWrapper key={"question" + i} q={q} i={i} />;
          })}
        </ol>
      </>
    </FAQSection>
  );
};

export default React.memo(FAQ);

const Cross = styled.div`
  transition: 250ms ease all;
  transform-origin: center;
  width: 25px;
  height: 25px;
  position: relative;
  &::after,
  &::before {
    content: " ";
    display: block;
    position: absolute;
    width: 2px;
    height: 25px;
    border-radius: 3px;
    background-color: ${(props) => props.theme.colors.accent};
    transition: 250ms ease-out all;
    left: 12.5px;
  }
  &::before {
    transform: rotate(90deg);
  }
  &::after {
    opacity: ${(p) => (p.open ? 0 : 1)};
  }
`;
const Question = styled.li`
  border-bottom: 0.18rem solid
    ${(props) => props.theme.colors.foreground_lowest};
  margin-bottom: 3rem;
  padding-bottom: 0rem;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${Cross} {
        transform: ${(p) => (p.hide ? "rotate(-90deg)" : "rotate(0deg)")};
      }
    }
  }
  &:focus,
  &:active {
    ${Cross} {
      transform: ${(p) => (p.hide ? "rotate(-90deg)" : "rotate(0deg)")};
    }
  }
  ::marker {
    content: "";
  }
  span {
    color: ${(props) => props.theme.colors.accent};
  }
  & > :nth-child(1) {
    font-size: 1.5rem;
    margin-bottom: 3rem;

    p {
      color: ${(props) => props.theme.colors.foreground};
      line-height: 120%;
    }
    span {
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
      margin-top: 0.5rem;
    }
    div {
      display: flex;
      cursor: pointer;
      justify-content: space-between;
      font-size: 2.2rem;
      gap: 2.4rem;
      p {
        margin: 0;
      }
    }
  }
  & > :nth-last-child(1) {
    div {
      transition: height 250ms ease-out;
      height: ${(p) => (p.hide ? "0px" : `${p.height}px`)};
      overflow: hidden;
    }
    p {
      color: ${(p) => p.theme.colors.foreground_low};
      cursor: auto;
      transition: opacity 250ms ease;
      opacity: ${(p) => (p.hide ? 0 : 1)};
      height: auto;
      margin: 0 0 5% 4.5rem;
    }
  }
  @media (max-width: 1250px) {
    & > :nth-child(1) {
      span {
        font-size: 1.4rem;
        margin-top: 0.2rem;
      }
      div {
        font-size: 2rem;
      }
    }
    & > :nth-last-child(1) {
      p {
        margin-left: 4rem;
      }
    }
  }
  @media (max-width: 600px) {
    & > :nth-child(1) {
      div div {
        flex-direction: column;
        gap: 0rem;
      }
    }
    & > :nth-last-child(1) {
      p {
        margin-left: 0rem;
      }
    }
    ${Cross} {
      margin-top: 22px;
      margin-right: 10px;
    }
  }
`;

const FAQSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 600px) {
    grid-gap: 4rem 1rem;
  }
`;
