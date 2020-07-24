import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import Arrow from "components/shared/Arrow";
import { createContact } from "utils/sendinBlue.ts";
import Results from "./Results";
import InputField from "components/shared/InputField";

const NUMBER_OF_QS = 15;

const Diagnostico = ({ diagnose_section, results_section }) => {
  let {
    questions,
    collection_form,
    progressLine,
    analyzing_results,
  } = diagnose_section;

  const [qIndex, setQIndex] = useState(0);
  const [aIndex, setAIndex] = useState(0);
  const [testStatus, setTestStatus] = useState("");
  const [results, setResults] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const analyzeResults = () => {
    return new Promise((resolve) => setTimeout(resolve, 1500)); //1500
  };

  const onSubmit = (data) => {
    setTestStatus("loading");
    //Clean TestResults object in sendinBlue
    let testResults = { ...data };
    delete testResults.email;
    delete testResults.firstName;
    delete testResults.lastName;

    //Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact(data.firstName, data.lastName, data.email, [3], true, {
      TESTRESULTS: JSON.stringify(testResults),
    }).then(
      function (response) {
        console.log(
          "API called successfully. Returned data: " + JSON.stringify(response)
        );
      },
      function (error) {
        console.error("API failed, returned: " + error);
      }
    );
    console.log(data);

    // Get the averages of the three areas
    let estrategia =
      (parseFloat(data.Q0) +
        parseFloat(data.Q1) +
        parseFloat(data.Q2) +
        parseFloat(data.Q3) +
        parseFloat(data.Q4)) /
      5;
    let cultura =
      (parseFloat(data.Q5) +
        parseFloat(data.Q6) +
        parseFloat(data.Q7) +
        parseFloat(data.Q8)) /
      4;
    let competencia =
      (parseFloat(data.Q9) +
        parseFloat(data.Q10) +
        parseFloat(data.Q11) +
        parseFloat(data.Q12) +
        parseFloat(data.Q13) +
        parseFloat(data.Q14)) /
      6;
    setResults([estrategia, cultura, competencia, data.firstName]);
    console.log([estrategia, cultura, competencia]);

    analyzeResults().then(() => setTestStatus("done"));
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      qIndex < NUMBER_OF_QS && e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      if (qIndex < NUMBER_OF_QS) {
        prevIndex();
      }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (qIndex < NUMBER_OF_QS) {
        nextIndex();
      }
    }
  };

  function handleClick() {
    setQIndex(qIndex < NUMBER_OF_QS && qIndex + 1);
    setAIndex(aIndex < NUMBER_OF_QS ? aIndex + 1 : aIndex);
  }

  function prevIndex() {
    qIndex !== 0 && setQIndex(qIndex - 1);
  }
  function nextIndex() {
    aIndex > qIndex && qIndex < NUMBER_OF_QS && setQIndex(qIndex + 1);
  }

  return (
    <QuestionSection>
      {testStatus === "" && (
        <QuestionGrid>
          <form onSubmit={handleSubmit(onSubmit)} onKeyDown={handleKeyDown}>
            {questions.map((question, index) => (
              <Question
                key={"question" + index}
                selected={qIndex === index}
                deselected={qIndex === index - 1}
              >
                <Info>
                  <span>
                    {index + 1 < 10 ? `0${index + 1}` : index}/
                    {NUMBER_OF_QS > 10 ? NUMBER_OF_QS : `0${NUMBER_OF_QS}`}
                  </span>
                  <h4>{question.question}</h4>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={10}
                      ref={register}
                      onClick={handleClick}
                    />
                    <span />
                    {question.a1}
                  </label>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={5}
                      ref={register}
                      onClick={handleClick}
                    />
                    <span />
                    {question.a2}
                  </label>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={0}
                      ref={register}
                      onClick={handleClick}
                    />
                    <span />
                    {question.a3}
                  </label>
                </Info>
              </Question>
            ))}
            <Question
              selected={qIndex === NUMBER_OF_QS}
              deselected={qIndex === NUMBER_OF_QS - 1}
            >
              <h5>{collection_form.title}</h5>
              <InputGrid>
                <InputField>
                  <label>{collection_form.firstName.label}</label>
                  <input
                    name="firstName"
                    type="text"
                    placeholder={collection_form.firstName.label}
                    ref={register({ required: true })}
                  />
                  {errors.firstName && (
                    <span>{collection_form.firstName.errorMissing}</span>
                  )}
                </InputField>

                <InputField>
                  <label>{collection_form.lastName.label}</label>
                  <input
                    name="lastName"
                    type="text"
                    placeholder={collection_form.lastName.label}
                    ref={register({ required: true })}
                  />
                  {errors.lastName && (
                    <span>{collection_form.lastName.errorMissing}</span>
                  )}
                </InputField>

                <InputField>
                  <label>email</label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    ref={register({
                      required: {
                        value: true,
                        message: collection_form.email.errorMissing,
                      },
                      pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                        message: collection_form.email.errorInvalid,
                      },
                    })}
                  />
                  <span>{errors?.email?.message}</span>
                </InputField>
                <InputField>
                  <input type="submit" value={collection_form.submit} />
                </InputField>
              </InputGrid>
            </Question>
          </form>
          <ArrowContainer>
            <Arrowx reveal={qIndex > 0} onClick={prevIndex} left>
              <Arrow reverse />
            </Arrowx>
            <Arrowx reveal={aIndex > qIndex} onClick={nextIndex} right>
              <Arrow />
            </Arrowx>
          </ArrowContainer>
          <LineContainer percentage={`${(qIndex * 100) / NUMBER_OF_QS}%`}>
            <Tag show={qIndex <= 4}>{progressLine.strategy}</Tag>
            <Tag show={qIndex > 4 && qIndex <= 8}>{progressLine.culture}</Tag>
            <Tag show={qIndex > 8 && qIndex < NUMBER_OF_QS}>
              {progressLine.competition}
            </Tag>
          </LineContainer>
        </QuestionGrid>
      )}
      {testStatus === "loading" && (
        <Fade>
          <Loading>
            <p>{analyzing_results}...</p>
          </Loading>
        </Fade>
      )}
      {testStatus === "done" && (
        <Results
          results={results}
          setTestStatus={setTestStatus}
          results_section={results_section}
        />
      )}
    </QuestionSection>
  );
};

