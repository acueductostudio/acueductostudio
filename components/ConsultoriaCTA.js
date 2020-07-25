import styled, { keyframes } from "styled-components";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Fade from "react-reveal/Fade";
import { Span } from "components/shared/Dangerously";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { createContact } from "utils/sendinBlue.ts";
import delayForLoading from "utils/delayForLoading.ts";
import InputField from "components/shared/InputField";
import ReactPixel from "react-facebook-pixel";

const DefaultForm = ({ text, onSubmit, formMarkup, successMarkup }) => {
  const [formStatus, setFormStatus] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmitInside = (data) => {
    setFormStatus("loading");
    console.log(data);
    onSubmit();
    delayForLoading(1500).then(() => setFormStatus("done"));
  };

  return (
    <>
      {formStatus === "" && (
        <>
          {formMarkup}
          <form onSubmit={handleSubmit(onSubmitInside)}>
            <InputField>
              <label>{text.firstName.label}</label>
              <input
                name="firstName"
                type="text"
                placeholder={text.firstName.label}
                ref={register({ required: true })}
              />
              {errors.firstName && <span>{text.firstName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label>{text.lastName.label}</label>
              <input
                name="lastName"
                type="text"
                placeholder={text.lastName.label}
                ref={register({ required: true })}
              />
              {errors.lastName && <span>{text.lastName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label>email</label>
              <input
                name="email"
                type="email"
                placeholder="email"
                ref={register({
                  required: {
                    value: true,
                    message: text.email.errorMissing,
                  },
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    message: text.email.errorInvalid,
                  },
                })}
              />
              <span>{errors?.email?.message}</span>
            </InputField>
            <InputField>
              <input type="submit" value={text.submit} />
            </InputField>
          </form>
        </>
      )}
      {formStatus === "loading" && (
        <Fade>
          <Loading>
            <p>{text.loading}</p>
          </Loading>
        </Fade>
      )}
      {formStatus === "done" && { successMarkup }}
    </>
  );
};

const ConsultoriaCTA = ({ cta }) => {
  const [formStatus, setFormStatus] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    setFormStatus("loading");
    console.log(data);

    //Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact(data.firstName, data.lastName, data.email, [3], true, {
      PIDIO_CONSULTORIA: true,
    });
    ReactPixel.init("506854653278097", { em: data.email });
    ReactPixel.track("SubmitApplication", { email: data.email }); // Pidió consultoría
    delayForLoading(1500).then(() => setFormStatus("done"));
  };

  return (
    <Container>
      {formStatus === "" && (
        <>
          <h3>{cta.title}</h3>
          <Span>{cta.price}</Span>
          <form onSubmit={handleSubmit(onSubmit)}>
            <InputField>
              <label>{cta.firstName.label}</label>
              <input
                name="firstName"
                type="text"
                placeholder={cta.firstName.label}
                ref={register({ required: true })}
              />
              {errors.firstName && <span>{cta.firstName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label>{cta.lastName.label}</label>
              <input
                name="lastName"
                type="text"
                placeholder={cta.lastName.label}
                ref={register({ required: true })}
              />
              {errors.lastName && <span>{cta.lastName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label>email</label>
              <input
                name="email"
                type="email"
                placeholder="email"
                ref={register({
                  required: {
                    value: true,
                    message: cta.email.errorMissing,
                  },
                  pattern: {
                    value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    message: cta.email.errorInvalid,
                  },
                })}
              />
              <span>{errors?.email?.message}</span>
            </InputField>
            <InputField>
              <input type="submit" value={cta.submit} />
            </InputField>
          </form>
        </>
      )}
      {formStatus === "loading" && (
        <Fade>
          <Loading>
            <p>{cta.sending}</p>
          </Loading>
        </Fade>
      )}
      {formStatus === "done" && (
        <ThanksBlock>
          <Fade>
            <h3>{cta.registered.title}</h3>
            <p>{cta.registered.p}</p>
          </Fade>
        </ThanksBlock>
      )}
      <h3>{cta.title2}</h3>
      <LinkWithArrow link={cta.link} linktext={cta.linktext} />
    </Container>
  );
};

export default React.memo(ConsultoriaCTA);

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
      margin-left: 8px;
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

const fadeIn = keyframes`
  0% {
    width: 5%;
  }
  100% {
    width: 100%;
  }
`;

const Loading = styled.div`
  width: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-bottom: 10%;
  padding-top: 5%;
  flex-direction: column;
  p {
    margin-bottom: 5px;
  }
  &:after {
    display: flex;
    height: 2px;
    background-color: ${(p) => p.theme.colors.accent};
    content: " ";
    width: 100%;
  }
  &:before {
    content: " ";
    position: absolute;
    background-color: rgba(0, 0, 0, 0.3);
    height: 4px;
    margin-top: 35px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;
