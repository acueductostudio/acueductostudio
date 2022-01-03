import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import TitleSection from "components/shared/TitleSection";
import { P, H2 } from "components/shared/Dangerously";

import {
  Apps,
  DigitalProducts,
  Strategy,
  Marketing,
} from "components/shared/Icons";

const productIconArray = [Strategy, Apps, DigitalProducts, Marketing];
const letterArray = ["a", "b", "c", "d"];

const Products = ({
  intro,
  products,
  longer,
}: {
  intro: any;
  products: Array<object>;
  longer: boolean;
}) => {
  return (
    <ProductsSection>
      <TitleSection {...intro} borderTop />
      <ProductsList>
        {products &&
          products.map((t: { title: string; p: string }, index) => {
            const ProductIcon = productIconArray[index];
            const letter = letterArray[index];
            return (
              <Product key={"product" + index} longer={longer}>
                <Fade triggerOnce>
                  <span>{letter}.</span>
                  <ProductIcon />
                  <div>
                    <H2>{t.title}</H2>
                    <P>{t.p}</P>
                  </div>
                </Fade>
              </Product>
            );
          })}
      </ProductsList>
    </ProductsSection>
  );
};

export default React.memo(Products);

const Product = styled.div<{ longer: boolean }>`
  padding: 10%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-left: 0;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(1.05);
        p {
          color: ${(props) => props.theme.colors.foreground};
        }
      }
    }
  }
  h2 {
    font-size: 2.5rem;
    opacity: 1;
    line-height: 125%;
    margin-bottom: 16px;
    font-weight: 200;
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  span {
    color: ${(props) => props.theme.colors.accent_smalltext};
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;

    color: ${(props) => props.theme.colors.foreground_low};
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  svg {
    max-width: 100px;
    margin: ${(props) => (props.longer ? "10%" : "22%")} auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    will-change: transform;
    * {
      vector-effect: non-scaling-stroke;
      stroke-linejoin: round;
      stroke-width: ${(props) => props.theme.stroke};
      stroke-linecap: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 550px) {
    padding: 8%;
    h2 {
      font-size: 1.8rem;
    }
    svg {
      max-width: 70px;
    }
  }
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  ${Product} {
    :nth-of-type(1) {
      grid-column-start: 2;
      border-left: ${(props) =>
        props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
    }
    :nth-of-type(2) {
      border-right: 0;
    }
    :nth-of-type(3) {
      margin-top: -2px;
      border-right: 0;
    }
    :nth-of-type(4) {
      border-top: 0;
      border-left: ${(props) =>
        props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    ${Product} {
      :nth-of-type(1) {
        grid-column-start: 1;
        border-left: 0;
      }
      :nth-of-type(4) {
        border-left: 0;
        border-right: 0;
      }
      :nth-of-type(3) {
        border-right: ${(props) =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
    }
  }
`;

const ProductsSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;
