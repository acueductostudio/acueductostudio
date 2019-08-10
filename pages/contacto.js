import styled from "styled-components";
import Head from "next/head";
import Slide from "react-reveal/Slide";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

const MyMapComponent = withScriptjs(
  withGoogleMap(props => (
    <GoogleMap
      defaultZoom={16}
      defaultCenter={{ lat: 19.352037, lng: -99.151034 }}
    >
      <Marker position={{ lat: 19.352037, lng: -99.151034 }} />
    </GoogleMap>
  ))
);

export default function Contacto() {
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
      <MapContainer>
        <MyMapComponent
          isMarkerShown
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBNMT9E5lly4Y0u-30nbMCsPSPEdLxlsUk&v=3.exp&libraries=geometry,drawing,places`}
          //googleMapURL={`https://maps.googleapis.com/maps/api/staticmap?key=AIzaSyBNMT9E5lly4Y0u-30nbMCsPSPEdLxlsUk&center=19.354974548363508,-99.15829488927983&zoom=16&format=png&maptype=roadmap&style=element:geometry%7Ccolor:0x212121&style=element:labels.icon%7Cvisibility:off&style=element:labels.text.fill%7Ccolor:0x757575&style=element:labels.text.stroke%7Ccolor:0x212121&style=feature:administrative%7Celement:geometry%7Ccolor:0x757575&style=feature:administrative.country%7Celement:labels.text.fill%7Ccolor:0x9e9e9e&style=feature:administrative.land_parcel%7Cvisibility:off&style=feature:administrative.locality%7Celement:labels.text.fill%7Ccolor:0xbdbdbd&style=feature:poi%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:poi.park%7Celement:geometry%7Ccolor:0x181818&style=feature:poi.park%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:poi.park%7Celement:labels.text.stroke%7Ccolor:0x1b1b1b&style=feature:road%7Celement:geometry.fill%7Ccolor:0x2c2c2c&style=feature:road%7Celement:labels.text.fill%7Ccolor:0x8a8a8a&style=feature:road.arterial%7Celement:geometry%7Ccolor:0x373737&style=feature:road.highway%7Celement:geometry%7Ccolor:0x3c3c3c&style=feature:road.highway.controlled_access%7Celement:geometry%7Ccolor:0x4e4e4e&style=feature:road.local%7Celement:labels.text.fill%7Ccolor:0x616161&style=feature:transit%7Celement:labels.text.fill%7Ccolor:0x757575&style=feature:water%7Celement:geometry%7Ccolor:0x000000&style=feature:water%7Celement:labels.text.fill%7Ccolor:0x3d3d3d&size=480x360`}
          loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
          containerElement={<div style={{ height: `400px`, width: `100%` }} />}
          mapElement={<div style={{ height: `100%`, width: `100%` }} />}
        />
      </MapContainer>
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

const MapContainer = styled.div`
  display: flex;
  width: 100%;
  grid-column: 4 / span 6;
  margin-bottom: 5%;
`;

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
