import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Head from "next/head";

export default function Nosotros() {
  return (
    <NosotrosWrapper>
          <Head>
        <title>Antítesis Films | Nosotros</title>
      </Head>
      <Hero>
        <Fade>
          <figure
            style={{
              backgroundImage: `url(../static/assets/img/reel/reel2.jpg)`
            }}
          />
        </Fade>
      </Hero>
      <Slide bottom cascade>
        <h2>Antitesis</h2>
        <h2>Films</h2>
      </Slide>
      <Slide>
        <h3>Nosotros</h3>
        <p>
          Antítesis nace en 2015 con el objetivo de crear contenido audiovisual
          de calidad con un objetivo social.
          <br />
          <br />
          Somos una casa productora de cine, videoclips y formatos web, que se
          caracterizan por ser la Antítesis de la agenda global, resultando en
          ficciones y documentales auténticos desde una perspectiva que
          cuestiona.
          <br />
          <br />
          Nuestro equipo creativo está conformado por cineastas, videoastas  y
          productores, con un fuerte interés por encontrar historias y crear
          contenido que cambie realidades. El resultado han sido proyectos
          seleccionados en varios festivales de México, Estados Unidos, Reino
          Unido, Holanda, España, Panamá y Francia; y galardonados en Madrid,
          Houston y Panamá.
          <br />
          <br />
          Hemos creado y difundido historias para organizaciones de la sociedad
          civil, emprendedores sociales, universidades y marcas en búsqueda de
          soluciones audiovisuales significativas.
        </p>
        <h3>Servicios</h3>
      </Slide>
      <UlStyled>
        <Slide>
          <li>Cápsulas</li>
          <li>Entrevistas</li>
          <li>Videoclips</li>
          <li>Publicidad</li>
          <li>Cine de Ficción & Documental</li>
          <li>Edición</li>
          <li>Renta de equipo</li>
          <li>Servicios de Producción</li>
        </Slide>
      </UlStyled>
      <H4Styled>
        <Slide>
          Investigación y creación de contenido de carácter social y con
          consciencia sobre los derechos humanos.
        </Slide>
      </H4Styled>
    </NosotrosWrapper>
  );
}

const UlStyled = styled.ul`
  grid-column: 4 / span 6;
  list-style: none;
  margin: 0;
  font-size: 1.32rem;
  letter-spacing: 1px;
  padding: 0;
  column-count: 2;
  column-gap: 0;
  margin-bottom: 12%;
  line-height: 1.4;
  li {
    margin: 0;
    padding: 0;
  }
`;

const H4Styled = styled.span`
  grid-column: 4 / span 6;
  font-size: 1.32rem;
  letter-spacing: 1px;
`;

const Hero = styled.div`
  grid-column: 4 / span 6;
  display: flex;
  height: 0px;
  padding-bottom: 51%;
  width: 100%;
  position: relative;
  figure {
    width: 100%;
    height: 100%;
    position: absolute;
    background-size: cover;
  }
`;

const NosotrosWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding-bottom: 160px;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  h2 {
    grid-column: 4 / span 6;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
  p,
  h3 {
    grid-column: 4 / span 6;
  }
`;
