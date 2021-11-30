import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import FooterNav from "./FooterNav";
import { Fade } from "react-awesome-reveal";
import TitleSectionGrid from "components/shared/TitleSectionGrid";
import FooterLogoCrop from "./FooterLogoCrop";
import DefaultForm from "components/shared/DefaultForm";
import es from "public/locales/es/resourcefooter.json";
import { createContact } from "utils/sendinBlue";
import { logEvent, advancedMatching } from "utils/analytics";
import ReactPixel from "react-facebook-pixel";
import Link from "next/link";

const ResourceFooter = ({
  shadow,
  identify,
  podcastEpisodes,
}: {
  shadow?: boolean;
  identify?: string;
  podcastEpisodes?: number;
}) => {
  let resource = es.resource_footer;

  const onSubmit = (data) => {
    // Copied from newsletter Popup
    createContact({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      listIds: [2],
      updateEnabled: true,
      attributes: {
        SUBSCRIBED_FROM: identify ? identify : "sin identificar",
      },
    });
    ReactPixel.init("506854653278097", advancedMatching(data.email));
    // Suscripción a la newsletter
    logEvent("newsletter-footer", "dejó email");
    ReactPixel.track("Subscribe", advancedMatching(data.email));
  };

  return (
    <>
      <Grid shadow={shadow}>
        <Fade triggerOnce>
          <H1>{resource.title}</H1>
        </Fade>
        <Fade triggerOnce>
          <p>{resource.p}</p>
        </Fade>
        {identify !== "mvs" && (
          <Fade triggerOnce>
            <p>
              {resource.p2}
              {podcastEpisodes ? podcastEpisodes : "decenas de"}
              {resource.p3}
              <Link href={"/mvs"} passHref>
                <a>Minimum Viable Startup</a>
              </Link>
              .
            </p>
          </Fade>
        )}
        <Fade triggerOnce>
          <ResourceForm>
            <DefaultForm
              id="resourceFooter"
              onSubmit={onSubmit}
              text={resource}
              buttonArrow
              successMarkup={<Message>{resource.success.p}</Message>}
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
  overflow: hidden;
  position: relative;
  max-width: 445px;
  form {
    display: flex;
    flex-direction: column;
  }
  input {
    background-color: ${(props) => props.theme.colors.accent};
    border-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.foreground};
    &::placeholder {
      color: ${(props) => props.theme.colors.background};
    }
    &:active,
    &:focus {
      border-color: ${(props) => props.theme.colors.foreground} !important;
      &::placeholder {
        color: ${(props) => props.theme.colors.background};
      }
    }
    &:hover {
      &::placeholder {
        color: ${(props) => props.theme.colors.background};
      }
    }
  }
`;

const Message = styled.div`
  color: ${(p) => p.theme.colors.foreground};
  font-size: 1.8rem;
  padding-bottom: 5px;
  font-weight: 300;
  @media (max-width: 600px), (max-height: 450px) {
    font-size: 1.5rem;
  }
`;

const Grid = styled(TitleSectionGrid)<{ shadow?: boolean }>`
  background-color: ${(p) => p.theme.colors.accent};
  box-shadow: ${(p) =>
    p.shadow ? "0px -3px 10px rgba(0, 0, 0, 0.1);" : "none"};
  padding: 10% 4% 20% 4%;
  h1 {
    color: ${(p) => p.theme.colors.foreground};
  }
  & > div {
    z-index: 8;
  }
  p {
    z-index: 8;
    color: ${(p) => p.theme.colors.foreground_low};
    margin-bottom: 10px;
    margin-top: -20px;
    &:hover {
      b {
        border-bottom: ${(p) =>
          p.theme.stroke + " solid " + p.theme.colors.background};
        border-color: transparent;
        transition: 0.3s ease all;
      }
    }
    b {
      cursor: pointer;
      position: relative;
      color: ${(p) => p.theme.colors.foreground};
      font-weight: 100;
      transition: 0.3s ease all 0.1s;
      padding-bottom: 2px;
      border-bottom: ${(p) =>
        p.theme.stroke + " solid " + p.theme.colors.foreground};
    }
  }
  @media (max-width: 600px) {
    > div:nth-of-type(3) {
      margin-bottom: 20%;
    }
    p {
      max-width: 360px;
      margin-top: unset;
    }
  }
  @media (max-width: 450px) {
    p {
      max-width: 360px;
    }
  }
`;
