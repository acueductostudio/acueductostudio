import styled from "styled-components";
import Slide from "react-reveal/Slide";

export default function Contacto() {
  return (
    <Slide>
      <ContactoWrapper><h1>Contacto</h1></ContactoWrapper>
    </Slide>
  );
}

const ContactoWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 4%;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
`;
