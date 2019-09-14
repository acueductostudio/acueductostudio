import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Imago from "../static/assets/img/layout/imago.svg";
import createMarkup from "../helpers/createMarkup";
import Arrow from "../components/Arrow";
import Logo from "./../static/assets/img/layout/logo.svg";

const ContactFooter = props => {
  let f = props.f;
  return (
    <Grid borderTop={props.borderTop} id="contact">
      <Fade>
        <h1 dangerouslySetInnerHTML={createMarkup(f.title)} />
        <p>
          <WidthLink href="mailto:hola@acueducto.studio">
            {f.p + " "}
            <b>hola@acueducto.studio</b>
            <Arrow />
          </WidthLink>
        </p>
      </Fade>
      <LogoCrop>
        <Logo />
      </LogoCrop>
    </Grid>
  );
};

export default ContactFooter;

const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  background-color: ${props => props.theme.colors.accent};
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4% 20% 4%;
  position: relative;
  h1 {
    grid-column: 2 / span 7;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
  }
  p {
    grid-column: 7 / span 4;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
  }
`;

const WidthLink = styled.a`
  text-decoration: none;
  display: block;
  position: relative;
  padding-right: 11%;
  &:hover {
    b {
      border-bottom: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.background};
    }
    svg {
      * {
        stroke: black;
      }
    }
  }
  b {
    color: ${props => props.theme.colors.foreground};
    font-weight: 100;
    transition: 0.3s ease all;
    padding-bottom: 2px;
    border-bottom: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.foreground};
  }
  svg {
    align-self: flex-end;
    position: absolute;
    right: -5%;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LogoCrop = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 0;
  height: 175px;
  svg {
    width: 110%;
    height: auto;
    transform: translateY(13%);
    opacity: 0.3;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%) translateY(35%);
    * {
      fill: rgba(0, 0, 0, 0.5);
    }
  }
`;
