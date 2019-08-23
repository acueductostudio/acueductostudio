import styled, { css } from "styled-components";
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
    line {
      stroke-width: ${props => props.theme.stroke};
      stroke-linejoin: round;
      stroke: ${props => props.theme.colors.white};
      transition: transform .3s ease;
      &#bot{
        transition: transform .3s ease .15s;
      }
    }
  }
  ${props =>
    props.open &&
    css`
      svg {
        #top{
          transform: translateX(-27px);
        } 
        #bot{
          transform: translateX(13px);
        }
      }
    `}
`;
