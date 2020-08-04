import styled from "styled-components";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Span } from "components/shared/Dangerously";
import { createContact, updateContact } from "utils/sendinBlue.ts";
import ReactPixel from "react-facebook-pixel";
import Head from "components/Head";
import PageClipper from "components/PageClipper";
import LinkWithArrow from "components/shared/LinkWithArrow";
import TitleSection from "components/shared/TitleSection";
import DefaultForm from "components/shared/DefaultForm";
import es from "public/locales/es/consultoria.pago.json";
import Cards from "public/assets/img/layout/logos/cards.svg";
import Cash from "public/assets/img/layout/logos/cash.svg";
import Cookies from "js-cookie/dist/js.cookie.mjs";

const Pago = (props) => {
  const [isAuthorized, setAuthorized] = useState(false);
  let {
    page_title,
    meta_description,
    headerTitle,
    headerTitle_unauthorized,
    intro,
    step1,
    step2,
    step3,
    cta,
  } = es.payment_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  useEffect(() => {
    let ref = document.referrer;
    let email = Cookies.get("ue");
    console.log("referrer is: " + ref);
    //Check if we have an email cookie
    if (email != undefined) {
      setAuthorized(true);
      console.log("user authorized with: " + email);
      // Redirect if customer has payed and add tag to sendinblue
      if (document.referrer.includes("mercadopago")) {
        updateContact(email, [4], [3]);
        ReactPixel.track("Purchase", {
          email: data.email,
          currency: "MXN",
          value: 5200.0,
        });
        console.log(
          "referrer es: " + ref + "\n" + "email registrado: " + email
        );
        window.location.replace("https://meetings.hubspot.com/hola250");
      }
    } else {
      props.setTitle(headerTitle_unauthorized);
    }
  }, [isAuthorized]);

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact(data.firstName, data.lastName, data.email, [3], true, {
      PIDIO_CONSULTORIA: true,
    });
    Cookies.set("ue", data.email);
    setAuthorized(true);
    ReactPixel.init("506854653278097", { em: data.email });
    // Pidió consultoría
    ReactPixel.track("SubmitApplication", { email: data.email });
  };
  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/consultoria/pago"}
        image={"og_image_consultoria.png"}
        lang={props.lang}
      />
      {!isAuthorized && (
        <Container>
          <DefaultForm onSubmit={onSubmit} id={"payment"} text={cta} />
          <LinkWithArrow link={cta.link} linktext={cta.linktext} />
        </Container>
      )}
      {isAuthorized && (
        <>
          <TitleSection title={intro.title}>
            <p>{intro.p}</p>
            <Includes>
              {intro.items.map((item, index) => (
                <li key={"introItemkey" + index}>{item}</li>
              ))}
            </Includes>
            <Step>
              <Fade>
                <span>01</span>
                <h2>{step1.title}</h2>
              </Fade>
              <PayContainer>
                <Fade>
                  <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=616963124-341c7abb-d6a7-45c8-9831-c3a3ec56b8c8">
                    <Cards />
                    <h3>{step1.card}</h3>
                  </a>
                  <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=616963124-21bbd186-417b-4bbc-a1ce-05afd265bb18">
                    <Cash />
                    <h3>{step1.cash}</h3>
                  </a>
                  <p>*{step1.warning}</p>
                </Fade>
              </PayContainer>
            </Step>
            <Step>
              <Fade>
                <span>02</span>
                <h2>{step2.title}</h2>
                <p>{step2.p}</p>
              </Fade>
            </Step>
            <Step>
              <Fade>
                <span>03</span>
                <h2>{step3.title}</h2>
                <p>{step3.p}</p>
              </Fade>
            </Step>
          </TitleSection>
        </>
      )}
    </PageClipper>
  );
};

export default React.memo(Pago);

const Includes = styled.ul`
  margin-bottom: 20%;
  margin-top: 20px;
  list-style: none;
  li {
    line-height: 120%;
    margin-bottom: 15px;
    &:before {
      content: " ";
      width: 5px;
      height: 5px;
      display: inline-block;
      border-radius: 100%;
      margin-right: 5px;
      margin-bottom: 4px;
      background-color: ${(p) => p.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 10%;
  }
`;

const PayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  & > a {
    border: 2px solid ${(p) => p.theme.colors.foreground};
    padding: 10% 8% 5% 8%;
    position: relative;
    transition: 0.4s ease all;
    grid-column: unset;
    text-decoration: none;
    cursor: pointer;
    min-height: 150px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg {
      width: 100%;
      max-width: 180px;
    }
    &:after {
      content: "pagar";
      position: absolute;
      display: flex;
      font-size: 2.5rem;
      font-weight: 100;
      opacity: 0;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      background-color: ${(p) => p.theme.colors.accent};
      transition: 0.4s ease all;
      padding: 10% 5% 5% 8%;
      align-items: flex-end;
      justify-content: flex-start;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        border-color: ${(p) => p.theme.colors.accent};
        &:after {
          opacity: 1;
        }
      }
    }
  }
  h3 {
    color: ${(p) => p.theme.colors.accent};
    font-weight: 200;
    font-size: 3.2rem;
  }
  p {
    grid-column: 2 / span 1;
    font-size: 1.4rem;
  }
  @media (max-width: 1100px) {
    & > a {
      min-height: 120px;
    }
  }
  @media (max-width: 600px) {
    & > a {
      background-color: ${(p) => p.theme.colors.accent};
      border: none;
      border-radius: 5px;
      h3 {
        color: ${(p) => p.theme.colors.foreground};
        font-weight: 100;
      }
    }
  }
`;

const Step = styled.li`
  list-style: none;
  position: relative;
  &:not(:last-of-type) {
    margin-bottom: 20%;
  }
  span {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 100;
    left: -40px;
    text-align: right;
    top: 4px;
    font-size: 2.5rem;
    position: absolute;
  }
  h2 {
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 200;
    margin: 0% 0 3.5%;
  }
  @media (max-width: 1250px) {
    h2 {
      font-size: 2.8rem;
    }
    span {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 1100px) {
    &:not(:last-of-type) {
      margin-bottom: 15%;
    }
  }
  @media (max-width: 950px) {
    h2 {
      font-size: 2.5rem;
    }
    span {
      font-size: 2rem;
      top: 2px;
    }
  }
  @media (max-width: 600px) {
    &:not(:last-of-type) {
      margin-bottom: 10%;
    }
    &:last-of-type {
      margin-bottom: 20%;
    }
    span {
      font-size: 2rem;
      position: relative;
      left: 0;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
`;

const ThanksBlock = styled.div`
  margin-bottom: 10%;
  p {
    margin-top: 10px;
  }
`;

const Container = styled.div`
  max-width: 450px;
  margin: 0 auto;
  margin-top: 18%;
  & > span {
    color: ${(p) => p.theme.colors.accent};
    font-size: 3rem;
    margin: 0 0 30px 0;
    display: flex;
    font-weight: 200;
    b {
      font-size: 1.8rem;
      margin-top: 13px;
      margin-left: 4px;
    }
    em {
      font-style: normal;
      color: ${(p) => p.theme.colors.foreground_low};

      font-weight: 100;
      font-size: 1.8rem;
      margin-top: 15px;
      line-height: 125%;
      margin-left: 20px;
    }
  }
  a {
    display: flex;
    background-image: none;
    &:hover {
      background-image: none;
    }
  }
  form {
    margin-bottom: 15%;
  }
  h3 {
    &:nth-of-type(1) {
      margin-bottom: 0;
    }
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 100;
    margin: 4% 0 3.5%;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 600px) {
    padding: 5%;
  }
`;
