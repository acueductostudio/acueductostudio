import styled from "styled-components";
import Hamburger from "../static/assets/img/layout/hamburger.svg";

const NavTrigger = props => (
  <TriggerContainer>
    <Trigger onClick={() => props.toggleNav()} open={props.isOpen}>
      <Hamburger />
    </Trigger>
  </TriggerContainer>
);

export default NavTrigger;

const TriggerContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 60px 50px;
  z-index: 12;
  margin: 0px auto;
  max-width: 1500px;
  pointer-events: none;
  mix-blend-mode: exclusion;
`;

const Trigger = styled.div`
  pointer-events: auto;
  cursor: pointer;
  width: 30px;
  position: relative;
  justify-self: flex-end;
  svg {
    width: 100%;
    height: auto;
    padding-top: 7px;
    path {
      stroke-width: ${props => props.theme.stroke};
      stroke-linejoin: round;
      stroke: ${props => props.theme.colors.white};
    }
  }
`;
