import styled from "styled-components";
import Head from "next/head";
import Slide from "react-reveal/Slide";

export default function Contact() {
  return (
    <ContactoWrapper>
      <Head>
        <title>Antítesis Films | Contacto</title>
      </Head>
      <Slide bottom cascade>
        <h2>Contacto</h2>
      </Slide>
      <Slide bottom>
        <h3>Trabaja con Antítesis</h3>
        <p>
          En Antítesis nos interesa conocer a más personas con quienes crecer
          nuestros proyectos. También nos interesa conocer, crear y producir
          propuestas audiovisuales de corte social.
        </p>
        <h4>Locación</h4>
      </Slide>
      <Slide bottom cascade>
        <p>
          Si deseas más información de nuestros servicios o te interesa sumarte
          a nuestro equipo.
        </p>
        <h4>
          <a href="mailto:info@somosantitesis.com">Contáctanos</a>
        </h4>
      </Slide>
    </ContactoWrapper>
  );
}

const ContactoWrapper = styled.div`
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
