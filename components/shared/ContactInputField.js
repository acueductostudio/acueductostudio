import styled from "styled-components";

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  label {
    font-size: 0.8em;
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
  position: relative;
  padding-left: 45px;
  cursor: pointer;
  user-select: none;
  margin: 20px 0;

  label {
    cursor: pointer;
    margin: 7px 0 0;
    font-size: 0.9em;
  }

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    left: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 35px;
    width: 35px;
    border-radius: 10px;
    border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
    z-index: -1;
    transition: 0.2s ease border;
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      input ~ .checkmark {
        border-color: ${(p) => p.theme.colors.foreground};
      }
    }
  }
  &:active,
  &:focus {
    input ~ .checkmark {
      border-color: ${(p) => p.theme.colors.foreground};
      background-color: ${(p) => p.theme.colors.accent};
    }
  }

  input:checked {
    ~ .checkmark {
      background-color: ${(p) => p.theme.colors.accent};
      border-color: ${(p) => p.theme.colors.background};
    }
    &:active {
      ~ .checkmark {
        background-color: ${(p) => p.theme.colors.background} !important;
        border-color: ${(p) => p.theme.colors.foreground_lowest};
      }
    }
  }
`;
