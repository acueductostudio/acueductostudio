import Link from "next/link";
import styled from "styled-components";
import Logo from "./../static/assets/img/layout/logo.svg";

export default function Header({ hasLoaded, headerTitle, isOpen, closeNav }) {
  return (
    <TopHeader reveal={hasLoaded}>
      <Link href="/">
        <Logotype onClick={closeNav}>
          <h1>acueducto</h1>
          <Logo />
        </Logotype>
      </Link>
      <HeaderTitle hide={isOpen}>{headerTitle}</HeaderTitle>
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
  opacity: ${props => (props.hide ? 0 : 1)};
  transition: opacity 0.2s ease;
  @media (max-height: 400px) and (min-width: 800px) {
    top: 40px;
  }
`;

const TopHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  padding: 60px 80px 60px 50px;
  z-index: 12;
  margin: 0px auto;
  max-width: 1500px;
  pointer-events: none;
  mix-blend-mode: exclusion;
  opacity: ${props => (props.reveal ? 1 : 0)};
  transition: opacity 0.3s ease 0.3s;
  @media (max-width: 800px) {
    flex-direction: column;
    ${HeaderTitle} {
      margin-top: 5px;
      transform: none;
      left: 0;
      position: relative;
      top: 0;
    }
  }
  @media (max-width: 600px) {
    padding-left: calc(20px + 5%);
    ${HeaderTitle} {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 450px) {
    padding-top: 40px;
    ${HeaderTitle} {
      max-height: 13px;
      overflow: hidden;
      text-indent: -145px;
    }
  }
`;

const Logotype = styled.a`
  display: flex;
  grid-column: 1 / span 2;
  max-width: 130px;
  margin: 0;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  pointer-events: auto;
  h1 {
    font-size: 0;
  }
  svg {
    path {
      fill: ${props => props.theme.colors.white};
    }
  }
`;
