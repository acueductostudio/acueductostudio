import React from "react";
import styled from "styled-components";
import TitleSection from "components/shared/TitleSection";
import Recursos from "components/shared/Recursos";

const Products = ({ intro }: { intro: any }) => {
  return (
    <ProductsSection>
      <TitleSection {...intro} borderTop>
        <Recursos/>
      </TitleSection>
    </ProductsSection>
  );
};

export default React.memo(Products);

const ProductsSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  .separator {
    margin-top: 20px;
  }
`;
