import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Logo from "public/assets/img/layout/logo.svg";

const FooterLogoCrop = ({ color }) => (
  <LogoCrop color={color}>
    <Fade triggerOnce>
      <Logo />
    </Fade>
  </LogoCrop>
);

export default FooterLogoCrop;

const LogoCrop = styled.div`
  width: 100%;
  grid-column: unset !important;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 0;
  height: 175px;
  svg {
    width: 110%;
    height: auto;
    transform: translateY(13%);
    opacity: 0.3;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(35%);
    * {
      fill: ${(p) => (p.color ? p.color : "rgba(0, 0, 0, 0.5)")};
    }
  }
`;
