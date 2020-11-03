import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { useRouter } from "next/router";

export default function FooterNav({ nav }) {
  const { main, secondary } = nav;

  const ActiveLink = ({ children, ...props }) => {
    const router = useRouter();
    const child = React.Children.only(children);
    return (
      <Link {...props} passHref>
        {React.cloneElement(child, { active: router.pathname === props.href })}
      </Link>
    );
  };

  return (
    <DarkNav>
      <LeftNavs>
        <MainNavList>
          {main.map(function (item, index) {
            return (
              <Fade triggerOnce delay={200 + index * 50} key={"item" + index}>
                <li>
                  <ActiveLink href={item.link}>
                    <NavLinkConstant>{item.title}</NavLinkConstant>
                  </ActiveLink>
                </li>
              </Fade>
            );
          })}
        </MainNavList>
        <SecondaryNavList>
          {secondary.map(function (item, index) {
            return (
              <Fade triggerOnce delay={200 + index * 50} key={"item" + index}>
                <li>
                  <ActiveLink href={item.link}>
                    <NavLink>{item.title}</NavLink>
                  </ActiveLink>
                </li>
              </Fade>
            );
          })}
        </SecondaryNavList>
      </LeftNavs>
      <SocialNav>
        <Fade triggerOnce>
          <li>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/acueducto.studio/"
            >
              fb
            </NavLink>
          </li>
          <li>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/AcueductoStudio/"
            >
              tw
            </NavLink>
          </li>
          <li>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/acueducto.studio/"
            >
              ig
            </NavLink>
          </li>
          <li>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.youtube.com/channel/UCuFV_fKt_ELREPwoAb5lprg"
            >
              yt
            </NavLink>
          </li>
          <li>
            <NavLink
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/company/acueductostudio/"
            >
              ln
            </NavLink>
          </li>
        </Fade>
      </SocialNav>
    </DarkNav>
  );
}

const DarkNav = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  width: 100%;
  padding: 5% 4%;
  background-color: ${(props) => props.theme.colors.background};
`;

const LeftNavs = styled.div`
  grid-column: 2 / span 7;
  max-width: 635px;
  a {
    text-decoration: none;
  }
  @media (max-width: 800px) {
    grid-column-start: 1;
  }
`;

const MainNavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  font-size: 2.3rem;
  color: ${(props) => props.theme.colors.foreground_low};
  @media (max-width: 1250px) {
    font-size: 2rem;
  }
  @media (max-width: 1000px) {
    flex-direction: column;
    line-height: 190%;
  }
`;

const SecondaryNavList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding-top: 8%;
  color: ${(props) => props.theme.colors.foreground_low};
  li:not(:nth-last-child(1)) {
    padding-right: 10%;
  }
  @media (max-width: 1250px) {
    font-size: 1.8rem;
  }
  @media (max-width: 1000px) {
    font-size: 1.5rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    li {
      padding-right: 0;
      padding-bottom: 0px;
      padding-top: 5px;
    }
    li:not(:nth-last-child(1)) {
      padding-right: 0%;
      padding-bottom: 5px;
      padding-top: 0px;
    }
  }
`;

const NavLinkConstant = styled.a`
  transition: all 0.3s ease 0s;
  cursor: pointer;
  background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="https://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 90%;
  &:hover {
    background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="https://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0.5)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
  }
`;

const NavLink = styled.a`
  transition: all 0.3s ease 0s;
  cursor: pointer;
  background-image: ${(props) =>
    props.active
      ? `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="https://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0.5)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`
      : `url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="https://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 0)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');`};
  background-repeat: repeat-x;
  background-size: 1px 2px;
  background-position: 0 95%;
  &:hover {
    background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="https://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
  }
`;

const SocialNav = styled.ul`
  grid-column: 10 / span 3;
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 1fr);
  color: ${(props) => props.theme.colors.foreground_low};
  text-align: center;
  direction: rtl;
  max-height: 115px;
  a {
    text-decoration: none;
    position: relative;
    &:after {
      content: " ";
      display: block;
      position: absolute;
      background-color: transparent;
      top: -10px;
      left: -20px;
      width: 300%;
      height: 200%;
    }
  }
  div:nth-of-type(4),
  div:nth-of-type(5) {
    align-self: flex-end;
  }
  @media (max-width: 700px) {
    max-height: 100px;
    line-height: 165%;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    grid-column: 9 / span 4;
  }
  @media (max-width: 600px) {
    grid-column: 8 / span 5;
  }
`;
