import styled from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import es from "public/locales/es/testdigital.json";

const TestD = () => {
  let { questions } = es.testdigital_page;
  const [qIndex, setQIndex] = useState(0);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  function handleClick() {
    console.log("The link was clicked.");
    setQIndex(qIndex > 3 ? 0 : qIndex + 1);
  }

  return (
    <QuestionSection>
      <QuestionGrid>
        <form onSubmit={handleSubmit(onSubmit)}>
          {questions.map((question, index) => (
            <Question
              key={"question" + index}
              selected={qIndex === index}
              deselected={qIndex === index - 1}
            >
              <Info>
                <span>{index + 1 < 10 ? `0${index + 1}` : index}/15</span>
                <h4>{question.question}</h4>
                <div>
                  <input
                    name={"Q" + index}
                    type="radio"
                    value="1"
                    ref={register}
                    onClick={handleClick}
                  />
                  <label htmlFor={"Q" + index}>{question.a1}</label>
                </div>
                <div>
                  <input
                    name={"Q" + index}
                    type="radio"
                    value="2"
                    ref={register}
                    onClick={handleClick}
                  />
                  <label>{question.a2}</label>
                </div>
                <div>
                  <input
                    name={"Q" + index}
                    type="radio"
                    value="3"
                    ref={register}
                    onClick={handleClick}
                  />
                  <label>{question.a3}</label>
                </div>
              </Info>
            </Question>
          ))}
          <input type="submit" />
        </form>
      </QuestionGrid>
    </QuestionSection>
  );
};

export default React.memo(TestD);

const Info = styled.div`
  width: auto;
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
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  position: relative;
  min-height: 100vh;
  form {
    grid-column: 3 / span 8;
    position: relative;
  }
`;

const Question = styled.div`
  position: absolute;
  transform: translateX(100%);
  opacity: 0;
  ${(p) =>
    p.selected &&
    `transform: translateX(0); 
     opacity: 1;
     transition: 0.4s ease transform, 0.4s 0.2s ease opacity;`}
  ${(p) =>
    p.deselected &&
    `transform: translateX(-100%); 
     opacity: 0;
     transition: 0.4s ease transform, 0.4s ease 0.2s opacity;`}
  transition: 0.4s ease 0.1s transform, 0.4s ease opacity;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 10%;
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
    width: 20px;
    height: 20px;
    margin-right: 10px;
    &[type="submit"] {
      z-index: 100;
      margin-top: 10px;
      position: absolute;
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
