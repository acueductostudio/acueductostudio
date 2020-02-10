import styled from "styled-components";
import { useLocaleContext } from "utils/LangContext";
import Fade from "react-reveal/Fade";
import TitleSection from "components/shared/TitleSection";
import createMarkup from "utils/createMarkup";

import Apps from "public/assets/img/layout/icons/apps.svg";
import DigitalProducts from "public/assets/img/layout/icons/products.svg";
import Branding from "public/assets/img/layout/icons/branding.svg";
import Marketing from "public/assets/img/layout/icons/marketing.svg";

const productIconArray = [Apps, DigitalProducts, Branding, Marketing];
const letterArray = ["a", "b", "c", "d"];

const ProductContainer = ({
  index,
  title,
  p,
  pitchDescription,
  showLongText
}) => {
  const ProductIcon = productIconArray[index];
  const letter = letterArray[index];
  return (
    <Product showLongText={showLongText}>
      <Fade>
        <span>{letter}.</span>
        <ProductIcon />
        <div>
          <h2 dangerouslySetInnerHTML={createMarkup(title)} />
          <p
            dangerouslySetInnerHTML={createMarkup(
              showLongText && pitchDescription ? pitchDescription : p
            )}
          />
        </div>
      </Fade>
    </Product>
  );
};

const Products = ({ showLongText }) => {
  const context = useLocaleContext();
  const { intro, products } = context.pitch_page.products_section;
  return (
    <ProductsSection>
      <TitleSection {...intro} borderTop />
      <ProductsList>
        {products.map((product, index) => (
          <ProductContainer
            key={"product" + index}
            index={index}
            {...product}
            showLongText={showLongText}
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
  justify-content:space-between;
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
    margin:${props => (props.showLongText ? "10%" : "22%")} auto;
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
    :nth-of-type(2) {
      border-right: 0;
    }
    :nth-of-type(3) {
      margin-top: -2px;
      border-right: 0;
    }
    :nth-of-type(4) {
      border-top: 0;
      border-left: ${props =>
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
        border-right: ${props =>
          props.theme.stroke +
          " solid " +
          props.theme.colors.foreground_lowest};
      }
    }
  }
`;

const ProductsSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
