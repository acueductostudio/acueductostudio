import styled from "styled-components";
import { useState } from "react";
import { useEffect } from "react";
import Cross from "public/assets/img/layout/cross.svg";
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import InputField from "components/shared/InputField";

const url =
  "https://studio.us19.list-manage.com/subscribe/post?u=c9d7bbb792de4cdbe363fad75&amp;id=434dbf9f3b";
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const CustomForm = ({ status, message, onValidated }) => {
  const [displayMessage, setMessage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  let email, name, lastname;

  const submit = () => {
    if (!name.value) {
      setShowMessage(true), setMessage("Ingresa tu nombre");
    } else if (!lastname.value) {
      setShowMessage(true), setMessage("Ingresa tu apellido");
    } else if (!email.value) {
      setShowMessage(true), setMessage("Ingresa tu email");
    } else if (!isEmail.test(email.value)) {
      setShowMessage(true), setMessage("Email en formato incorrecto");
    } else {
      setShowMessage(false),
        onValidated({
          EMAIL: email.value,
          FNAME: name.value,
          FLASTNAME: lastname.value,
        });
    }
  };
  return (
    <>
      <h4>
        suscríbete y<br />
        te actualizamos
      </h4>
      <p>Recibe un correo cada vez que publiquemos un capítulo nuevo.</p>
      {status === "sending" && <Message>Enviando...</Message>}
      {status === "error" && (
        <Message error dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {showMessage ? (
        <Message error dangerouslySetInnerHTML={{ __html: displayMessage }} />
      ) : null}
      {status === "success" && (
        <Message success dangerouslySetInnerHTML={{ __html: message }} />
      )}
      {status !== "success" && (
        <>
          <input
            ref={(node) => (name = node)}
            type="text"
            placeholder="nombre"
            id="name"
          />
          <label htmlFor="name">nombre</label>
          <input
            ref={(node) => (lastname = node)}
            type="text"
            placeholder="apellido"
            id="lastname"
          />
          <label htmlFor="lastname">last name</label>
          <input
            ref={(node) => (email = node)}
            type="email"
            placeholder="email"
            id="email"
          />
          <label htmlFor="email">email</label>
          <Button onClick={submit}>suscribirme</Button>
        </>
      )}
    </>
  );
};

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    let timer1 = setTimeout(() => popupShow(), 10000);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

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
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <CustomForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
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
  color: ${(props) =>
    props.error
      ? props.theme.colors.error
      : props.success
      ? props.theme.colors.success
      : props.theme.colors.accent};
  font-size: ${(props) => (props.success ? "1.8rem" : "1.5rem")};
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
  @media (max-width: 380px) {
    padding: 10% 10% 14% 10%;
  }
`;

const Button = styled.button`
  padding: 14px 0%;
  margin-top: 5px;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.colors.accent};
  color: ${(props) => props.theme.colors.foreground};
  border: 0;
  font-weight: 100;
  font-size: 1.8rem;
  cursor: pointer;
  transition: 0.3s ease all;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: #27ae60;
      color: ${(props) => props.theme.colors.background};
      span {
        background-size: 0 0;
      }
    }
  }
`;

const CrossContainer = styled.div`
  width: 50px;
  height: 50px;
  padding: 12px;
  position: absolute;
  top: 3%;
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
  label {
    font-size: 0;
    height: 0;
    width: 0;
    position: absolute;
  }
  input {
    font-weight: 100;
    border-radius: 0;
    width: 100%;
    padding: 10px 18px 13px 18px;
    line-height: 100%;
    background-color: transparent;
    border: ${(props) => props.theme.stroke} solid
      ${(props) => props.theme.colors.foreground_lowest};
    margin: 4px 0;
    color: ${(props) => props.theme.colors.foreground};
    -webkit-appearance: textfield;
    appearance: textfield;
    ::placeholder {
      padding-top: 4px;
    }
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
  @media (max-width: 380px) {
    /* input {
      padding-top: 14px;
    } */
  }
`;
