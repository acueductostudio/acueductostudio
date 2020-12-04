import React from "react";
import { useLocaleContext } from "utils/LangContext";
import styled from "styled-components";
import Link from "next/link";
import { H1 } from "components/shared/Dangerously";
import FooterNav from "./FooterNav";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import FooterLogoCrop from "./FooterLogoCrop";
import ButtonArrow from "components/shared/footers/ButtonArrow";

const ContactFooter = () => {
  const context = useLocaleContext();
  let { title, p, button_text } = context.contact_footer;
  return (
    <>
      <Grid>
        <Fade triggerOnce>
          <H1>{title}</H1>
        </Fade>
        <Fade triggerOnce>
          <p>{p}</p>
          <Link
            href={"/contacto"}
            as={context.lang === "en" ? "/contact" : "/contacto"}
            locale={context.lang}
            passHref
          >
            <ButtonArrow text={button_text} />
          </Link>
        </Fade>
        <FooterLogoCrop />
      </Grid>
      <FooterNav />
    </>
  );
};

export default React.memo(ContactFooter);

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
    max-width: 375px;
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
    > div:nth-of-type(3) {
      margin-bottom: 20%;
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
