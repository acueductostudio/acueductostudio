import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import delayForLoading from "utils/delayForLoading";
import { sendToHola } from "utils/sendinBlue";
import InputField, { CheckMark } from "components/shared/ContactInputField";
import ButtonArrow from "components/shared/footers/ButtonArrow";

const ContactForm = ({ text }) => {
  const [formStatus, setFormStatus] = useState("");
  const [requirePhone, setRequirePhone] = useState(false);
  const formRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitInside = (data) => {
    document.getElementById("Scroll").scrollIntoView({ behavior: "smooth" });
    delayForLoading(300).then(() => setFormStatus("loading"));
    sendToHola(data);
    delayForLoading(1800).then(() => setFormStatus("done"));
  };

  const phoneFieldChange = () => setRequirePhone(!requirePhone);

  return (
    <>
      {formStatus === "" && (
        <>
          <p>{text.p3}</p>
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
            <InputField>
              <label htmlFor={`cp_message`}>{text.message.label}</label>
              <textarea
                name="message"
                id={`cp_message`}
                placeholder={text.message.placeholder}
                {...register("message", { required: true })}
              />
              {errors.message && <span>{text.message.errorMissing}</span>}
            </InputField>
            <CheckMark>
              <label htmlFor={`cp_phoneCheckbox`}>
                {text.phonecheckbox.label}
              </label>
              <input
                name="phoneCheckbox"
                id={`cp_phoneCheckbox`}
                type="checkbox"
                placeholder={text.message.placeholder}
                {...register("phoneCheckbox")}
                onChange={phoneFieldChange}
              />
              <span className="checkmark"></span>
            </CheckMark>
            {requirePhone && (
              <Fade triggerOnce>
                <InputField>
                  <label htmlFor={`cp_phone`}>{text.phone.label}</label>
                  <input
                    name="phone"
                    id={`cp_phone`}
                    type="phone"
                    placeholder={"+52 55 8778 8778"}
                    {...register("phone", {
                      required: text.phone.errorMissing,
                      pattern: {
                        value: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i,
                        message: text.phone.errorInvalid,
                      },
                      minLength: {
                        value: 10,
                        message: text.phone.errorInvalid,
                      },
                    })}
                  />
                  <span>{errors?.phone?.message}</span>
                </InputField>
              </Fade>
            )}
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
      {formStatus === "done" && <Message>{text.success.p}</Message>}
    </>
  );
};

export default ContactForm;

const OneLine = styled.div`
  flex-direction: row;
  display: flex;
  gap: 2rem;
  @media (max-width: 600px), (max-height: 450px) {
    display:unset;
  }
`;

const Message = styled.div`
  color: ${(p) => p.theme.colors.success};
  font-size: 1.8rem;
  padding-bottom: 5px;
  max-width: 250px;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
    max-width: 200px;
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
  padding: 5% 7.5%;
  border: 2px solid ${(p) => p.theme.colors.foreground_lowest};
  border-radius: 30px;
  margin-top: -10px;
  display: flex;
  flex-direction: column;
`;
