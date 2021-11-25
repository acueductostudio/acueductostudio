import styled from "styled-components";
import { useState } from "react";
import { H4 } from "components/shared/Dangerously";
import { createContact } from "utils/sendinBlue";
import ReactPixel from "react-facebook-pixel";
import { logEvent, advancedMatching } from "utils/analytics";
import GateForm from "components/GateForm";

const NewsletterPopup = ({ content }) => {
  const [showPopup, setShowPopup] = useState(true);
  console.log(content);

  const onSubmit = (data) => {
    // // Create contact and add to list 3 (Consulting funnel) w/ test results
    // createContact({
    //   firstName: data.firstName,
    //   lastName: data.lastName,
    //   email: data.email,
    //   listIds: [2],
    //   updateEnabled: true,
    //   attributes: {
    //     SUBSCRIBED_FROM: "popup",
    //   },
    // });
    // ReactPixel.init("506854653278097", advancedMatching(data.email));
    // // Suscripción a la newsletter
    // logEvent("newsletter-popup", "dejó email");
    // ReactPixel.track("Subscribe", { email: data.email });
    setShowPopup(false);
    console.log(data);
  };

  return (
    <>
      <Wrapper clickable={showPopup} id="NewsletterPopup">
        <Border>
          <H4>{content.title}</H4>
          <p>{content.p}</p>
          <GateForm onSubmit={onSubmit} text={content} />
        </Border>
      </Wrapper>
      <StickyReminder visible={showPopup}>
        Deja tus datos para seguir leyendo
      </StickyReminder>
      <Background visible={showPopup} />
    </>
  );
};

export default NewsletterPopup;

const StickyReminder = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: ${(props) => (props.visible ? "auto" : 0)};
  position: sticky;
  z-index: 16;
  text-align: center;
  max-width: 440px;
  padding: ${(props) => (props.visible ? "10% 0 0" : 0)};
  top: 5%;
`;

const Background = styled.div<{ visible: boolean }>`
  opacity: ${(props) => (props.visible ? 1 : 0)};
  position: absolute;
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  backdrop-filter: blur(6px);
  bottom: 0;
  right: 0;
  top: 25%;
  z-index: 13 !important;
  transition: opacity 0.4s ease;
  left: -15px;
`;

const Border = styled.div`
  border: ${(props) => props.theme.stroke} solid
    ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding: 8% 10% 8% 10%;
  border-radius: 30px;
  @media (max-width: 380px) {
    padding: 10% 10% 14% 10%;
  }
`;

const Wrapper = styled.div<{ clickable: boolean }>`
  grid-column: 7 / span 5;
  pointer-events: ${(props) => (props.clickable ? "auto" : "none")};
  opacity: ${(props) => (props.clickable ? "1" : "0")};
  max-width: 440px;
  width: 100%;
  left: 0;
  margin-top: -20%;
  right: 0;
  font-weight: 100;
  position: relative;
  transition: opacity 0.4s ease, transform 0.5s ease;
  z-index: 15 !important;
  height: ${(props) => (props.clickable ? "auto" : 0)};
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
