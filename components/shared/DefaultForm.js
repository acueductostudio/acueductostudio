import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import delayForLoading from "utils/delayForLoading.ts";
import InputField, { SubmitField } from "components/shared/ContactInputField";

const DefaultForm = ({
  text,
  onSubmit,
  formMarkup,
  successMarkup,
  id,
  infinite
}) => {
  const [formStatus, setFormStatus] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const onSubmitInside = (data) => {
    console.log(data);

    setFormStatus("loading");
    onSubmit(data);
    !infinite && delayForLoading(1500).then(() => setFormStatus("done"));
  };

  return (
    <>
      {formStatus === "" && (
        <>
          {formMarkup}
          <form onSubmit={handleSubmit(onSubmitInside)}>
            <InputField>
              <label htmlFor={`${id}firstName`}>{text.firstName.label}</label>
              <input
                name="firstName"
                id={`${id}firstName`}
                type="text"
                placeholder={text.firstName.placeholder}
                ref={register({ required: true })}
              />
              {errors.firstName && <span>{text.firstName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label htmlFor={`${id}lastName`}>{text.lastName.label}</label>
              <input
                name="lastName"
                id={`${id}lastName`}
                type="text"
                placeholder={text.lastName.placeholder}
                ref={register({ required: true })}
              />
              {errors.lastName && <span>{text.lastName.errorMissing}</span>}
            </InputField>
            <InputField>
              <label htmlFor={`${id}email`}>email</label>
              <input
                name="email"
                id={`${id}email`}
                type="email"
                placeholder={text.email.placeholder}
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
            <SubmitField>
              <input type="submit" value={text.submit} />
            </SubmitField>
          </form>
        </>
      )}
      {formStatus === "loading" && (
        <Fade triggerOnce>
          <Loading>
            <p>{text.loading}</p>
          </Loading>
        </Fade>
      )}
      {formStatus === "done" && successMarkup}
    </>
  );
};

export default DefaultForm;

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
