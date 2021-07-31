import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { Span } from "components/shared/Dangerously";
import { createContact } from "utils/sendinBlue";
import ReactPixel from "react-facebook-pixel";
import DefaultForm from "components/shared/DefaultForm";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import BorderLink from "components/shared/BorderedLink";
import delayForLoading from "utils/delayForLoading";
import { logEvent, advancedMatching } from "utils/analytics";

const ConsultoriaCTA = ({
  cta,
  id,
  diagnostico_cta,
  price,
}: {
  cta: any;
  id: string;
  diagnostico_cta?: boolean;
  price?: boolean;
}) => {
  const router = useRouter();

  const onSubmit = (data) => {
    // Create contact and add to list 3 (Consulting funnel) w/ test results
    createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      listIds: [7],
      updateEnabled: true,
    });

    Cookies.set("ue", data.email);

    ReactPixel.init("506854653278097", advancedMatching(data.email));
    // Pidió consultoría
    ReactPixel.track("SubmitApplication", { email: data.email });
    logEvent("consultoría", "dejó email");
    delayForLoading(1500).then(() => router.push("/consultoria/pago"));
  };

  return (
    <Container>
      <DefaultForm
        onSubmit={onSubmit}
        id={id}
        text={cta}
        infinite
        buttonArrowInverse
        formMarkup={
          <>
            <h3>{cta.title}</h3>
            {price ? (
              <Span>{`${cta.price} <em>${cta.sessions}</em>`}</Span>
            ) : (
              <span className="noPrice">
                elevemos tu negocio <em>{cta.sessions}</em>
              </span>
            )}
          </>
        }
      />
      {diagnostico_cta && (
        <Diagnostico>
          <Fade triggerOnce>
            <h3>{cta.title2}</h3>
            <p>
              <span>{cta.linktext}</span>
              <Link href={cta.link[0]}>
                <a>{cta.link[1]}</a>
              </Link>
              <span>{cta.linktext2}</span>
            </p>
          </Fade>
        </Diagnostico>
      )}
    </Container>
  );
};

export default React.memo(ConsultoriaCTA);

const Container = styled.div`
  max-width: 450px;
  & > span {
    color: ${(p) => p.theme.colors.accent};
    font-size: 3rem;
    margin: 0 0 30px 0;
    display: flex;
    font-weight: 200;
    &.noPrice {
      font-size: 2.4rem;
      em {
        margin-top: 9px;
      }
    }
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
  form {
    margin-bottom: 15%;
  }
  h3 {
    font-size: 3.2rem;
    line-height: 125%;
    font-weight: 100;
    margin: 4% 0 0;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.9rem;
    }
  }
  @media (max-width: 1000px) {
    span.noPrice {
      font-size: 2rem;
      em {
        margin-top: 5px;
      }
    }
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.2rem;
    }
    & > span {
      font-size: 2.5rem;
      b {
        font-size: 1.8rem;
        margin-top: 8px;
      }
      em {
        margin-top: 11px;
      }
    }
  }
  @media (max-width: 400px) {
    span.noPrice {
      margin-bottom: 15px;
      em {
        display: none;
      }
    }
  }
`;

const Diagnostico = styled.div`
  p {
    margin-top: 20px;
  }
  a {
    ${BorderLink({ showLink: true })}
  }
`;
