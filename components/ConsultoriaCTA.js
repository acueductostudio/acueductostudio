import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { Span } from "components/shared/Dangerously";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { createContact } from "utils/sendinBlue.ts";
import ReactPixel from "react-facebook-pixel";
import DefaultForm from "components/shared/DefaultForm";

const ConsultoriaCTA = ({ cta, id }) => {
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
    <Container>
      <DefaultForm
        onSubmit={onSubmit}
        id={id}
        text={cta}
        formMarkup={
          <>
            <h3>{cta.title}</h3>
            <Span>{cta.price}</Span>
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