export default React.memo(Diagnostico);

const fadeIn = keyframes`
  0% {
    width: 5%;
  }
  100% {
    width: 70%;
  }
`;

const Loading = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 5%;
  flex-direction: column;
  min-height: 40vh;
  &:after {
    display: flex;
    margin-top: 20px;
    height: 4px;
    background-color: ${(p) => p.theme.colors.accent};
    content: " ";
    width: 70%;
  }
  &:before {
    content: " ";
    margin-top: 22px;
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 4px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;

const Tag = styled.span`
  opacity: ${(p) => (p.show ? 1 : 0)};
  font-weight: 300;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.accent};
  letter-spacing: 4px;
  margin-top: 15px;
  font-size: 1.5rem;
  user-select: none;
  transition: 0.3s ease opacity;
  @media (max-width: 600px) {
    position: absolute;
    text-align: center;
    width: 100%;
  }
`;

const LineContainer = styled.div`
  grid-column: 4 / span 8;
  max-width: 800px;
  width: 100%;
  grid-row: 3;
  position: relative;
  display: flex;
  justify-content: space-between;
  &::before {
    height: 2px;
    content: " ";
    display: block;
    width: 100%;
    top: 0;
    position: absolute;
    background-color: ${(p) => p.theme.colors.foreground};
  }
  &::after {
    height: 2px;
    content: " ";
    display: block;
    width: ${(p) => p.percentage};
    top: 0;
    left: 0;
    position: absolute;
    background-color: ${(p) => p.theme.colors.accent};
    z-index: 2;
    transition: 0.3s 0.3s ease width;
  }
  @media (max-width: 1100px) {
    grid-column-start: 3;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 4 / span 8;
  max-width: 800px;
  grid-row: 2;
  z-index: 100;
  @media (max-width: 1100px) {
    grid-column-start: 3;
  }
  @media (max-width: 1000px) {
    grid-column: 2 / span 10;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;

const Arrowx = styled.div`
  width: 40px;
  height: 30px;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease opacity;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg * {
        stroke: ${(props) => props.theme.colors.accent};
        transition: stroke 0.3s ease;
      }
    }
  }
  span {
    width: 40px;
  }
  @media (max-width: 600px) {
    background-color: ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    height: 45px;
    width: 45px;
    span {
      width: 25px;
      margin-top: 14px;
      margin-left: ${(p) => (p.left ? "9px" : "11px")};
    }
  }
  ${(p) =>
    p.reveal &&
    `pointer-events: auto;
     opacity: 1;
     `}
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 75px);
  grid-gap: 1.6rem 2rem;
  width: 100%;
  align-items: flex-start;
`;

const Info = styled.div`
  width: auto;
  display: flex;
  flex-direction: column;
  label {
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
  span {
    color: ${(p) => p.theme.colors.accent};
  }
  h4 {
    font-weight: 100;
    font-size: 2.7rem;
    margin-bottom: 20px;
    line-height: 125%;
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 2rem;
    }
  }
`;

const QuestionGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 25px 50px;
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  form {
    grid-column: 4 / span 8;
    max-width: 800px;
    position: relative;
  }
  @media (max-width: 1100px) {
    form {
      grid-column-start: 3;
    }
  }
  @media (max-width: 1000px) {
    form {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    form {
      grid-column: 1 / span 12;
    }
    grid-template-rows: 2fr 35px 50px;
  }
`;

const Question = styled.div`
  position: absolute;
  transform: translateX(10%);
  opacity: 0;
  pointer-events: none;
  ${(p) =>
    p.selected &&
    `transform: translateX(0); 
    pointer-events: auto;
    position:relative;
     opacity: 1;
     transition: 0.4s ease transform, 0.4s 0.1s ease opacity;`}
  ${(p) =>
    p.deselected &&
    `transform: translateX(-10%); 
     pointer-events: none;
     opacity: 0;
     transition: 0.2s ease transform, 0.3 ease opacity`}
  transition: 0.4s ease transform, 0.4s ease opacity;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:nth-child(3) {
    border-right: 0;
  }
  label {
    color: ${(p) => p.theme.colors.foreground_low};
    position: relative;
    cursor: pointer;
    padding-left: 35px;
    &:not(:last-of-type) {
      margin-bottom: 15px;
    }
    &:hover input ~ span {
      background-color: ${(p) => p.theme.colors.accent};
    }
    span {
      position: absolute;
      top: 1px;
      left: 0;
      height: 23px;
      width: 23px;
      background-color: transparent;
      border: 2px solid ${(p) => p.theme.colors.foreground_low};
      border-radius: 50%;
      transition: 0.4s ease all;
    }
    input {
      &[type="radio"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked ~ span {
          background-color: ${(p) => p.theme.colors.accent};
        }
      }
    }
  }
  div > div {
    margin-bottom: 10px;
  }
  h5 {
    color: ${(p) => p.theme.colors.accent};
    text-align: left;
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 115%;
    margin-top: 0;
    margin-bottom: 20px;
  }
  @media (max-width: 660px) {
    h5 {
      font-size: 2.7rem;
    }
  }
`;

const QuestionSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;
