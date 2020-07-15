import styled from "styled-components";
import { P } from "components/shared/Dangerously";

const Results = ({ results, setShowResults }) => {
  return (
    <ResultsGrid>
      <MainResult onClick={() => setShowResults(false)}>
        {((results[0] + results[1] + results[2]) / 3).toFixed(1)}
        <span>/10</span>
      </MainResult>
      <div>
        <ResultNumber result={results[0].toFixed(1)} />
        <div>
          <h3>estrategia</h3>
          {results[0].toFixed(1) < 5 && (
            <p>
              Consideras muy pocos o ninguno de los elementos básicos para tener
              una estrategia sólida de tecnología digital, tales como la
              medición de costos de herramientas o la implementación de nuevas
              soluciones. Debes tomar control de esta situación, puedes
              eficientar procesos repetitivos de tu negocio con automatizaciones
              tecnológicas que ya están operando para tu industria. No te quedes
              atrás.
            </p>
          )}
          {results[0].toFixed(1) >= 5 && results[0] < 8 && (
            <p>
              Te encuentras en un punto medio entre la punta de lanza y los que
              se están quedando atrás. Tienes nociones sobre cómo quieres
              utilizar tecnología digital en tu empresa pero la eficiencia de
              tus estrategias carece de minuciosidad e investigación exhaustiva.
              Un poco de dirección en esta parte de tu negocio podría elevarlo
              al siguiente nivel.
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
              constantes cambios tecnológicos que se enfrentan los negocios del
              mundo. Todo tu organigrama tiene que adoptar este mindset, así tu
              empresa prosperará en un contexto de constante cambio que busca
              soluciones nuevas e innovadoras todo el tiempo.{" "}
            </p>
          )}
          {results[1].toFixed(1) >= 5 && results[1] < 8 && (
            <p>
              La cultura de tu negocio abraza el cambio pero está lejos de
              operar con resiliencia tecnológica.
              <b> Necesitas alinear a todos </b>
              los individuos de tu organización frente a un contexto específico:
              un constante cambio con nuevas herramientas y soluciones todo el
              tiempo. <b>No dejes de lado a nadie</b> del organigrama, este
              mindset tiene que permear en el ADN de tu empresa.
            </p>
          )}
          {results[1].toFixed(1) >= 8 && (
            <p>
              Tu cultura de trabajo promueve la adopción de nuevas tecnologías.
              Consideras a todos los sectores de tu organización a la hora de
              adoptar herramientas nuevas y capacitas a tus empleados en el uso
              de éstas, lo que genera un ambiente de recepción abierta hacia la
              innovación tecnológica.
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
              Tienes muy claros los problemas que existen en tu industria y has
              hecho análisis de cómo tu competencia los afronta. Cuentas con
              herramientas propias que te distinguen de ella y monitoreas los
              datos que genera tu negocio para encontrar oportunidades. Tomas
              decisiones en un esquema data driven y tus KPI’s siempre responden
              a datos internos.
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
  );
};

export default Results;

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
`;
