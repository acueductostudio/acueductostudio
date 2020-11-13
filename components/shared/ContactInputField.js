import styled from "styled-components";

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  label {
    font-size: 0.8em;
    padding-left:0 !important;
    margin-bottom: 8px;
    color: ${(p) => p.theme.colors.foreground_low};
  }
  span {
    color: ${(p) => p.theme.colors.error};
    font-size: 0.9em;
  }
  input,
  textarea {
    border-radius: 10px;
    border: 0;
    padding: 16px;
    width: 100%;
    height: 60px;
    font-weight: 100;
    &:focus {
      outline: none;
      border-color: ${(p) => p.theme.colors.accent} !important;
      &::placeholder {
        color: ${(p) => p.theme.colors.foreground_low};
      }
    }
    @media (max-width: 600px) {
      &:active {
        outline: none;
        border-color: ${(p) => p.theme.colors.foreground};
        &::placeholder {
          color: ${(p) => p.theme.colors.foreground_low};
        }
      }
    }
    background-color: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.foreground_low};
    border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    transition: 0.4s ease all;
    &::placeholder {
      color: ${(p) => p.theme.colors.foreground_lower};
      transition: 0.4s ease color;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border: 2px solid ${(p) => p.theme.colors.foreground_low};
        &::placeholder {
          color: ${(p) => p.theme.colors.foreground_low};
        }
      }
    }
  }
  textarea {
    height: 280px;
  }
`;

export default InputField;

export const SubmitField = styled(InputField)`
  width: auto;
  display: inline-flex;
  margin-top: 16px;
  input {
    background-color: ${(p) => p.theme.colors.accent};
    color: ${(p) => p.theme.colors.foreground};
    padding: 15px 25px;
    cursor: pointer;
    border-radius: 30px;
    width: auto;
    transition: 0.3s all ease;
    transform: scale(1);
    border: none;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border: none;
        background-color: ${(props) => props.theme.colors.success};
        color: ${(props) => props.theme.colors.background};
      }
    }
    &:focus {
      border: 0;
      outline: none;
      transform: scale(0.95);
    }
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const CheckMark = styled(InputField)`
  flex-direction: row-reverse;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  cursor: pointer;
  user-select: none;
  margin: 20px 0;

  label {
    cursor: pointer;
    margin: 0;
    font-size: 0.9em;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    left: 0;
  }

  .checkmark {
    height: 35px;
    width: 35px;
    margin-right:15px;
    border-radius: 10px;
    border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    z-index: -1;
    transition: 0.2s ease-in border, 0.1s ease-in background-color;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      input ~ .checkmark {
        border-color: ${(p) => p.theme.colors.foreground};
      }
    }
  }
  &:active {
    input ~ .checkmark {
      border-color: ${(p) => p.theme.colors.foreground};
    }
  }
  &:focus,
  &:focus-within {
    input ~ .checkmark {
      border-color: ${(p) => p.theme.colors.foreground};
    }
  }

  input:checked {
    ~ .checkmark {
      background-color: ${(p) => p.theme.colors.accent};
      border-color: ${(p) => p.theme.colors.background};
    }
    &:active,
    &:focus {
      ~ .checkmark {
        border-color: ${(p) => p.theme.colors.foreground};
      }
    }
  }
`;
