import Link from "next/link";
import styled from "styled-components";
import Logo from "./../static/assets/img/layout/logo.svg";

export default function Header({hasLoaded, headerTitle}) {
  return (
    <TopHeader reveal={hasLoaded}>
      <Link href="/">
        <Logotype>
          <h1>acueducto</h1>
          <Logo />
        </Logotype>
      </Link>
      <HeaderTitle>{headerTitle}</HeaderTitle>
    </TopHeader>
  );
}

const HeaderTitle = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  font-size: 1.4rem;
  letter-spacing: 4px;
  z-index: 2;
  top: 66px;
  mix-blend-mode: exclusion;
`;


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
  opacity: ${props => props.reveal ? 1 : 0};
  transition: opacity .3s ease .3s;
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