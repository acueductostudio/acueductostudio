import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Cross from "./../static/assets/img/layout/cross.svg";

const CookieMessage = props => {
  let t = props.locale.cookie_message;
  return (
    <Wrapper borderTop={props.borderTop} clickable={props.hasToConsent}>
      <Border>
        <Divider onClick={props.doConsentToCookies}>
          <Button>
            <span>{t.title}</span>
          </Button>
          <CrossContainer>
            <Cross />
          </CrossContainer>
        </Divider>
        <p>
          {t.p}
          <Link href="/cookies" passHref>
            <a>{t.link}</a>
          </Link>
          {t.p_continued}
        </p>
      </Border>
    </Wrapper>
  );
};

export default CookieMessage;

const Border = styled.div`
  border: ${props => props.theme.stroke} solid
    ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;

const Button = styled.button`
  padding: 15px 0% 11px 0%;
  text-align: center;
  width: calc(100% - 45px);
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.foreground};
  border: 0;
  font-weight: 100;
  font-size: 1.8rem;
  border-right: ${props => props.theme.stroke} solid
    ${props => props.theme.colors.foreground};
  cursor: pointer;
  transition: 0.3s ease all;
  &:hover {
    background-color: #27ae60;
    color: ${props => props.theme.colors.background};
    span {
      background-size: 0 0;
    }
  }
`;

const Divider = styled.div`
  border-bottom: ${props => props.theme.stroke} solid
    ${props => props.theme.colors.foreground};
  display: flex;
`;

const CrossContainer = styled.div`
  width: 45px;
  height: 45px;
  padding: 12px;
  svg {
    width: 100%;
    max-width: 30px;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  pointer-events: ${props => (props.clickable ? "auto" : "none")};
  opacity: ${props => (props.clickable ? "1" : "0")};
  max-width: 590px;
  width: 80%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%)
    ${props => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  font-weight: 100;
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 12;
  p {
    font-size: 1.2rem;
    padding: 2.5% 4%;
  }
  a {
    text-decoration: none;
    border-bottom: 1.2px solid ${props => props.theme.colors.foreground};
    transition: 0.3s ease all;
    &:hover {
      border-bottom: 1.2px solid ${props => props.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    left: 0;
    transform: none;
    width: calc(100% - 36px);
    margin-left: 18px;
    margin-right: 18px;
    bottom: 18px;
    z-index: 100;
  }
`;
