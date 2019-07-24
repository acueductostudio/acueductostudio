import styled from "styled-components/";

export default function Renta() {
  return (
        <RentaWrapper>Renta</RentaWrapper>
  );
}

const RentaWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  box-sizing: border-box;
  padding: 5%;
  overflow: hidden;
  background-color:red;
  position: relative;
`;