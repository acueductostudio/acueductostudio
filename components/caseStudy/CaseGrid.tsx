import React, { ReactNode } from "react";
import styled from "styled-components";

const CaseGrid = ({
  children,
  reverse,
  early,
}: {
  children: ReactNode;
  reverse?: boolean;
  early?: number;
}) => {
  return (
    <Case reverse={reverse} early={early}>
      <Img>{children[0]}</Img>
      <Info>{children[1]}</Info>
    </Case>
  );
};

export default CaseGrid;

const Img = styled.div`
  grid-row: 1 / span 1;
  overflow: hidden;
  position: relative;
`;

export const Info = styled.div`
  padding: 10% 10% 10% 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  grid-row: 1 / span 1;
`;

export const Case = styled.div<{ reverse: boolean; early: number }>`
  display: grid;
  border-top: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  a {
    cursor: pointer;
  }
  ${Info} {
    grid-column-start: ${(p) => (p.reverse ? 1 : 2)};
  }
  ${Img} {
    grid-column-start: ${(p) => (p.reverse ? 2 : 1)};
  }
  @media (max-width: ${(p) => (p.early ? p.early : 700)}px) {
    display: flex;
    flex-direction: column;
    ${Info} {
      padding: 0 5% 5% 5%;
    }
  }
`;
