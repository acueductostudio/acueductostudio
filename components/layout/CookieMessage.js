import styled from "styled-components";
import Link from "next/link";
import Cross from "public/assets/img/layout/cross.svg";
import BorderLink from "components/shared/BorderedLink";

const CookieMessage = (props) => {
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
            <Hoverable>{t.link}</Hoverable>
          </Link>
          {t.p_continued}
        </p>
      </Border>
    </Wrapper>
  );
};

export default CookieMessage;

const Hoverable = styled.a`
  ${BorderLink({ showLink: true })}
`;

const Border = styled.div`
  border: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;

const Button = styled.button`
  padding: 14px 0%;
  text-align: center;
  width: calc(100% - 45px);
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  border: 0;
  font-weight: 100;
  font-size: 1.8rem;
  border-right: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground};
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: ${(props) => props.theme.colors.success};
      color: ${(props) => props.theme.colors.background};
      span {
        background-size: 0 0;
      }
    }
  }
`;

const Divider = styled.div`
  border-bottom: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground};
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
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  max-width: 590px;
  width: 80%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%)
    ${(props) => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  font-weight: 100;
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 12;
  p {
    font-size: 1.2rem;
    padding: 2.5% 4% 3% 4%;
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
