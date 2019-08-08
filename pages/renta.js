import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Head from "next/head";


export default function Renta() {
  return (
    <RentaWrapper>
          <Head>
        <title>Antítesis Films | Renta</title>
      </Head>
      <Slide bottom cascade>
        <h2>Renta</h2>
      </Slide>
      <Slide bottom>
        <h3>Equipo</h3>
        <p>
          Contamos con equipo de cámara y de producción a disposición para tus
          proyectos.
        </p>
        <h4><a href="../static/assets/pdf/Antitesis_renta.pdf">Ver PDF</a></h4>
      </Slide>
    </RentaWrapper>
  );
}

const RentaWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  padding-bottom: 160px;
  h2 {
    grid-column: 4 / span 6;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
  h3,
  h4,
  p {
    grid-column: 4 / span 6;
  }
  h4 {
    overflow: visible;
    a {
      color: inherit;
      text-decoration: none;
      padding-bottom: 4px;
      border-bottom: 2px solid ${props => props.theme.colors.background};
      transition: border-color 0.3s ease;
      &:hover {
        border-color: ${props => props.theme.colors.foreground};
      }
    }
  }
`;
