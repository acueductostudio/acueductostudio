import styled from "styled-components";
import { useState } from "react";
import { H4 } from "components/shared/Dangerously";
import { createContact } from "utils/sendinBlue";
import ReactPixel from "react-facebook-pixel";
import { logEvent, advancedMatching } from "utils/analytics";
import GateForm from "components/GateForm";
import { Fade } from "react-awesome-reveal";

const NewsletterPopup = ({ content }) => {
  const [showPopup, setShowPopup] = useState(true);

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      listIds: [11],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: "MVS Gated Page",
        COMPANY: data.company,
        POSITION: data.job,
      },
    });
    ReactPixel.init("506854653278097", advancedMatching(data.email));
    // Suscripción a la newsletter
    logEvent("mvs-gated", "dejó datos");
    ReactPixel.track("Subscribe", { email: data.email });

    setShowPopup(false);
  };

  return (
    <>
      <Wrapper clickable={showPopup} id="NewsletterPopup">
        <Fade triggerOnce>
          <Border>
            <H4>{content.title}</H4>
            <p>{content.p}</p>
            <GateForm onSubmit={onSubmit} text={content} />
          </Border>
        </Fade>
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
  top: 19%;
  z-index: 13 !important;
  transition: opacity 0.4s ease;
  left: -15px;
  @media (max-width: 1226px) {
    top: 20%;
  }
  @media (max-width: 1116px) {
    top: 21%;
  }
  @media (max-width: 1100px) {
    top: 18.5%;
  }
  @media (max-width: 900px) {
    top: 15.5%;
  }
  @media (max-width: 884px) {
    top: 16%;
  }
  @media (max-width: 847px) {
    top: 17%;
  }
  @media (max-width: 800px) {
    top: 15.5%;
  }
  @media (max-width: 760px) {
    top: 16%;
  }
  @media (max-width: 741px) {
    top: 17%;
  }
  @media (max-width: 662px) {
    top: 17.5%;
  }
  @media (max-width: 650px) {
    top: 18%;
  }
  @media (max-width: 636px) {
    top: 18.5%;
  }
  @media (max-width: 600px) {
    top: 13%;
  }
  @media (max-width: 495px) {
    top: 14%;
  }
  @media (max-width: 448px) {
    top: 13.5%;
  }
  @media (max-width: 441px) {
    top: 14%;
  }
  @media (max-width: 424px) {
    top: 15%;
  }
  @media (max-width: 372px) {
    top: 15.5%;
  }
  @media (max-width: 364px) {
    top: 16%;
  }
  @media (max-width: 317px) {
    top: 17%;
  }
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
    margin-top: 0%;
    margin-left: 18px;
    margin-right: 18px;
    z-index: 100;
    left: 0;
    h4 {
      font-size: 2.5rem;
    }
  }
`;
