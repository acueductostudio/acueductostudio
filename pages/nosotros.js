import styled from "styled-components";

export default function Nosotros() {
  return (
    <NosotrosWrapper>
      <h1>Nosotros</h1>
    </NosotrosWrapper>
  );
}

const NosotrosWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding: 4%;
  position: relative;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
`;
