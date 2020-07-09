import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import Arrow from "components/shared/Arrow";
import es from "public/locales/es/testdigital.json";

const NUMBER_OF_QS = 3;

const TestD = () => {
  let { questions } = es.testdigital_page;
  const [qIndex, setQIndex] = useState(0);
  const [aIndex, setAIndex] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState([]);
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    let estrategia =
      (parseFloat(data.Q0) + parseFloat(data.Q1) + parseFloat(data.Q2)) / 3;
    let cultura =
      (parseFloat(data.Q2) + parseFloat(data.Q2) + parseFloat(data.Q2)) / 3;
    let competencia =
      (parseFloat(data.Q1) + parseFloat(data.Q1) + parseFloat(data.Q1)) / 3;
    setResults([estrategia, cultura, competencia]);
    console.log([estrategia, cultura, competencia]);
    setShowResults(true);
  };
  // console.log(errors);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      qIndex < NUMBER_OF_QS && e.preventDefault();
    }
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      prevIndex();
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      nextIndex();
    }
  };

  function handleClick() {
    setQIndex(qIndex > NUMBER_OF_QS ? 0 : qIndex + 1);
    setAIndex(aIndex > NUMBER_OF_QS ? 0 : aIndex + 1);
  }

  function prevIndex() {
    qIndex !== 0 && setQIndex(qIndex - 1);
  }
  function nextIndex() {
    aIndex > qIndex && qIndex < NUMBER_OF_QS && setQIndex(qIndex + 1);
  }

  return (
    <QuestionSection>
      {!showResults && (
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
                      value={1}
                      ref={register}
                      onClick={handleClick}
                    />
                    {question.a1}
                  </label>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={2}
                      ref={register}
                      onClick={handleClick}
                    />
                    {question.a2}
                  </label>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={3}
                      ref={register}
                      onClick={handleClick}
                    />
                    {question.a3}
                  </label>
                </Info>
              </Question>
            ))}
            <Question selected={qIndex === NUMBER_OF_QS}>
              <InputGrid>
                <div>
                  <label>nombre</label>
                  <input
                    name="nameRequired"
                    type="text"
                    placeholder="nombre"
                    ref={register({ required: true })}
                  />
                  {errors.nameRequired && <span>Escribe tu nombre</span>}
                </div>
                <div>
                  <label>apellido</label>
                  <input
                    name="lastNameRequired"
                    type="text"
                    placeholder="apellido"
                    ref={register({ required: true })}
                  />
                  {errors.lastNameRequired && <span>Escribe tu apellido</span>}
                </div>
                <div>
                  <label>email</label>
                  <input
                    name="emailRequired"
                    type="email"
                    placeholder="email"
                    ref={register({
                      required: { value: true, message: "Escribe tu email" },
                      pattern: {
                        value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                        message: "Email es inválido",
                      },
                    })}
                  />
                  <span>{errors?.emailRequired?.message}</span>
                </div>
                <input type="submit" value="ver resultados" />
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
            <Tag show={qIndex < 1}>Estrategia</Tag>
            <Tag show={qIndex === 1}>Cultura</Tag>
            <Tag show={qIndex === 2}>Competencia</Tag>
          </LineContainer>
        </QuestionGrid>
      )}
      {showResults && (
        <ResultsGrid>
          <div>
            Tus resultados fueron: <br />
            total:{" "}
            <MainResult>
              {((results[0] + results[1] + results[2]) / 3).toFixed(1)}
              {/* {(results[0] + results[1] + results[2]) / 3} */}
              <span>/10</span>
            </MainResult>
            estrategia: <ResultNumber result={results[0]} />
            <br />
            cultura: <ResultNumber result={results[1]} />
            <br />
            competencia: <ResultNumber result={results[2]} />
            <br />
          </div>
        </ResultsGrid>
      )}
    </QuestionSection>
  );
};

export default React.memo(TestD);

const MainResult = styled.div`
  color: ${(p) => p.theme.colors.accent};
  font-size: 3rem;
  span {
    font-size: 1rem;
  }
`;

