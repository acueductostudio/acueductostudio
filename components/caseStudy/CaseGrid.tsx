import React from "react";
import styled from "styled-components";

const CaseGrid = ({ children }) => {
  return (
    <Case>
      {children[0]}
      <Info>{children[1]}</Info>
    </Case>
  );
};

export default CaseGrid;

export const Info = styled.div`
  padding: 10% 10% 10% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Case = styled.div`
  display: grid;
  border-top: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  a {
    cursor: pointer;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    ${Info} {
      padding: 0 5% 5% 5%;
    }
  }
`;
