import React from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import { Fade } from "react-awesome-reveal";
import BorderLink from "components/shared/BorderedLink";
import { useRouter } from "next/router";

export default function Nav(props) {
  let t = props.t.nav;
  let l = props.t.legal_nav;

  const ActiveLink = ({ children, href, as, locale }) => {
    const router = useRouter();
    const child = React.Children.only(children);
    return (
      <Link {...props} href={href} as={as} passHref locale={locale}>
        {React.cloneElement(child, { active: router.pathname === href })}
      </Link>
    );
  };

  return (
    <NavWrapper open={props.isOpen} id="Nav">
      {props.isOpen && (
        <>
          <NavList onClick={props.closeNav}>
            <ul>
              {t.map((item, index) => (
                <li key={"item" + index}>
                  <Fade delay={200 + index * 50}>
                    <span>0{index + 1}</span>
                    <ActiveLink
                      href={item.link}
                      as={item.as ? item.as : item.link}
                      locale={props.locale}
                    >
                      <NavLink active={undefined}>{item.title}</NavLink>
                    </ActiveLink>
                  </Fade>
                </li>
              ))}
            </ul>
          </NavList>
          <BottomNav>
            <Registered>© MMXX</Registered>
            <Social>
              <Hoverable
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/acueducto.studio/"
              >
                instagram
                <span>ig</span>
              </Hoverable>
              <Hoverable
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/AcueductoStudio/"
              >
                twitter
                <span>tw</span>
              </Hoverable>
              <Hoverable
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/acueducto.studio/"
              >
                facebook
                <span>fb</span>
              </Hoverable>
              <Hoverable
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/acueductostudio/"
              >
                linkedin
                <span>ln</span>
              </Hoverable>
            </Social>
            <Policies onClick={props.closeNav}>
              <Link
                href={l.cookies.link}
                as={l.cookies.as ? l.cookies.as : l.cookies.link}
                locale={props.locale}
                passHref
              >
                <Hoverable>{l.cookies.title}</Hoverable>
              </Link>
              <span> | </span>
              <Link
                href={l.privacy.link}
                as={l.privacy.as ? l.privacy.as : l.privacy.link}
                locale={props.locale}
                passHref
              >
                <Hoverable>{l.privacy.title}</Hoverable>
              </Link>
            </Policies>
          </BottomNav>
        </>
      )}
    </NavWrapper>
  );
}

const Hoverable = styled.a`
  ${BorderLink({ showLink: false })}
`;

const NavLink = styled.a<{ active: boolean }>`
  font-weight: 300;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  background-image: ${(props) =>
    props.active
      ? `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0.5)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`
      : `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`};
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 90%;
  &:hover,
  &:focus {
    background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
  }
`;

const Registered = styled.div`
  grid-column: 1 / span 2;
  pointer-events: none;
`;

const Policies = styled.div`
  grid-column: 8 / span 5;
  text-align: right;
  span {
    opacity: 0.5;
  }
`;

const Social = styled.div`
  grid-column: 5 / span 3;
  span {
    display: none;
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
  border-top: ${(props) =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  position: absolute;
  bottom: 0;
  padding: 2.5% 4%;
  width: 100%;
  color: ${(props) => props.theme.colors.foreground_low};
  font-weight: 100;
  max-height: 120px;
  @media (max-width: 1400px) {
    ${Social} {
      grid-column: 4 / span 4;
    }
  }
  @media (max-width: 1250px) {
    font-size: 1.5rem;
  }
  @media (max-width: 1100px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: none;
    }
    ${Policies} {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      a {
        display: inline;
        background-position: 0 2rem;
      }
    }
    ${Social} {
      display: flex;
      text-align: center;
      align-items: center;
      font-size: 0;
      ${Hoverable}:hover {
        background-image: none;
      }
      span {
        font-size: 1.5rem;
        display: flex;
        border: 2px solid ${(props) => props.theme.colors.foreground_low};
        border-radius: 50%;
        width: 35px;
        height: 35px;
        align-items: center;
        justify-content: center;
        padding-bottom: 2px;
        padding-left: 1px;
        transition: 0.3s ease-in border-color;
        &:focus,
        &:active {
          border-color: ${(p) => p.theme.colors.accent};
        }
      }
    }
  }
  @media (max-width: 600px), (max-height: 700px) {
    display: flex;
    flex-flow: column-reverse;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 0;
    position: relative;
    width: 100%;
    padding: 2.4% 0 0 0;
    max-height: unset;
    height: auto;
    flex: 0 0 auto;
    ${Policies} {
      align-items: flex-start;
      a {
        padding-bottom: 15px;
      }
    }
    ${Social} {
      display: flex;
      padding-top: 10px;
    }
    ${Registered} {
      font-size: 1.2rem;
      opacity: 0.7;
      padding-top: 15px;
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
      font-size: 5rem;
      position: relative;
      padding-bottom: 4%;
      span {
        color: ${(props) => props.theme.colors.accent};
        font-size: 1.5rem;
        position: absolute;
        left: -40px;
        top: 38px;
        pointer-events: none;
      }
    }
  }
  @media (max-width: 1400px) {
    grid-column-start: 4;
  }
  @media (max-width: 600px), (max-height: 700px) {
    width: 100%;
    position: relative;
    flex: 0 0 auto;
    ul {
      display: flex;
      flex-direction: column;
      li {
        font-size: 4.5rem;
        display: inline-block;
        flex-direction: column;
        span {
          position: absolute;
          left: 0;
          top: 0px;
        }
      }
    }
  }
  @media (max-width: 400px) {
    ul li {
      font-size: 4rem;
      span {
        top: 0;
        font-size: 1.2rem;
      }
    }
  }
`;

const NavWrapper = styled.div<{ open: boolean }>`
  opacity: 0;
  pointer-events: none;
  z-index: 9;
  width: calc(100% - 40px);
  height: calc(100% - 40px);
  background-color: ${(props) => props.theme.colors.background};
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
  border-radius: 57px;
  a {
    text-decoration: none;
  }
  ${(props) =>
    props.open &&
    css`
      opacity: 1;
      pointer-events: auto;
      transition: opacity 0.3s ease;
    `}
  @media(max-width:1530px) {
    border-radius: 38px;
  }
  @media (max-width: 800px) {
    ${NavLink} {
      background-position: 0 93%;
    }
  }
  @media (max-height: 700px) {
    padding: 5% 4% 20px 4%;
  }
  @media (max-width: 600px), (max-height: 700px) {
    border-radius: 0;
    display: flex;
    flex: 0 0 auto;
    align-items: flex-start;
    justify-content: space-between;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
  }
  @media (max-width: 600px) {
    padding: 20% 4% 20px 4%;
  }
  @media (max-height: 439px) {
    padding-top: 13%;
  }
`;