const ResultNumber = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid
    ${(p) =>
      p.result >= 2 && p.result < 3
        ? p.theme.colors.warning
        : (p.result = 3)
        ? p.theme.colors.success
        : p.theme.colors.error};
  &::before {
    content: ${(p) => `'${p.result}'`};
    font-size: 2rem;
    width: 40px;
    height: 40px;
    display: block;
    text-align: center;
    color: ${(p) =>
      p.result >= 2 && p.result < 3
        ? "yellow"
        : (p.result = 3)
        ? "green"
        : "red"};
  }
`;

const ResultsGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  min-height: 20vh;
  > div {
    width: 100%;
    grid-column: 3 / span 8;
  }
`;

const Tag = styled.span`
  opacity: ${(p) => (p.show ? 1 : 0)};
`;

const LineContainer = styled.div`
  grid-column: 3 / span 8;
  width: 100%;
  grid-row: 3;
  position: relative;
  display: flex;
  justify-content: space-between;
  span {
    text-transform: uppercase;
    color: ${(p) => p.theme.colors.accent};
    letter-spacing: 2px;
    margin-top: 20px;
  }
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
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 3 / span 8;
  grid-row: 2;
  z-index: 100;
`;

const Arrowx = styled.div`
  width: 50px;
  height: 30px;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease opacity;
  ${(p) =>
    p.reveal &&
    `pointer-events: auto;
     opacity: 1;
     `}
`;

const InputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;
  width: 100%;
  align-items: flex-start;
  & > div {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }
  label {
    font-size: 0px;
  }
  input {
    border-radius: 0;
    border: 0;
    padding: 20px;
    width: 100%;
    height: 50px;
    font-weight: 100;
    &[type="text"],
    &[type="email"] {
      background-color: ${(p) => p.theme.colors.background};
      color: ${(p) => p.theme.colors.foreground_low};
      border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    }
    &[type="submit"] {
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.foreground};
    }
  }
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
    font-size: 2.5rem;
    margin-bottom: 10px;
  }
`;

const QuestionGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 2fr 50px 50px;
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  min-height: 70vh;
  form {
    grid-column: 3 / span 8;
    position: relative;
  }
`;

const Question = styled.div`
  position: absolute;
  transform: translateX(30%);
  opacity: 0;
  pointer-events: none;
  ${(p) =>
    p.selected &&
    `transform: translateX(0); 
    pointer-events: auto;
     opacity: 1;
     transition: 0.4s ease transform, 0.4s 0.2s ease opacity;`}
  ${(p) =>
    p.deselected &&
    `transform: translateX(-20%); 
      pointer-events: none;
     opacity: 0;
     transition: 0.4s ease transform, 0.4s ease 0.2s opacity;`}
  transition: 0.4s ease 0.1s transform, 0.4s ease opacity;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &:nth-child(3) {
    border-right: 0;
  }
  ul {
    margin: 20px 0 0 0;
  }
  li {
    list-style: none;
    line-height: 135%;
    color: ${(props) => props.theme.colors.foreground_low};
    &:before {
      content: "– ";
      font-weight: 300;
      color: ${(props) => props.theme.colors.accent};
      margin-left: -16px;
    }
  }
  input {
    &[type="radio"] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  div > div {
    margin-bottom: 10px;
  }
  @media (max-width: 1000px) {
    padding: 12%;
    align-items: flex-start;
    h4 {
      font-size: 2rem;
    }
    ul li {
      font-size: 1.5rem;
      &:before {
        margin-left: 0px;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 5% 0 5% 5%;
    border-right: 0;
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: none;
    }
    h4 {
      font-size: 2.15rem;
    }
    ul {
      margin-top: 8px;
      li {
        font-size: 1.6rem;
      }
    }
  }
  @media (max-width: 600px) {
    padding: 5% 0 5% 5%;
    h4 {
      text-transform: lowercase;
      font-size: 2.1rem;
      font-weight: 200;
    }
    ul li {
      font-size: 1.5rem;
    }
  }
`;

const QuestionSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  h3 {
    color: ${(props) => props.theme.colors.accent};
    text-align: center;
    margin-top: 10%;
    font-size: 4rem;
    font-weight: 300;
    padding: 0 4% 4% 4%;
    line-height: 1;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 950px) {
    h3 {
      font-size: 3.2rem;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 420px) {
    h3 {
      padding-bottom: 6%;
    }
  }
`;
