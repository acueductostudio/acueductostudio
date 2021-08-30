import React from "react";
import styled from "styled-components";

type ButtonProps = {
  inverse?: boolean;
  text: string;
  submitButton?: boolean;
  className?: string;
};
export type ButtonRef = any;

export const ButtonArrow = React.forwardRef<ButtonRef, ButtonProps>(
  (props, ref) =>
    !props.submitButton ? (
      <Button as="a" ref={ref} {...props} inverse={props.inverse}>
        {props.text}
        <Pin inverse={props.inverse} />
      </Button>
    ) : (
      <Button {...props} inverse={props.inverse} marginTop>
        <input type="submit" value={props.text} />
        {props.text}
        <Pin inverse={props.inverse} />
      </Button>
    )
);

export default ButtonArrow;

const Pin = styled.span<{ inverse: boolean }>`
  width: 30px;
  height: 30px;
  pointer-events: none;
  display: inline-block;
  background-color: ${(p) =>
    !p.inverse ? p.theme.colors.background : p.theme.colors.accent};
  border-radius: 100%;
  margin-left: 15px;
  transition: 0.3s ease all;
  &:after {
    content: " ";
    border: solid
      ${(p) => (!p.inverse ? p.theme.colors.accent : p.theme.colors.background)};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-45deg) translateY(3px);
    margin-left: 3px;
    transition: 0.3s ease all;
  }
`;

const Button = styled.div<{ inverse: boolean; marginTop?: boolean }>`
  text-decoration: none;
  padding: 13px 17px 14px 25px;
  border-radius: 50px;
  color: ${(p) => p.theme.colors.foreground};
  background-color: ${(p) =>
    !p.inverse ? p.theme.colors.background : p.theme.colors.accent};
  position: relative;
  display: inline-block;
  align-self: flex-start;
  font-weight: 100;
  -webkit-appearance: button-bevel;
  margin-top: ${(p) => (p.marginTop ? "10px" : "0px")};
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
    min-height: 100%;
    opacity: 0;
    z-index: 2;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover,
    &:focus-within {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) =>
          !p.inverse ? p.theme.colors.accent : p.theme.colors.background};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(3px) scale(0.8);
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 10px;
    padding-top: 15px;
    padding-bottom: 11px;
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
        background-color: ${(p) =>
          !p.inverse ? p.theme.colors.accent : p.theme.colors.background};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(7px) scale(0.8);
        }
      }
    }
  }
`;
