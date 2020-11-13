import React from "react";
import { useLocaleContext } from "utils/LangContext";
import styled from "styled-components";
import Link from "next/link";
import { H1 } from "components/shared/Dangerously";
import FooterNav from "./FooterNav";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import FooterLogoCrop from "./FooterLogoCrop";

const ContactFooter = () => {
  const context = useLocaleContext();
  let { title, p, button_text, button_link } = context.contact_footer;

  return (
    <>
      <Grid>
        <Fade triggerOnce>
          <H1>{title}</H1>
        </Fade>
        <Fade triggerOnce>
          <p>{p}</p>
          <Link href={button_link} passHref>
            <ButtonLink>
              {button_text}
              <Pin />
            </ButtonLink>
          </Link>
        </Fade>
        <FooterLogoCrop />
      </Grid>
      <FooterNav />
    </>
  );
};

export default React.memo(ContactFooter);

const Pin = styled.span`
  width: 30px;
  height: 30px;
  display: inline-block;
  background-color: ${(p) => p.theme.colors.background};
  border-radius: 100%;
  margin-left: 15px;
  transition: 0.3s ease all;
  &:after {
    content: " ";
    border: solid ${(p) => p.theme.colors.accent};
    border-width: 0 2.5px 2.5px 0;
    display: inline-block;
    padding: 6px;
    transform: rotate(-45deg) translateY(3px);
    margin-left: 3px;
    transition: 0.3s ease all;
  }
`;

const ButtonLink = styled.a`
  text-decoration: none;
  padding: 13px 17px 18px 24px;
  border-radius: 30px;
  color: ${(p) => p.theme.colors.foreground};
  background-color: ${(p) => p.theme.colors.background};
  margin-top: 20px;
  border: 2px solid ${(p) => p.theme.colors.background};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) => p.theme.colors.accent};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(3px) scale(0.8);
        }
      }
    }
  }
  @media (max-width: 600px) {
    margin-bottom:20%;
    padding-top:15px;
    ${Pin}{
      transform:translateY(-3px);
      &:after{
        margin-left:0px;
        transform: rotate(-45deg) translateY(7px) scale(1);
      }
    }
    &:active {
      &:after {
        border-color: ${(p) => p.theme.colors.foreground};
      }
      ${Pin} {
        background-color: ${(p) => p.theme.colors.accent};
        margin-left: 25px;
        &:after {
          border-color: ${(p) => p.theme.colors.foreground};
          transform: rotate(-45deg) translateY(7px) scale(0.8);
        }
      }
    }
  }
`;

const Grid = styled(TitleSectionGrid)`
  background-color: ${(props) => props.theme.colors.accent};
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  padding: 10% 4% 20% 4%;
  h1 {
    color: ${(props) => props.theme.colors.foreground};
  }
  & > div {
    z-index: 8;
  }
  p {
    z-index: 8;
    color: ${(props) => props.theme.colors.foreground_low};
    margin-bottom: 10px;
    &:hover {
      b {
        border-bottom: ${(props) =>
          props.theme.stroke + " solid " + props.theme.colors.background};
        border-color: transparent;
        transition: 0.3s ease all;
      }
    }
    b {
      cursor: pointer;
      position: relative;
      color: ${(props) => props.theme.colors.foreground};
      font-weight: 100;
      transition: 0.3s ease all 0.1s;
      padding-bottom: 2px;
      border-bottom: ${(props) =>
        props.theme.stroke + " solid " + props.theme.colors.foreground};
    }
  }
  @media (max-width: 600px) {
    > div:nth-of-type(3){
      margin-bottom:20%;
    }
    p {
      max-width: 360px;
      padding-bottom: 5%;
    }
  }
  @media (max-width: 450px) {
    p {
      max-width: 360px;
    }
  }
`;
