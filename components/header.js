import Link from "next/link";
import styled from "styled-components";
import Logo from "./../static/assets/img/layout/logo.svg";

export default function Header() {
  return (
    <TopHeader>
      <Link href="/">
        <Logotype>
          <h1>acueducto</h1>
          <Logo />
        </Logotype>
      </Link>
    </TopHeader>
  );
}

const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 60px 50px;
  z-index: 12;
  margin: 0px auto;
  max-width: 1500px;
  pointer-events:none;
  mix-blend-mode: exclusion;
`;

const Logotype = styled.a`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  pointer-events:auto;
  h1{
    font-size:0;
  }
  svg {
    path {
      fill: ${props => props.theme.colors.white};
    }
  }
`;