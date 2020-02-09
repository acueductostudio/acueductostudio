import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { P } from "components/shared/Dangerously";
import createMarkup from "utils/createMarkup";

import Apps from "public/assets/img/layout/icons/apps.svg";
import DigitalProducts from "public/assets/img/layout/icons/products.svg";
import Branding from "public/assets/img/layout/icons/branding.svg";
import Marketing from "public/assets/img/layout/icons/marketing.svg";

const productIconArray = [Apps, DigitalProducts, Branding, Marketing];

const ProductContainer = ({ index, title, p }) => {
  const ProductIcon = productIconArray[index];
  return (
    <Product>
      <Fade>
        <div>
          <ProductIcon />
          <h2 dangerouslySetInnerHTML={createMarkup(title)} />
        </div>
      </Fade>
      <P>{p}</P>
    </Product>
  );
};

const Products = ({list}) => {
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
  display: flex;
  flex-direction:column;
  width: 100%;
  position: relative;
  margin-top: 10%;
  div{
    display: flex;
    align-items: center;
  }
  h2{
    display: inline-block;
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
    flex-grow: 2;
    max-width:390px;
  }
  svg {
    max-width: 52px;
    display: inline-block;
    margin-right:5%;
    * {
      vector-effect: non-scaling-stroke;
      stroke-width: ${props => props.theme.stroke};
      fill: none;
      stroke-linecap: round;
      stroke-linejoin: round;
      transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
    }
  }
`;

const ProductsList = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  ${Product} {
    :nth-of-type(1),
    :nth-of-type(3),
    :nth-of-type(5) {
      grid-column: 3 / span 4;
    }

    :nth-of-type(2),
    :nth-of-type(4),
    :nth-of-type(6) {
      grid-column: 7 / span 4;
    }

    :nth-of-type(1),
    :nth-of-type(2) {
      margin-top: 0;
    }
  }
  @media (max-width: 1350px) {
    ${Product} {
      :nth-of-type(1),
      :nth-of-type(3),
      :nth-of-type(5) {
        grid-column: 2 / span 5;
      }
      :nth-of-type(2),
      :nth-of-type(4),
      :nth-of-type(6) {
        grid-column: 7 / span 5;
      }
      div {
        flex-direction: column;
        align-items: flex-start;
      }
      h2 {
        margin-top: 10px;
      }
      svg {
        height: auto;
      }
    }
  }
  @media (max-width: 1000px) {
    ${Product} {
      p {
        font-size: 1.4rem;
      }
    }
  }
  @media (max-width: 600px) {
    ${Product} {
      :nth-of-type(1),
      :nth-of-type(3),
      :nth-of-type(5) {
        grid-column: 1 / span 6;
      }
      :nth-of-type(2),
      :nth-of-type(4),
      :nth-of-type(6) {
        grid-column: 7 / span 6;
      }
    }
  }
`;

const ProductsSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
