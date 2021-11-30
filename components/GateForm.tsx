import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import delayForLoading from "utils/delayForLoading";
import InputField from "components/shared/ContactInputField";
import ButtonArrow from "components/shared/footers/ButtonArrow";

const GateForm = ({ text, onSubmit }) => {
  const [formStatus, setFormStatus] = useState("");
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitInside = (data) => {
    setFormStatus("loading");
    delayForLoading(1000).then(() => onSubmit(data));
  };

  return (
    <>
      {formStatus === "" && (
        <>
          <Form onSubmit={handleSubmit(onSubmitInside)} ref={formRef}>
            <InputField>
              <label htmlFor={`cp_email`}>{text.email.label}</label>
              <input
                name="email"
                id={`cp_email`}
                type="email"
                placeholder={text.email.placeholder}
                {...register("email", {
                  required: text.email.errorMissing,
                  pattern: {
                    value:
                      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
                    message: text.email.errorInvalid,
                  },
                })}
              />
              <span>{errors?.email?.message}</span>
            </InputField>
            <OneLine>
              <InputField>
                <label htmlFor={`cp_firstName`}>{text.firstName.label}</label>
                <input
                  name="firstName"
                  id={`cp_firstName`}
                  type="text"
                  placeholder={text.firstName.placeholder}
                  {...register("firstName", { required: true })}
                />
                {errors.firstName && <span>{text.firstName.errorMissing}</span>}
              </InputField>

              <InputField>
                <label htmlFor={`cp_lastName`}>{text.lastName.label}</label>
                <input
                  name="lastName"
                  id={`cp_lastName`}
                  type="text"
                  placeholder={text.lastName.placeholder}
                  {...register("lastName", { required: true })}
                />
                {errors.lastName && <span>{text.lastName.errorMissing}</span>}
              </InputField>
            </OneLine>
            <InputField>
              <label htmlFor={`cp_company`}>{text.company.label}</label>
              <input
                name="company"
                id={`cp_company`}
                type="text"
                placeholder={text.company.placeholder}
                {...register("company", { required: true })}
              />
              {errors.company && <span>{text.company.errorMissing}</span>}
            </InputField>
            <InputField>
              <label htmlFor={`cp_job`}>{text.job.label}</label>
              <input
                name="job"
                id={`cp_job`}
                type="text"
                placeholder={text.job.placeholder}
                {...register("job", { required: true })}
              />
              {errors.job && <span>{text.job.errorMissing}</span>}
            </InputField>
            <ButtonArrow text={text.submit} submitButton inverse />
          </Form>
        </>
      )}
      {formStatus === "loading" && (
        <Fade triggerOnce>
          <Loading>
            <p>{text.loading}</p>
          </Loading>
        </Fade>
      )}
    </>
  );
};

export default GateForm;

const OneLine = styled.div`
  flex-direction: row;
  display: flex;
  gap: 2rem;
  @media (max-width: 600px), (max-height: 450px) {
    display: unset;
  }
`;

const fadeIn = keyframes`
  from {
    width: 5%;
  }
  to {
    width: 100%;
  }
`;

const Loading = styled.div`
  width: 100%;
  align-items: flex-start;
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
