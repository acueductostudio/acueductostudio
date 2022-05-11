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
  infinite?: boolean;
};

const MetalForm = ({ text, onSubmit, id, infinite }: MetalFormProps) => {
  const [formStatus, setFormStatus] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmitInside = (data) => {
    setFormStatus("loading");
    onSubmit(data);
    !infinite && delayForLoading(1500).then(() => setFormStatus("done"));
  };

  return (
    <>
      {formStatus === "" && (
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
            <span>{errors?.email?.message}</span>
          </InputField>
          <ButtonArrow text={text.submit} inverse={true} submitButton />
        </PillForm>
      )}
      {formStatus === "loading" && (
        <Fade triggerOnce>
          <Loading>
            <p>{text.loading}</p>
          </Loading>
        </Fade>
      )}
      {formStatus === "done" && <p>{text.success}</p>}
    </>
  );
};

export default MetalForm;

const PillForm = styled.form`
  display: flex;
  margin-top: 2%;
  & div:nth-of-type(1) {
    width: auto;
    margin: 0;
    input {
      border-radius: 100px 0 0 100px;
      height: 57px;
      padding: 11px 16px 16px 24px;
    }
    label {
      opacity: 0;
    }
  }
  & div:nth-of-type(2) {
    border-radius: 0px 100px 100px 0;
    margin: 0;
    align-self: flex-end;
    margin-left: -2px;
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
