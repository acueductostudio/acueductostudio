import React from "react";
import styled from "styled-components";

const ArrowButton = React.forwardRef((props, ref) => (
  <Shifter ref={ref} {...props} as={props.submitButton ? "div" : "a"}>
    <Button>
      {props.submitButton && <input type="submit" value={props.text} />}
      {props.text}
      <Pin />
    </Button>
  </Shifter>
));

export default ArrowButton;

const Shifter = styled.a`
  margin: 22px 0 15px 0;
  text-decoration: none;
`;

const Pin = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 100%;
  margin-left: 15px;
  transition: 0.3s ease all;
  &:after {
    content: " ";
    border: solid ${(p) => p.theme.colors.accent};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-45deg) translateY(3px);
    margin-left: 3px;
    transition: 0.3s ease all;
  }
`;

const Button = styled.div`
  text-decoration: none;
  padding: 13px 17px 18px 24px;
  border-radius: 30px;
  color: ${(p) => p.theme.colors.foreground};
  background-color: ${(p) => p.theme.colors.background};
  margin-top: 20px;
  border: 2px solid ${(p) => p.theme.colors.background};
  position: relative;
  display: inline;
  cursor: pointer;
  input {
    cursor: pointer;
    font-size: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: 100%;
    opacity: 0;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) => p.theme.colors.accent};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(3px) scale(0.8);
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 20%;
    padding-top: 15px;
    ${Pin} {
      transform: translateY(-3px);
      &:after {
        margin-left: 0px;
        transform: rotate(-45deg) translateY(7px) scale(1);
      }
    }
    &:active {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) => p.theme.colors.accent};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(7px) scale(0.8);
        }
      }
    }
  }
`;
