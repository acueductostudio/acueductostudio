import React from "react";
import { useLocaleContext } from "utils/LangContext";
import Link from "next/link";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import BorderLink from "components/shared/BorderedLink";

const socialNav = [
  { title: "facebook", link: "https://www.facebook.com/acueducto.studio/" },
  { title: "twitter", link: "https://twitter.com/AcueductoStudio/" },
  { title: "instagram", link: "https://www.instagram.com/acueducto.studio/" },
  {
    title: "youtube",
    link: "https://www.youtube.com/channel/UCuFV_fKt_ELREPwoAb5lprg",
  },
  {
    title: "linkedin",
    link: "https://www.linkedin.com/company/acueductostudio/",
  },
];

export default function FooterNav() {
  const context = useLocaleContext();
  let {
    main,
    policies,
    resources,
    navTitles,
  } = context.contact_footer.footer_nav;
  return (
    <Footer>
      <Navs>
        <NavList>
          <Fade triggerOnce>
            <h6>{navTitles.main}</h6>
          </Fade>
          <ul>
            {main.map((item, index) => (
              <Fade
                triggerOnce
                delay={200 + index * 50}
                key={"itemMain" + index}
              >
                <li>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              </Fade>
            ))}
          </ul>
        </NavList>
        {resources && (
          <NavList>
            <Fade triggerOnce>
              <h6>{navTitles.resources}</h6>
            </Fade>
            <ul>
              {resources.map((item, index) => (
                <Fade
                  triggerOnce
                  delay={200 + index * 50}
                  key={"itemResource" + index}
                >
                  <li>
                    <Link href={item.link}>{item.title}</Link>
                  </li>
                </Fade>
              ))}
            </ul>
          </NavList>
        )}
        <NavList id="community">
          <Fade triggerOnce>
            <h6>{navTitles.community}</h6>
          </Fade>
          <ul>
            {socialNav.map((item, index) => (
              <Fade
                triggerOnce
                delay={200 + index * 50}
                key={"itemSocial" + index}
              >
                <li>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              </Fade>
            ))}
          </ul>
        </NavList>
        <NavList accentColor>
          <Fade triggerOnce>
            <h6>{navTitles.policies}</h6>
          </Fade>
          <ul>
            {policies.map((item, index) => (
              <Fade
                triggerOnce
                delay={200 + index * 50}
                key={"itemPolicy" + index}
              >
                <li>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              </Fade>
            ))}
          </ul>
        </NavList>
      </Navs>
      <Colophon>
        <Fade triggerOnce>
          <p>© 2020, Acueducto</p>
          <a href="mailto:hola@acueducto.studio">hola@acueducto.studio</a>
          <a href="https://wa.me/message/JNUILJPF23CSP1">
            <img src="/assets/img/layout/logos/whatsapp.svg" alt="WhatApp" />
            +52 55 2789 5399
          </a>
        </Fade>
      </Colophon>
    </Footer>
  );
}

const Footer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  width: 100%;
  padding: 5% 4%;
  background-color: ${(props) => props.theme.colors.background};
  @media (max-width: 600px) {
    padding-bottom: 13%;
  }
`;

const Navs = styled.div`
  grid-column: 2 / span 11;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 800px) {
    grid-column: 1 / span 12;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 20px;
  }
`;

const NavList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    font-size: 1.8rem;
    color: ${(p) =>
      p.accentColor
        ? p.theme.colors.foreground_lowest
        : p.theme.colors.foreground_lower};
    li:not(:last-of-type) {
      margin-bottom: 20px;
    }
  }
  h6 {
    font-size: 2.1rem;
    font-weight: 200;
    margin: 0 0 30px;
    color: ${(p) =>
      p.accentColor ? p.theme.colors.accent : p.theme.colors.foreground_low};
  }
  @media (max-width: 950px) {
    h6 {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    grid-column-end: span 1;
    &#community {
      grid-column-start: 2;
      grid-row-start: 1;
    }
    h6 {
      margin-bottom: 20px;
      margin-top: 20px;
    }
  }
  @media (max-width: 600px) {
    ul {
      font-size: 1.6rem;
    }
  }
  a {
    ${BorderLink({ showLink: false })}
  }
`;

const Colophon = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column: 2 / span 11;
  margin-top: 10%;
  font-size: 1.6rem;
  p {
    color: ${(p) => p.theme.colors.accent};
  }
  > div:nth-of-type(3) a {
    position: relative;
    padding-left: 33px;
  }
  img {
    pointer-events: none;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 0;
    background-color: ${(p) => p.theme.colors.background};
    padding-right: 8px;
    padding-bottom: 5px;
    left: 0;
  }
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column: 2 / span 10;
    > div:nth-of-type(3) {
      justify-content: flex-end;
      display: flex;
    }
    > div:nth-of-type(2) {
      text-align: center;
    }
  }
  @media (max-width: 950px) {
    font-size: 1.6rem;
    img {
      width: 25px;
      height: 30px;
      padding-right: 5px;
    }
    > div:nth-of-type(3) a {
      padding-left: 25px;
    }
  }
  @media (max-width: 800px) {
    grid-column: 1 / span 12;
    flex-direction: column-reverse;
    display: flex;
    margin-top: 50px;
    > div {
      &:nth-of-type(3) {
        justify-content: flex-start;
        margin-bottom: 15px;
      }
      &:nth-of-type(2) {
        text-align: left;
        margin-bottom: 20px;
      }
    }
  }
  a {
    justify-self: start;
    ${BorderLink({ showLink: true })}
  }
`;
