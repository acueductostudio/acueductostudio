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
                      value={0}
                      ref={register}
                      onClick={handleClick}
                    />
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
                    {question.a2}
                  </label>
                  <label>
                    <input
                      name={"Q" + index}
                      type="radio"
                      value={10}
                      ref={register}
                      onClick={handleClick}
                    />
                    {question.a3}
                  </label>
                </Info>
              </Question>
            ))}
            <Question selected={qIndex === NUMBER_OF_QS}>
              <h5>
                ingresa tus datos para recibir tu diagnóstico personalizado
              </h5>
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
          <MainResult>
            {((results[0] + results[1] + results[2]) / 3).toFixed(1)}
            <span>/10</span>
          </MainResult>
          <div>
            <ResultNumber result={results[0].toFixed(1)} />
            <div>
              <h3>estrategia</h3>
              {results[0].toFixed(1) < 5 && (
                <p>
                  Consideras muy pocos o ninguno de los elementos básicos para
                  tener una estrategia sólida de tecnología digital, tales como
                  la medición de costos de herramientas o la implementación de
                  nuevas soluciones. Debes tomar control de esta situación,
                  puedes eficientar procesos repetitivos de tu negocio con
                  automatizaciones tecnológicas que ya están operando para tu
                  industria. No te quedes atrás.
                </p>
              )}
              {results[0].toFixed(1) >= 5 && results[0] < 8 && (
                <p>
                  Te encuentras en un punto medio entre la punta de lanza y los
                  que se están quedando atrás. Tienes nociones sobre cómo
                  quieres utilizar tecnología digital en tu empresa pero la
                  eficiencia de tus estrategias carece de minuciosidad e
                  investigación exhaustiva. Un poco de dirección en esta parte
                  de tu negocio podría elevarlo al siguiente nivel.
                </p>
              )}
              {results[0].toFixed(1) >= 8 && (
                <p>
                  Cuentas con una estrategia que integra tecnologías a tu
                  negocio. Tu modelo de negocios está optimizado por ellas y
                  cuentas con procesos de automatización. Evalúas la eficiencia
                  de tus tecnologías constantemente y tienes claro el costo y
                  retorno que involucran las más relevantes para tu negocio.
                </p>
              )}
            </div>
          </div>
          <div>
            <ResultNumber result={results[1].toFixed(1)} />
            <div>
              <h3>cultura</h3>
              {results[1].toFixed(1) < 5 && (
                <p>
                  La cultura de tu empresa puede ser mucho más resiliente a los
                  constantes cambios tecnológicos que se enfrentan los negocios
                  del mundo. Todo tu organigrama tiene que adoptar este mindset,
                  así tu empresa prosperará en un contexto de constante cambio
                  que busca soluciones nuevas e innovadoras todo el tiempo.{" "}
                </p>
              )}
              {results[1].toFixed(1) >= 5 && results[1] < 8 && (
                <p>
                  La cultura de tu negocio abraza el cambio pero está lejos de
                  operar con resiliencia tecnológica.
                  <b> Necesitas alinear a todos</b>
                  los individuos de tu organización frente a un contexto
                  específico: un constante cambio con nuevas herramientas y
                  soluciones todo el tiempo. <b>No dejes de lado a nadie</b> del
                  organigrama, este mindset tiene que permear en el ADN de tu
                  empresa.
                </p>
              )}
              {results[1].toFixed(1) >= 8 && (
                <p>
                  Tu cultura de trabajo promueve la adopción de nuevas
                  tecnologías. Consideras a todos los sectores de tu
                  organización a la hora de adoptar herramientas nuevas y
                  capacitas a tus empleados en el uso de éstas, lo que genera un
                  ambiente de recepción abierta hacia la innovación tecnológica.
                </p>
              )}
            </div>
          </div>
          <div>
            <ResultNumber result={results[2].toFixed(1)} />
            <div>
              <h3>competencia</h3>
              {results[2].toFixed(1) < 5 && (
                <p>
                  No implementas los correctos análisis de datos que genera tu
                  negocio y competencia para encontrar nuevas oportunidades.
                  Antes de desarrollar tus propias herramientas, analiza
                  cuidadosamente cómo soluciona tu competencia los problemas en
                  tu industria e identifica qué aspectos tecnológicos juegan un
                  papel importante.
                </p>
              )}
              {results[2].toFixed(1) >= 5 && results[2] < 8 && (
                <p>
                  Tienes buenas prácticas que te ayudan a competir con otros
                  negocios de tu industria, pero si quieres destacar realmente
                  necesitas ser más agresivo con los análisis, comparaciones y
                  objetivos tecnológicos que planteas para tu negocio.{" "}
                </p>
              )}
              {results[2].toFixed(1) >= 8 && (
                <p>
                  Tienes muy claros los problemas que existen en tu industria y
                  has hecho análisis de cómo tu competencia los afronta. Cuentas
                  con herramientas propias que te distinguen de ella y
                  monitoreas los datos que genera tu negocio para encontrar
                  oportunidades. Tomas decisiones en un esquema data driven y
                  tus KPI’s siempre responden a datos internos.
                </p>
              )}
            </div>
          </div>
          <LastMessage>
            <h3>¿estás listo para subir tu rating?</h3>
            <p>
              En Acueducto ofrecemos consultorías y capacitaciones de procesos
              digitales y tecnologías para preparar tu negocio para los 2020’s.
              Escríbenos a hola@acueducto.studio para agendar tu cita.
            </p>
          </LastMessage>
        </ResultsGrid>
      )}
    </QuestionSection>
  );
};

