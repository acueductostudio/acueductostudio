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
      setHeight(ref.current.offsetHeight);
      console.log(ref.current.offsetHeight);
    };

    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad);
    }
  }, [toggled]);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <Question hide={!toggled} height={height} onClick={handleToggle}>
      <Fade triggerOnce>
        <div>
          <span>0{i + 1}</span>
          <p>{q.title}</p>
        </div>
        <p ref={ref}>{q.p}</p>
        <p style={{ display: "none" }}> {height}</p>
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

const Question = styled.li`
  border-bottom: 0.18rem solid
    ${(props) => props.theme.colors.foreground_lowest};
  margin-bottom: 3rem;
  ::marker {
    content: "";
  }
  span {
    color: ${(props) => props.theme.colors.accent};
  }
  & > :nth-child(1) {
    p {
      color: ${(props) => props.theme.colors.foreground};
      line-height: 115%;
    }
    span {
      font-size: 1.6rem;
      letter-spacing: 0.05rem;
      margin-top: 0.5rem;
    }
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    div {
      display: flex;
      cursor: pointer;
      &::after {
        content: "+";
        display: block;
        font-size: 3rem;
        color: ${(props) => props.theme.colors.accent};
        margin-top: -10px;
      }
      font-size: 2.3rem;
      gap: 2.4rem;
      p {
        margin: 0;
      }
    }
  }
  & > :nth-last-child(2) {
    p {
      color: ${(p) => p.theme.colors.foreground_low};
      cursor: auto;
      transition: opacity 0.3s ease 0.4s, transform 0.4s ease 0.4s,
        height 0.3s linear;
      transform: ${(p) => (p.hide ? "scale(0.8)" : "scale(1)")};
      transform-origin: 0% 0%;
      opacity: ${(p) => (p.hide ? 0 : 1)};
      height: ${(p) => (p.hide ? "0px" : `${p.height}px`)};
    }
  }
`;

const FAQSection = styled.div`
  background-color: ${(props) => props.theme.colors.background};
`;
