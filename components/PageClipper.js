import styled from "styled-components";

const PageClipper = ({children}) => <Wrapper id="Clipper">{children}</Wrapper>;

export default PageClipper;

const Wrapper = styled.main`
  display: flex;
  -webkit-overflow-scrolling: touch;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: absolute;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;