export default React.memo(TestD);

const LastMessage = styled.div`
  background-color: ${(p) => p.theme.colors.accent};
  color: ${(p) => p.theme.colors.foreground_low};
  padding: 5%;
  margin-top: 5%;
  display: flex;
  flex-direction: column;
  h3 {
    color: ${(p) => p.theme.colors.foreground};
    margin-top: 0;
    padding: 0 0 20px 0;
    text-align: left;
    font-size: 3rem;
    font-weight: 200;
  }
`;

const MainResult = styled.div`
  color: ${(p) => p.theme.colors.accent};
  font-size: 6rem;
  font-weight: 200;
  align-items: flex-end;
  line-height: 1;
  padding-bottom: 5%;
  span {
    font-size: 2rem;
  }
`;

const ResultNumber = styled.span`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid
    ${(p) =>
      p.result >= 5 && p.result < 8
        ? p.theme.colors.warning
        : p.result > 8
        ? p.theme.colors.success
        : p.theme.colors.error};
  &::before {
    content: ${(p) => `'${p.result}'`};
    font-size: 3.5rem;
    display: flex;
    text-align: center;
    color: ${(p) =>
      p.result >= 5 && p.result < 8
        ? p.theme.colors.warning
        : p.result > 8
        ? p.theme.colors.success
        : p.theme.colors.error};
  }
`;

const ResultsGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  min-height: 20vh;
  > div {
    width: 100%;
    grid-column: 3 / span 8;
    display: flex;
    margin-bottom: 5%;
    > div {
      margin-left: 5%;
      width: calc(100% - 85px - 5%);
      p {
        color: ${(p) => p.theme.colors.foreground_low};
      }
      h3 {
        color: ${(p) => p.theme.colors.foreground};
        font-weight: 200;
        padding-left: 0;
        padding-bottom: 15px;
        margin-top: 0;
        text-align: left;
        font-size: 3rem;
      }
    }
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
`;

const LineContainer = styled.div`
  grid-column: 4 / span 7;
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
  }
`;

const ArrowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: 4 / span 7;
  grid-row: 2;
  z-index: 100;
`;

const Arrowx = styled.div`
  width: 40px;
  height: 30px;
  color: white;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s ease opacity;
  span {
    width: 40px;
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
    font-size: 2.7rem;
    margin-bottom: 20px;
    line-height: 125%;
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
    grid-column: 4 / span 7;
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
    position:relative;
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
  input {
    &[type="radio"] {
      width: 20px;
      height: 20px;
      margin-right: 10px;
    }
  }
  label {
    color: ${(p) => p.theme.colors.foreground_low};
    margin-bottom: 15px;
  }
  div > div {
    margin-bottom: 10px;
  }
  h5 {
    color: ${(p) => p.theme.colors.accent};
    text-align: left;
    font-size: 3.2rem;
    font-weight: 200;
    line-height: 120%;
  }
`;

const QuestionSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  /* h3 {
    color: ${(props) => props.theme.colors.accent};
    text-align: center;
    margin-top: 10%;
    font-size: 4rem;
    font-weight: 300;
    padding: 0 4% 4% 4%;
    line-height: 1;
  } */
`;
