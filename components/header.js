import Link from "next/link";
import styled from "styled-components";

export default function Header(props) {
  return (
    <TopHeader>
      <Link href="/home">
        <Logotype>ANTÍTESIS FILMS</Logotype>
      </Link>
      <Desc>CASA PRODUCTORA EN LA CIUDAD DE MÉXICO</Desc>
      <NavList>
        <Link href="/nosotros">
          <a>Nosotros</a>
        </Link>
        <Link href="/renta">
          <a>Renta</a>
        </Link>
        <Link href="/contacto">
          <a>Contacto</a>
        </Link>
      </NavList>
    </TopHeader>
  );
}

const TopHeader = styled.header`
  display: ${props => (props.hidden ? "none" : "flex")};
  display: grid;
  grid-template-columns: 1fr 1fr 1.5fr;
  padding: 2% 5% 0 5%;
  align-items: flex-start;
`;

const Logotype = styled.p`
  display: flex;
  grid-column: 1;
  font-size: 2rem;
  max-width: 130px;
  margin:0;
`;

const Desc = styled.p`
  display: flex;
  grid-column: 2;
  margin:0;
  font-size:1.3rem;
  max-width: 330px;
`;

const NavList = styled.nav`
  display: flex;
  justify-content: space-between;
  grid-column: 3;
  a{
    margin:0;
    color:black;
    text-decoration:none;
    font-size:1.3rem;
    text-transform:uppercase;
  }
`;
