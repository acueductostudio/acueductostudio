import Link from "next/link";
import styled from "styled-components";
import {useEffect} from "react";

export default function Header(props) {
  return (
    <TopHeader hidden={props.hidden}>
      <Link href="/home">
        <Logotype>ANTÍTESIS FILMS</Logotype>
      </Link>
      <Desc>CASA PRODUCTORA EN LA CIUDAD DE MÉXICO</Desc>
      <NavList>
        <Link href="/nosotros" prefetch={true}>
          <a>Nosotros</a>
        </Link>
        <Link href="/renta" prefetch={true}>
          <a>Renta</a>
        </Link>
        <Link href="/contacto" prefetch={true}>
          <a>Contacto</a>
        </Link>
      </NavList>
    </TopHeader>
  );
}

const TopHeader = styled.header`
  display: ${props => (props.hidden ? "none" : "flex")};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-start;
  letter-spacing: 0.05rem;
  font-size: 1.3rem;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 2% 4% 0 4%;
`;

const Logotype = styled.p`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
`;

const Desc = styled.p`
  display: flex;
  grid-column: 4 / span 4;
  margin: 0;
  max-width: 330px;
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  grid-column: 8 / span 5;
  a {
    margin: 0;
    color: black;
    text-decoration: none;
    text-transform: uppercase;
  }
`;
