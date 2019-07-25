import styled from "styled-components";
import Slide from "react-reveal/Slide";

export default function Renta() {
  return (
    <RentaWrapper>
      <Slide bottom cascade>
        <h2>Renta</h2>
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
  h2 {
    grid-column: 4 / span 4;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
`;
