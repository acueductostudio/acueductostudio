import styled from "styled-components/";

export default function Renta() {
  return <RentaWrapper><h1>Renta</h1></RentaWrapper>;
}

const RentaWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 4%;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
`;
