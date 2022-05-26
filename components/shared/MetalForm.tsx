import { useState } from "react";
import { useForm } from "react-hook-form";
import styled, { keyframes } from "styled-components";
import { Fade } from "react-awesome-reveal";
import delayForLoading from "utils/delayForLoading";
import InputField from "components/shared/ContactInputField";
import ButtonArrow from "components/shared/footers/ButtonArrow";

type MetalFormProps = {
  text: {
    email: {
      placeholder: string;
      errorMissing: string;
      errorInvalid: string;
    };
    loading: string;
    submit: string;
    success: string;
  };
  onSubmit: (data: object) => void;
  id: string;
};

const MetalForm = ({ text, onSubmit, id }: MetalFormProps) => {
  const [formStatus, setFormStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitInside = (data) => {
    setFormStatus("loading");
    onSubmit(data);
    delayForLoading(1500).then(() => setFormStatus("done"));
  };

  return (
    <>
      {formStatus === "" && (
        <Fade triggerOnce>
          <PillForm onSubmit={handleSubmit(onSubmitInside)}>
            <InputField>
              <label htmlFor={`${id}email`}>email</label>
              <input
                name="email"
                id={`${id}email`}
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
              {errors?.email && (
                <Fade>
                  <span>{errors?.email?.message}</span>
                </Fade>
              )}
            </InputField>
            <ButtonArrow text={text.submit} inverse={true} submitButton />
          </PillForm>
        </Fade>
      )}
      {formStatus === "loading" && (
        <Fade triggerOnce>
          <Loading />
        </Fade>
      )}
      {formStatus === "done" && (
        <Fade triggerOnce>
          <Success>
            <p>{text.success}</p>
          </Success>
        </Fade>
      )}
    </>
  );
};

export default MetalForm;

const PillForm = styled.form`
  position: relative;
  display: flex;
  margin-top: 6%;
  text-align:left;
  & div:nth-of-type(1) {
    width: auto;
    margin: 0;
    input {
      border-radius: 100px 0 0 100px;
      height: 57px;
      padding: 11px 16px 16px 24px;
    }
    span {
      background-color: #cc2e44;
      color: ${(p) => p.theme.colors.foreground};
      border-radius: 50px;
      width: auto;
      display: flex;
      padding: 6px 18px 10px;
      margin-top: 5px;
      align-self: flex-start;
      position: absolute;
      bottom: -50px;
    }
    label {
      opacity: 0;
      font-size: 0;
      margin: 0;
    }
  }
  & div:nth-of-type(2) {
    border-radius: 0px 100px 100px 0;
    margin: 0;
    margin-left: -2px;
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  }
  @media (max-width: 800px) {
    flex-direction: column;
    & div:nth-of-type(1) {
      max-width: 350px;
      input {
        border-radius: 100px;
        height: 57px;
        padding: 11px 16px 16px 24px;
      }
      span {
        position: relative;
        display: inline-block;
        margin: 0;
        bottom: -5px;
      }
    }
    & div:nth-of-type(2) {
      border-radius: 100px;
      margin-top: 10px;
      margin-left: inherit;
      align-self: flex-start;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
    }
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
  max-width: 445px;
  align-items: center;
  justify-content: flex-start;
  align-items: flex-start;
  display: flex;
  margin-top: 6%;
  flex-direction: column;
  border: 2px solid ${(p) => p.theme.colors.accent};
  border-radius: 50px;
  background-color: rgba(255, 255, 255, 0.15);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  p {
    margin-bottom: 5px;
  }
  &:before {
    content: " ";
    background-color: ${(p) => p.theme.colors.accent};
    height: 53px;
    border-radius: 40px;
    width: 10%;
    animation: 3s ${fadeIn} ease-out infinite;
    animation-iteration-count: infinite;
  }
`;

const Success = styled.div`
  border: ${(p) => p.theme.colors.success} solid 1px;
  background-color: #c1f1d5;
  border-radius: 50px;
  width: auto;
  display: inline-flex;
  padding: 6px 22px 10px;
  align-self: flex-start;
  margin-top: 6%;
  height: 57px;
  justify-self: flex-start;
  p {
    padding-top: 0;
    max-width: unset;
    align-self: center;
    color: #1c7d45;
  }
`;
