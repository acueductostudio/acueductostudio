import Link from "next/link";
import styled, { css } from "styled-components";
import Fade from "react-reveal/Fade";
import Hoverable from "./styles/BorderedLink";
import { useRouter } from "next/router";

export default function Nav(props) {
  let t = props.locale.nav;
  let l = props.locale.legal_nav;

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
          <NavLandscapeHider>
            Please turn your phone around to see the menu
          </NavLandscapeHider>
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
              <Link href={l.cookies.link} passHref>
                <Hoverable>{l.cookies.title}</Hoverable>
              </Link>
              <span> | </span>
              <Link href={l.privacy.link} passHref>
                <Hoverable>{l.privacy.title}</Hoverable>
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

const NavLandscapeHider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${props => props.theme.colors.background};
  z-index: 1;
  pointer-events: none;
  opacity: 0;
  font-size: 0;
  transition: opacity 0.5s ease;
  @media (max-height: 450px) {
    pointer-events: auto;
    opacity: 1;
    font-size: inherit;
    transition: none;
  }
`;

const NavLink = styled.a`
  font-weight: 200;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  background-image: ${props =>
    props.active
      ? `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0.5)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`
      : `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`};
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 100%;
  &:hover {
    background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
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
  max-height: 120px;
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
    display: grid;
    padding: 4% 8%;
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
      position: absolute;
      grid-row: last;
      margin-top: 0;
      margin-bottom: 5.5%;
      bottom: 0;
      align-self: flex-end;
      justify-content: flex-end;
    }
  }
  @media (max-width: 350px) {
    ${Registered} {
      margin-bottom: 6%;
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
  @media (max-width: 1200px) {
    grid-column-start: 4;
  }
  @media (max-width: 800px) {
    grid-column-start: 3;
  }
  @media (max-width: 800px), (max-height: 660px) {
    ul li {
      font-size: 5rem;
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
  @media (max-width: 450px), (max-height: 600px) {
    ul li {
      font-size: 3.5rem;
      padding-bottom: 10px;
      span {
        font-size: 1.1rem;
        bottom: 4px;
        left: -25px;
      }
    }
  }

  @media (max-height: 450px) {
    grid-column-end: span 7;
    padding-top: 10%;
    ul {
      column-count: 2;
      li {
        font-size: 3.5rem;
        /* span {
          font-size: 1.1rem;
          bottom: 4px;
          left: -25px;
        } */
      }
    }
  }
`;

const NavWrapper = styled.div`
  opacity: 0;
  pointer-events: none;
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
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
  @media (max-width: 450) {
    padding-bottom: 20%;
  }
`;
