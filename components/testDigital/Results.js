import styled from "styled-components";
import Fade from "react-reveal";
import { P } from "components/shared/Dangerously";
import Arrow from "components/shared/Arrow";
import Link from "next/link";

const Results = ({ results, setTestStatus }) => {
  console.log(results);
  return (
    <ResultsGrid>
      <Fade>
        <div>
          <MainResult onClick={() => setTestStatus("")}>
            <p>
              Gracias por tomar el test, {results[3]}.
              <br />
              <span>
                resultados <b>↓</b>
              </span>
            </p>
            <h4>
              {((results[0] + results[1] + results[2]) / 3).toFixed(1)}
              <span>/10</span>
            </h4>
          </MainResult>
        </div>
        <div>
          <ResultNumber result={results[0].toFixed(1)} />
          <div>
            <h3>estrategia</h3>
            {results[0].toFixed(1) < 5 && (
              <p>
                Consideras muy pocos o ninguno de los elementos básicos para
                tener una estrategia sólida de tecnología digital, tales como la
                medición de costos de herramientas o la implementación de nuevas
                soluciones. Debes tomar control de esta situación, puedes
                eficientar procesos repetitivos de tu negocio con
                automatizaciones tecnológicas que ya están operando para tu
                industria. No te quedes atrás.
              </p>
            )}
            {results[0].toFixed(1) >= 5 && results[0] < 8 && (
              <p>
                Te encuentras en un punto medio entre la punta de lanza y los
                que se están quedando atrás. Tienes nociones sobre cómo quieres
                utilizar tecnología digital en tu empresa pero la eficiencia de
                tus estrategias carece de minuciosidad e investigación
                exhaustiva. Un poco de dirección en esta parte de tu negocio
                podría elevarlo al siguiente nivel.
              </p>
            )}
            {results[0].toFixed(1) >= 8 && (
              <p>
                Cuentas con una estrategia que integra tecnologías a tu negocio.
                Tu modelo de negocios está optimizado por ellas y cuentas con
                procesos de automatización. Evalúas la eficiencia de tus
                tecnologías constantemente y tienes claro el costo y retorno que
                involucran las más relevantes para tu negocio.
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
                así tu empresa prosperará en un contexto de constante cambio que
                busca soluciones nuevas e innovadoras todo el tiempo.{" "}
              </p>
            )}
            {results[1].toFixed(1) >= 5 && results[1] < 8 && (
              <p>
                La cultura de tu negocio abraza el cambio pero está lejos de
                operar con resiliencia tecnológica.
                <b> Necesitas alinear a todos </b>
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
                tecnologías. Consideras a todos los sectores de tu organización
                a la hora de adoptar herramientas nuevas y capacitas a tus
                empleados en el uso de éstas, lo que genera un ambiente de
                recepción abierta hacia la innovación tecnológica.
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
                negocio y competencia para encontrar nuevas oportunidades. Antes
                de desarrollar tus propias herramientas, analiza cuidadosamente
                cómo soluciona tu competencia los problemas en tu industria e
                identifica qué aspectos tecnológicos juegan un papel importante.
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
                con herramientas propias que te distinguen de ella y monitoreas
                los datos que genera tu negocio para encontrar oportunidades.
                Tomas decisiones en un esquema data driven y tus KPI’s siempre
                responden a datos internos.
              </p>
            )}
          </div>
        </div>
        <LastMessage>
          <p>
            Emprende las estrategias que necesitas para desarrollar nuevas
            capacidades y prosperar en la era digital. <br />
            <br />
            Mejora tu calificación con nuestras
            <Link href="/consultorías" passHref>
              <a> consultorías digitales.</a>
            </Link>
            <Link href="/consultorías">
              <Arrow />
            </Link>
          </p>
        </LastMessage>
      </Fade>
    </ResultsGrid>
  );
};

export default Results;

const LastMessage = styled.div`
  color: ${(p) => p.theme.colors.foreground_low};
  border: 2px solid ${(p) => p.theme.colors.foreground_low};
  padding: 5% 5% 4.5% 5%;
  margin: 5% auto !important;
  width: auto !important;
  display: flex;
  flex-direction: column;
  p {
    max-width: 360px;
  }
  span {
    margin: 30px auto 0px;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg * {
          stroke: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  a {
    text-decoration: none;
    border-bottom: 2px solid ${(p) => p.theme.colors.accent};
    transition: 0.3s ease all;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        ~ span svg * {
          stroke: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  @media (max-width: 1100px) {
  }
`;

const MainResult = styled.div`
  color: ${(p) => p.theme.colors.accent};
  align-items: flex-end;
  margin-left: 0 !important;
  width: 100% !important;
  p {
    font-weight: 100;
    margin-bottom: 5%;
    span {
      color: ${(p) => p.theme.colors.accent};
      font-size: 6rem;
      margin-top: 15px;
      font-weight: 300;
      display: block;
      b {
        font-size: 3.5rem;
      }
    }
  }
  h4 {
    font-weight: 300;
    font-size: 6rem;
    border: 4px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    height: 170px;
    padding-top: 32px;
    text-align: center;
    width: 170px;
    margin: 10% auto 30px auto;
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 950px) {
    p span {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    p span {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    p span {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h4 {
      margin-bottom: 0;
    }
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
        b {
          font-weight: 200;
          color: ${(p) => p.theme.colors.foreground};
        }
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
  @media (max-width: 900px) {
    > div {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    > div {
      grid-column: 1 / span 12;
      flex-direction: column;
      > div {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 100%;
        h3 {
          padding-bottom: 10px;
        }
      }
    }
  }
`;
