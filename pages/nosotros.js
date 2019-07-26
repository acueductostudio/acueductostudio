import styled from "styled-components";
import Slide from "react-reveal/Slide";

export default function Nosotros() {
  return (
    <NosotrosWrapper>
      <Slide bottom cascade>
        <h2>Nosotros</h2>
      </Slide>
    </NosotrosWrapper>
  );
}

const NosotrosWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  h2 {
    grid-column: 4 / span 5;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
`;
