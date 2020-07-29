import styled from "styled-components";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Span } from "components/shared/Dangerously";
import { createContact, updateContact } from "utils/sendinBlue.ts";
import ReactPixel from "react-facebook-pixel";
import Head from "components/Head";
import PageClipper from "components/PageClipper";
import PinnedSection from "components/shared/PinnedSection";
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
    console.log("referrer is: " + ref);
    //Check if we have an email cookie
    if (Cookies.get("ue") != undefined) {
      Cookies.get("ue");
      setAuthorized(true);
      console.log("user authorized");
      // Redirect if customer has payed
      if (document.referrer.includes("mercadopago")) {
        updateContact(data.email, {
          COMPRO_CONSULTORIA: true,
        });
        console.log("referrer es mercadopago");
        // window.location.replace("/agendarconsultoria");
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
        canonical={"https://acueducto.studio/diagnostico"}
        image={"og_image_diagnostico.png"}
        lang={props.lang}
      />
      {!isAuthorized && (
        <Container>
          <DefaultForm
            onSubmit={onSubmit}
            id={"payment"}
            text={cta}
            formMarkup={<Span>{`${cta.price} <em>${cta.sessions}</em>`}</Span>}
            successMarkup={
              <ThanksBlock>
                <Fade>
                  <h3>{cta.success.title}</h3>
                  <p>{cta.success.p}</p>
                </Fade>
              </ThanksBlock>
            }
          />
        </Container>
      )}
      {isAuthorized && (
        <>
          <TitleSection title={intro.title}>
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
                  <a href="https://www.mercadopago.com.mx/checkout/v1/redirect?pref_id=616963124-341c7abb-d6a7-45c8-9831-c3a3ec56b8c8">
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
    cursor: pointer;
    svg {
      width: 100%;
      max-width: 180px;
    }
    &:after {
      content: "pagar";
      position: absolute;
      display: flex;
      font-size: 3.2rem;
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
    margin-top: 18%;
  }
  p {
    grid-column: 2 / span 1;
    font-size: 1.4rem;
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
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1100px) {
    margin-bottom: 15%;
  }
  @media (max-width: 600px) {
    margin-bottom: 12%;
    span {
      font-size: 4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 400px), (max-height: 450px) {
    span {
      font-size: 3.7rem;
    }
    h3 {
      font-size: 2rem;
      margin-bottom: 5px;
    }
    p:first-of-type {
      margin-top: 0;
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
  margin-top: 20%;
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
`;
