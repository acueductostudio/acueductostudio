import styled from "styled-components";
import { useState, useContext } from "react";
import { H1 } from "components/shared/Dangerously";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import Logo from "public/assets/img/layout/logo.svg";
import Mail from "public/assets/img/layout/mail.svg";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { logEvent } from "utils/analytics";
import LangContext from "utils/LangContext";

const ContactFooter = () => {
  const context = useContext(LangContext);
  let { title, p, copied_text, copy_text } = context.contact_footer;

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
    logEvent("Click", "Copied email to clipboard");
  };

  return (
    <Grid id="contact">
      <H1>{title}</H1>
      <CopyToClipboard
        text={"hola@acueducto.studio"}
        onCopy={doSetCopied}
        onMouseEnter={setHovered}
        onMouseLeave={setUnhovered}
        onClick={setHovered}
      >
        <p>
          {p}
          <b>
            <MailPlaceholder />
            <CopyMessage reveal={copying}>
              {copied ? copied_text : copy_text}
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

const MailPlaceholder = styled(Mail)`
  height: 100%;
  max-height: 18px;
  bottom: 0;
  position: relative;
  margin-bottom: -4px;
  @media (max-width: 600px) {
    max-height: 15px;
  }
`;

const Grid = styled(TitleSectionGrid)`
  background-color: ${props => props.theme.colors.accent};
  padding: 10% 4% 20% 4%;
  h1 {
    color: ${props => props.theme.colors.foreground};
  }
  p {
    z-index: 8;
    color: ${props => props.theme.colors.foreground_low};
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
  @media (max-width: 600px) {
    p {
      max-width: 360px;
      padding-bottom: 10%;
    }
  }
  @media (max-width: 450px) {
    p {
      max-width: 360px;
      padding-bottom: 20%;
      b span {
        bottom: -40px;
      }
    }
  }
`;

const CopyMessage = styled.span`
  position: absolute;
  opacity: ${props => (props.reveal ? 1 : 0)};
  bottom: -40px;
  left: 0;
  width: 100%;
  padding: 8px 10px;
  background-color: ${props => props.theme.colors.background};
  text-align: center;
  border-radius: 4px;
  font-size: 1.5rem;
  transition: ${props => (props.reveal ? "0.3s ease all 0s" : "0.3s ease all")};
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
