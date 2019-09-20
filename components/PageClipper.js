import styled from "styled-components";

const PageClipper = ({ children, className, unPadded }) => (
  <Wrapper id="Clipper" className={className} unPadded={unPadded}>
    {children}
  </Wrapper>
);

export default PageClipper;

const Wrapper = styled.main`
  display: flex;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
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
  @media (max-width: 1300px) {
    padding-top: ${props => (props.unPadded ? "0" : "5%")};
  }
  @media (max-width: 700px) {
    padding-top: ${props => (props.unPadded ? "0" : "10%")};
  }
  @media (max-width: 500px) {
    padding-top: ${props => (props.unPadded ? "0" : "15%")};
    -webkit-overflow-scrolling: touch;
  }
  @media (max-width: 400px) {
    padding-top: ${props => (props.unPadded ? "0" : "20%")};
  }
`;
