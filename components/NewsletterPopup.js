import styled from "styled-components";
import { useState, useEffect } from "react";
import { H4 } from "components/shared/Dangerously";
import Cross from "public/assets/img/layout/cross.svg";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import es from "public/locales/es/newsletter.json";
import DefaultForm from "components/shared/DefaultForm";
import { createContact } from "utils/sendinBlue.ts";
import ReactPixel from "react-facebook-pixel";

const NewsletterPopup = () => {
  let newsletter = es.newsletter_component;
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => popupShow(), 13000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact(data.firstName, data.lastName, data.email, [2], true);
    ReactPixel.init("506854653278097", { em: data.email });
    // Suscripción a la newsletter
    ReactPixel.track("Subscribe", { email: data.email });
  };

  const popupShow = () => {
    // Disable scroll
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy
    disableBodyScroll(targetElement);
    setShowPopup(true);
  };

  const unlockScreen = () => {
    const targetElement = document.querySelector("#NewsletterPopup"); //dummy
    enableBodyScroll(targetElement);
    setShowPopup(false);
  };

  return (
    <>
      <Wrapper clickable={showPopup} id="NewsletterPopup">
        <Border>
          <H4>{newsletter.title}</H4>
          <p>{newsletter.p}</p>
          <DefaultForm
            onSubmit={onSubmit}
            text={newsletter}
            buttonArrowInverse
            successMarkup={<Message success>{newsletter.success.p}</Message>}
          />
          <CrossContainer>
            <Cross onClick={unlockScreen} />
          </CrossContainer>
        </Border>
      </Wrapper>
      <Background visible={showPopup} onClick={unlockScreen} />
    </>
  );
};

export default NewsletterPopup;

const Background = styled.div`
  background-color: ${(props) => props.theme.colors.background};
  opacity: ${(props) => (props.visible ? 0.6 : 0)};
  position: fixed;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 13;
  transition: opacity 0.4s ease;
`;

const Message = styled.div`
  color: ${(p) => p.theme.colors.success};
  font-size: 1.8rem;
  padding-bottom: 5px;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

const Border = styled.div`
  border: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding: 10% 15% 14% 15%;
  border-radius:30px;
  @media (max-width: 380px) {
    padding: 10% 10% 14% 10%;
  }
`;

const CrossContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 2.4%;
  right: 3%;
  svg {
    width: 100%;
    cursor: pointer;
  }
`;

const Wrapper = styled.div`
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  max-width: 440px;
  width: 80%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%)
    ${(props) => (props.clickable ? "translateY(0%)" : "translateY(5%)")};
  font-weight: 100;
  position: fixed;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 14;
  p {
    color: ${(props) => props.theme.colors.foreground_low};
    padding-bottom: 20px;
  }
  h4 {
    color: ${(props) => props.theme.colors.accent};
    font-size: 3rem;
    font-weight: 300;
    line-height: 110%;
    margin-bottom: 5%;
  }
  input {
  }
  @media (max-width: 600px) {
    max-width: calc(100% - 36px);
    width: 100%;
    margin-left: 18px;
    margin-right: 18px;
    z-index: 100;
    left: 0;
    transform: translateX(0px) translateY(-50%);
    h4 {
      font-size: 2.5rem;
    }
  }
`;
