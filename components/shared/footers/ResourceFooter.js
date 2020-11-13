import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import FooterNav from "./FooterNav";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import FooterLogoCrop from "./FooterLogoCrop";
import DefaultForm from "components/shared/DefaultForm";
import es from "public/locales/es/resourcefooter.json";
import ArrowButton from "components/shared/footers/ArrowButton";

const ResourceFooter = () => {
  let resource = es.resource_footer;

  const onSubmit = (data) => {
    // // Create contact and add to list 3 (Consulting funnel) w/ test results
    // createContact(data.firstName, data.lastName, data.email, [2], true);
    // ReactPixel.init("506854653278097", { em: data.email });
    // // Suscripción a la newsletter
    // ReactPixel.track("Subscribe", { email: data.email });
    //Aquí tenemos que marcar los que vienen de aquí y los que vienen del podcast?
  };

  return (
    <>
      <Grid>
        <Fade triggerOnce>
          <H1>{resource.title}</H1>
        </Fade>
        <Fade triggerOnce>
          <p>{resource.p}</p>
          <ResourceForm>
            <DefaultForm
              onSubmit={onSubmit}
              text={resource}
              submitButton={<ArrowButton text={resource.submit} submitButton/>}
              successMarkup={<Message success>{resource.success.p}</Message>}
            />
          </ResourceForm>
        </Fade>
        <FooterLogoCrop />
      </Grid>
      <FooterNav />
    </>
  );
};

export default React.memo(ResourceFooter);

const ResourceForm = styled.div`
overflow:hidden;  
position:relative;
form{
  display:flex;
  flex-direction:column;
}
  input {
    background-color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.background};
    &:active, &:focus {
      border-color: ${(props) => props.theme.colors.background} !important;
    }
  }
  form > div:last-of-type {
    input {
      background-color: ${(props) => props.theme.colors.background};
      &:hover{
        color:${(props) => props.theme.colors.accent};
      }
    }
  }
`;

const Message = styled.div`
  color: ${(p) => p.theme.colors.background};
  font-size: 1.8rem;
  padding-bottom: 5px;
  font-weight:200;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

const Grid = styled(TitleSectionGrid)`
  background-color: ${(props) => props.theme.colors.accent};
  box-shadow: 0px -3px 10px rgba(0, 0, 0, 0.1);
  padding: 10% 4% 20% 4%;
  h1 {
    color: ${(props) => props.theme.colors.foreground};
  }
  & > div {
    z-index: 8;
  }
  p {
    z-index: 8;
    color: ${(props) => props.theme.colors.foreground_low};
    margin-bottom: 10px;
    &:hover {
      b {
        border-bottom: ${(props) =>
          props.theme.stroke + " solid " + props.theme.colors.background};
        border-color: transparent;
        transition: 0.3s ease all;
      }
    }
    b {
      cursor: pointer;
      position: relative;
      color: ${(props) => props.theme.colors.foreground};
      font-weight: 100;
      transition: 0.3s ease all 0.1s;
      padding-bottom: 2px;
      border-bottom: ${(props) =>
        props.theme.stroke + " solid " + props.theme.colors.foreground};
    }
  }
  @media (max-width: 600px) {
    > div:nth-of-type(3) {
      margin-bottom: 20%;
    }
    p {
      max-width: 360px;
      padding-bottom: 5%;
    }
  }
  @media (max-width: 450px) {
    p {
      max-width: 360px;
    }
  }
`;
