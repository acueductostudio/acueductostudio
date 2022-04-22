import React, { useContext } from "react";
import styled from "styled-components";
import Picture from "components/caseStudy/shared/Picture";
import Link from "next/link";
import LangContext from "utils/LangContext";
import { P } from "components/shared/Dangerously";


const Products = () => {
  const context = useContext(LangContext);
  let t = context.resources; 
  return ( 
    <>
      <P className="separator">{t.p}</P>
      <RecursoCont>
        <Link href="/podcast">
          <a>
            <Picture
              src="/assets/img/layout/recursopodcast.jpg"
              width={120}
              height={120}
              alt="cuando el río suena"
            />
            <span>podcast</span>
          </a>
        </Link>
        <Link href="/articulos">
          <a>
            <Picture
              src="/assets/img/layout/recursoarticulo.jpg"
              width={120}
              height={120}
              alt="artículos"
            />
            <span>{t.articles}</span>
          </a>
        </Link>
      </RecursoCont>
    </>
  );
};

export default React.memo(Products);

const RecursoCont = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  & > a {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 10%;
    text-decoration: none;
    & > div {
      border-radius: 25px;
      overflow: hidden;
      box-shadow: 0px 0px 20px rgba(2, 3, 3, 0.2);
      border: 2px solid transparent;
      transition: 0.3s ease all;
      & > div {
        display: block !important;
      }
    }
    &:hover {
      & > div {
        border-color: ${(p) => p.theme.colors.accent};
      }
    }
    span {
      margin-top: 10px;
      display: flex;
      font-weight: 200;
      font-size: 2rem;
    }
  }
`;

const ProductsSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  .separator {
    margin-top: 20px;
  }
`;
