import styled from "styled-components";

type ClipProps = {
  className?: string;
  unPadded?: boolean;
  children: React.ReactNode;
};

const PageClipper = ({ children, className, unPadded }: ClipProps) => (
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
  top: 23px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
  border-radius: 58px;
  @media (max-width: 1530px) {
    border-radius: 38px;
  }
  @media (max-width: 1300px) {
    padding-top: ${(props) => (props.unPadded ? "0" : "5%")};
  }
  @media (max-width: 700px) {
    padding-top: ${(props) => (props.unPadded ? "0" : "10%")};
  }
  @media (max-width: 600px), (max-height: 450px) {
    overflow-y: auto;
    position: relative;
    left: 0px;
    padding-bottom: 20px;
    top: 17px;
    border-radius: 0;
  }
  @media (max-width: 500px) {
    padding-top: ${(props) => (props.unPadded ? "0" : "15%")};
  }
  @media (max-width: 400px) {
    padding-top: ${(props) => (props.unPadded ? "0" : "20%")};
  }
`;
