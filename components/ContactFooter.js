import styled from "styled-components";
import { useState } from "react";
import Fade from "react-reveal/Fade";
import createMarkup from "../helpers/createMarkup";
import TitleSectionGrid from "./TitleSectionGrid"; 
import Logo from "./../static/assets/img/layout/logo.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ContactFooter = props => {
  let f = props.f;

  const [copied, setCopied] = useState(false);
  const [copying, setCopying] = useState(false);

  const setHovered = () => {
    setCopying(true);
  };

  const setUnhovered = () => {
    setCopying(false);
    setTimeout(function() {
      setCopied(false);
    }, 300);
  };

  const doSetCopied = () => {
    setCopied(true);
  };

  return (
    <Grid borderTop={props.borderTop} id="contact">
      <Fade>
        <h1 dangerouslySetInnerHTML={createMarkup(f.title)} />
      </Fade>
      <CopyToClipboard
        text={"hola@acueducto.studio"}
        onCopy={doSetCopied}
        onMouseEnter={setHovered}
        onMouseLeave={setUnhovered}
      >
        <p>
          {f.p}
          <b>
            hola@acueducto.studio
            <CopyMessage reveal={copying}>
              {copied ? f.copied : f.copy}
            </CopyMessage>
          </b>
        </p>
      </CopyToClipboard>
      <LogoCrop>
        <Logo />
      </LogoCrop>
    </Grid>
  );
};

export default React.memo(ContactFooter);

const CopyMessage = styled.span`
  position: absolute;
  opacity: ${props => (props.reveal ? 1 : 0)};
  bottom: -38px;
  left: 0;
  width: 100%;
  padding: 4% 4% 3%;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: ${props =>
    props.reveal ? "0.3s ease all 0s" : "0.3s ease all"};
  &:before {
    content: " ";
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 5px solid ${props => props.theme.colors.background};
  }
`;

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
    &:hover {
      b {
        border-bottom: ${props =>
          props.theme.stroke + " solid " + props.theme.colors.background};
        border-color: transparent;
        transition: 0.3s ease all;
      }
    }
    b {
      cursor: pointer;
      position: relative;
      color: ${props => props.theme.colors.foreground};
      font-weight: 100;
      transition: 0.3s ease all 0.1s;
      padding-bottom: 2px;
      border-bottom: ${props =>
        props.theme.stroke + " solid " + props.theme.colors.foreground};
    }
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
