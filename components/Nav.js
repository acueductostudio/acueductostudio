import Link from "next/link";
import styled, { css } from "styled-components";
import Fade from "react-reveal/Fade";
import Hoverable from "./styles/BorderedLink";
import { useRouter } from "next/router";

export default function Nav(props) {
  let t = props.locale.nav;

  const ActiveLink = ({ children, ...props }) => {
    const router = useRouter();
    const child = React.Children.only(children);
    return (
      <Link {...props} passHref>
        {React.cloneElement(child, { active: router.pathname === props.href })}
      </Link>
    );
  };

  const scrollToBottom = e => {
    e.preventDefault();
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  let navItems = t.map(function(item, index) {
    if (item.title === "contact" || item.title === "contacto") {
      return (
        <Fade delay={200 + index * 50} key={"item" + index}>
          <li>
            <span>0{index + 1}</span>
            <NavLink onClick={scrollToBottom}>{item.title}</NavLink>
          </li>
        </Fade>
      );
    }
    return (
      <Fade delay={200 + index * 50} key={"item" + index}>
        <li>
          <span>0{index + 1}</span>
          <ActiveLink href={item.link}>
            <NavLink>{item.title}</NavLink>
          </ActiveLink>
        </li>
      </Fade>
    );
  });
  return (
    <NavWrapper open={props.isOpen}>
      {props.isOpen ? (
        <>
          <NavList onClick={props.closeNav} open={props.isOpen}>
            <ul>{navItems}</ul>
          </NavList>
          <BottomNav>
            <Registered>© MMXIX</Registered>
            <Social>
              <Hoverable
                target="_blank"
                href="https://www.facebook.com/acueducto.co/"
              >
                facebook
              </Hoverable>
              <Hoverable
                target="_blank"
                href="https://www.instagram.com/acueducto.co/"
              >
                instagram
              </Hoverable>
              <Hoverable
                target="_blank"
                href="https://www.linkedin.com/company/acueducto-co/"
              >
                linkedin
              </Hoverable>
            </Social>
            <Policies onClick={props.closeNav}>
              <Link href="/cookies">
                <Hoverable>cookie policy</Hoverable>
              </Link>
              <span> | </span>
              <Link href="/privacy">
                <Hoverable>privacy policy</Hoverable>
              </Link>
            </Policies>
          </BottomNav>
        </>
      ) : (
        ""
      )}
    </NavWrapper>
  );
}

const NavLink = styled.a`
  font-size: 6rem;
  font-weight: 200;
  transition: box-shadow 250ms ease;
  cursor: pointer;
  box-shadow: ${props =>
    props.active
      ? `${props.theme.colors.background} 0px 55px inset, ${props.theme.colors.foreground_lowest} 0px 57px inset;`
      : `${props.theme.colors.background} 0px 55px inset, ${props.theme.colors.background} 0px 57px inset`};
  &:hover {
    box-shadow: ${props => props.theme.colors.background} 0px 55px inset,
      ${props => props.theme.colors.accent} 0px 57px inset;
  }
`;

const Registered = styled.div`
  grid-column: 1 / span 2;
  pointer-events: none;
`;

const Policies = styled.div`
  grid-column: 9 / span 4;
  text-align: right;
  span {
    opacity: 0.5;
  }
`;

const Social = styled.div`
  grid-column: 5 / span 4;
  @media (max-width: 1200px) {
    grid-column-start: 4;
  }
  a {
    margin-right: 10%;
    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const BottomNav = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1fr;
  grid-gap: 2.2rem;
  display: grid;
  border-top: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  position: absolute;
  bottom: 0;
  padding: 2.5% 4%;
  width: 100%;
  color: ${props => props.theme.colors.foreground_low};
  font-weight: 100;
  @media (max-width: 950px) {
    font-size: 1.5rem;
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    span {
      display: none;
    }
    ${Social}, ${Policies} {
      display: flex;
      flex-direction: column;
      & > * :not(:last-child) {
        padding-bottom: 10px;
        margin-right: 0;
      }
    }
    ${Social} {
      text-align: center;
      align-items: center;
    }
  }
  @media (max-width: 600px) {
    padding: 4% 8%;
  }
  @media (max-width: 450px) {
    display: grid;
    grid-gap: 0;
    ${Policies} {
      grid-column: 1 / span 12;
      grid-row: 1;
      flex-direction: row;
      justify-content: space-between;
      & > * :not(:last-child) {
        padding-bottom: 20px;
      }
      span {
        display: flex;
      }
    }
    ${Social} {
      grid-column: 1 / span 8;
      display: flex;
      text-align: left;
      flex-direction: row;
      grid-row: 2;
      flex-wrap: wrap;
      width: 100%;
      margin-bottom: -14%;
      & > * :not(:last-child) {
        padding-bottom: 20px;
      }
      a {
        width: 50%;
        &:nth-child(3) {
          padding-left: 50%;
          width: 100%;
        }
      }
    }
    ${Registered} {
      grid-column: 1 / span 12;
      margin-top: 3%;
      font-size: 1.2rem;
      opacity: 0.7;
    }
  }
`;

const NavList = styled.nav`
  grid-column: 5 / span 5;
  flex-direction: column;
  display: flex;
  ul {
    list-style: none;
    li {
      font-size: 6rem;
      line-height: 160%;
      position: relative;
      span {
        color: ${props => props.theme.colors.accent};
        font-size: 1.5rem;
        position: absolute;
        left: -55px;
        bottom: -10px;
        pointer-events: none;
      }
    }
  }
  @media (max-height: 700px) {
    ul li {
      line-height: 130%;
    }
  }
  @media (max-width: 1200px) {
    grid-column-start: 4;
  }
  @media (max-width: 800px) {
    ul li {
      font-size: 5rem;
      a {
        font-size: 5rem;
      }
      span {
        font-size: 1.3rem;
        left: -35px;
        bottom: -9px;
      }
    }
  }
  @media (max-width: 500px) {
    grid-column-start: 3;
  }
  @media (max-width: 450px) {
    ul li {
      font-size: 3.5rem;
      padding-bottom: 10px;
      a {
        font-size: 3.5rem;
      }
      span {
        font-size: 1.1rem;
        bottom: 4px;
        left: -25px;
      }
    }
  }
`;

const NavWrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 42px);
  background-color: ${props => props.theme.colors.background};
  position: fixed;
  left: 20px;
  top: 20px;
  right: 20px;
  bottom: 20px;
  display: grid;
  margin: 0 auto;
  max-width: 1500px;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  padding: 0 4% 6% 4%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  transition: opacity 0.3s ease 150ms;
  a {
    text-decoration: none;
  }
  ${props =>
    props.open &&
    css`
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s ease;
    `}
  @media (max-width: 800px) {
    padding-bottom: 15%;
  }
  @media (max-width: 450){
    padding-bottom: 20%;
  }
`;
