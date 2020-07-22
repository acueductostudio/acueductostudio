import styled from "styled-components";

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
  label {
    font-size: 0px;
  }
  span {
    color: ${(p) => p.theme.colors.error};
    font-size: inherit;
  }
  input {
    border-radius: 0;
    border: 0;
    padding: 16px;
    width: 100%;
    height: 100%;
    font-weight: 100;
    &[type="text"],
    &[type="email"] {
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
    &[type="submit"] {
      background-color: ${(p) => p.theme.colors.accent};
      color: ${(p) => p.theme.colors.foreground};
      max-height: 61px;
      cursor: pointer;
      transition: 0.4s all ease;
      @media (hover: hover) and (pointer: fine) {
        &:hover {
          background-color: ${(props) => props.theme.colors.success};
          color: ${(props) => props.theme.colors.background};
        }
      }
    }
  }
`;

export default InputField;
