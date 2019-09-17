import styled, { css } from "styled-components";
import Hamburger from "../static/assets/img/layout/hamburger.svg";

const NavTrigger = props => (
  <TriggerContainer visible={props.hasLoaded}>
    <Trigger onClick={() => props.toggleNav()} open={props.isOpen}>
      <Hamburger />
    </Trigger>
  </TriggerContainer>
);

export default NavTrigger;

const Trigger = styled.div`
  pointer-events: auto;
  cursor: pointer;
  width: 30px;
  position: relative;
  justify-self: flex-end;
  svg {
    width: 100%;
    height: auto;
    max-width: 30px;
    padding-top: 7px;
    line {
      stroke-width: ${props => props.theme.stroke};
      stroke-linejoin: round;
      stroke: ${props => props.theme.colors.white};
      transition: transform 0.3s ease;
      &#bot {
        transition: transform 0.3s ease 0.15s;
      }
    }
  }
  ${props =>
    props.open &&
    css`
      svg {
        #top {
          transform: translateX(-28px);
        }
        #bot {
          transform: translateX(13px);
        }
      }
    `}
`;

const TriggerContainer = styled.div`
  opacity: ${props => (props.visible ? 1 : 0)};
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
  transition: 0.3s ease 0.3s;
  @media (max-width: 450px) {
    top: unset;
    bottom: 0;
    padding-bottom: 40px;
    padding-right: 38px;
    mix-blend-mode: normal;
    ${Trigger} {
      background-color: ${props => props.theme.colors.accent};
      border-radius: 50% 50%;
      width: 60px;
      height: 60px;
      svg {
        margin-top: 19px;
        margin-left: 14px;
        padding: 0;
      }
    }
  }
`;
