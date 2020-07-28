import styled from "styled-components";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import { Span } from "components/shared/Dangerously";
import { createContact } from "utils/sendinBlue.ts";
import ReactPixel from "react-facebook-pixel";
import Head from "components/Head";
import PageClipper from "components/PageClipper";
import PinnedSection from "components/shared/PinnedSection";
import DefaultForm from "components/shared/DefaultForm";
import es from "public/locales/es/consultoria.pago.json";
import Cards from "public/assets/img/layout/logos/cards.svg";
import Cash from "public/assets/img/layout/logos/cash.svg";

const ConsultoriaCTA = (props) => {
  let {
    page_title,
    meta_description,
    headerTitle,
    intro,
    step1,
    step2,
    step3,
    cta,
    process_section,
    areas_section,
    last_section,
  } = es.consultoria_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact(data.firstName, data.lastName, data.email, [3], true, {
      PIDIO_CONSULTORIA: true,
    });
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
      <PinnedSection title={intro.title}>
        <Step>
          <Fade>
            <span>01</span>
            <h2>{step1.title}</h2>
            <PayContainer>
              <div>
                <Cards />
                <h3>{step1.card}</h3>
              </div>
              <div>
                <Cash />
                <h3>{step1.cash}</h3>
              </div>
              <p>{step1.warning}</p>
            </PayContainer>
          </Fade>
        </Step>
        <Step>
          <Fade>
            <span>01</span>
            <h2>{step2.title}</h2>
            <p>{step2.p}</p>
          </Fade>
        </Step>
        <Step>
          <Fade>
            <span>01</span>
            <h2>{step3.title}</h2>
            <p>{step3.p}</p>
          </Fade>
        </Step>
      </PinnedSection>
      {/* <Container>
       <DefaultForm
        onSubmit={onSubmit}
        id={id}
        text={cta}
        formMarkup={
          <>
            <h3>{cta.title}</h3>
            <Span>{`${cta.price} <em>${cta.sessions}</em>`}</Span>
          </>
        }
        successMarkup={
          <ThanksBlock>
            <Fade>
              <h3>{cta.success.title}</h3>
              <p>{cta.success.p}</p>
            </Fade>
          </ThanksBlock>
        }
      /> 
    </Container>*/}
    </PageClipper>
  );
};

export default React.memo(ConsultoriaCTA);

const PayContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  & > div {
    border: 2px solid ${(p) => p.theme.colors.foreground};
    padding: 10% 5% 5% 8%;
    svg {
      width: 100%;
      max-width: 180px;
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
    font-size: 1.5rem;
  }
`;

const Step = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 25%;
  span {
    color: ${(props) => props.theme.colors.accent};
    font-weight: 100;
    left: -25px;
    font-size: 2.5rem;
    position: absolute;
  }
  h2 {
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 100;
    margin: 4% 0 3.5%;
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
