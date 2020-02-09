import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { P } from "components/shared/Dangerously";
import createMarkup from "utils/createMarkup";

import Apps from "public/assets/img/layout/icons/apps.svg";
import DigitalProducts from "public/assets/img/layout/icons/products.svg";
import Branding from "public/assets/img/layout/icons/branding.svg";
import Marketing from "public/assets/img/layout/icons/marketing.svg";

const productIconArray = [Apps, DigitalProducts, Branding, Marketing];
const letterArray = ["a", "b", "c", "d"];

const ProductContainer = ({ index, title, p }) => {
  const ProductIcon = productIconArray[index];
  const letter = letterArray[index];
  return (
    <Product>
      <Fade>
        <span>{letter}.</span>
        <ProductIcon />
        <h2 dangerouslySetInnerHTML={createMarkup(title)} />
        <p dangerouslySetInnerHTML={createMarkup(p)} />
      </Fade>
    </Product>
  );
};

const Products = ({ list }) => {
  return (
    <ProductsSection>
      <ProductsList>
        {list.map((product, index) => (
          <ProductContainer
            key={"product" + index}
            index={index}
            {...product}
          />
        ))}
      </ProductsList>
    </ProductsSection>
  );
};

export default React.memo(Products);

const Product = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  border: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-left: 0;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      svg {
        transform: scale(1.05);
        /* .accentdisco {
          transform: translate(18px, -4px) scale(0.92);
        }
        .accent {
          transform: translateY(-10px) scale(1.02);
        }
        .accentcubo {
          transform: translate(-4px, -9px);
        }
        .accentrock {
          transform: translateY(-10px) scale(1.05);
        } */
      }
      p {
        color: ${props => props.theme.colors.foreground};
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
    color: ${props => props.theme.colors.accent_smalltext};
    font-size: 1.5rem;
  }
  p {
    font-size: 1.5rem;

    color: ${props => props.theme.colors.foreground_low};
    transition: color 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  }
  svg {
    max-width: 100px;
    margin: 10% auto;
    display: block;
    transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    * {
      vector-effect: non-scaling-stroke;
      stroke-width: ${props => props.theme.stroke};
      /* stroke: ${props => props.theme.colors.foreground}; */
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
    /* .accent,
    .accentdisco,
    .accentcubo,
    .accentrock {
      stroke: ${props => props.theme.colors.accent};
      will-change: transform;
    } */
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
      border-left: ${props =>
        props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
    }
    :nth-of-type(3) {
      margin-top:-2px;
      border-right:0;
    }
    :nth-of-type(4) {
      border-top:0;
      border-left: ${props =>
        props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
    }
  }
  @media (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
    ${Product} {
      :nth-of-type(1) {
        grid-column-start: 1;
      }
      :nth-of-type(4) {
        border-left:0;
      }
      :nth-of-type(3) {
        border-right: ${props =>
        props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
      }
    }
  }

`;

const ProductsSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
