import { useLocaleContext } from "utils/LangContext";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { H3 } from "components/shared/Dangerously";

const Services = () => {
  const context = useLocaleContext();
  const { intro, service_categories } = context.home_page.services;
  return (
    <ServicesSection id={context.lang == "en" ? "services" : "servicios"}>
      <H3>{intro.title}</H3>
      <ServiceGrid>
        {service_categories.map((service, index) => (
          <Service key={"service" + index}>
            <Fade>
              <Info>
                <h4>{service.title}</h4>
                <ul>
                  {service.tags.map((tag, index) => (
                    <li key={"tag" + index + service.title}>{tag}</li>
                  ))}
                </ul>
              </Info>
            </Fade>
          </Service>
        ))}
      </ServiceGrid>
    </ServicesSection>
  );
};

export default React.memo(Services);

const Info = styled.div`
  width: auto;
  h4 {
    font-weight: 300;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 15%;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const Service = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  border-width: ${props =>
    props.theme.stroke +
    " " +
    props.theme.stroke +
    " " +
    props.theme.stroke +
    " 0"};
  padding: 20%;
  &:nth-child(3) {
    border-right: 0;
  }
  ul {
    margin: 20px 0 0 0;
  }
  li {
    list-style: none;
    line-height: 135%;
    color: ${props => props.theme.colors.foreground_low};
    &:before {
      content: "– ";
      font-weight: 300;
      color: ${props => props.theme.colors.accent};
      margin-left: -16px;
    }
  }
  @media (max-width: 1000px) {
    padding: 12%;
    align-items: flex-start;
    ul li {
      font-size: 1.5rem;
      &:before {
        margin-left: 0px;
      }
    }
  }
  @media (max-width: 800px) {
    padding: 10% 0 10% 10%;
    border-right: 0;
    &:nth-child(1),
    &:nth-child(2) {
      border-bottom: none;
    }
    h4 {
      font-size: 2.5rem;
    }
    ul {
      margin-top: 8px;
      li {
        font-size: 1.6rem;
        &:before {
          content: "";
        }
      }
    }
  }
  @media (max-width: 600px) {
    padding: 5% 0 5% 5%;
    h4 {
      text-transform: lowercase;
      font-size: 2.3rem;
    }
  }
`;

const ServicesSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  h3 {
    color: ${props => props.theme.colors.accent};
    text-align: center;
    margin-top: 10%;
    font-size: 4rem;
    font-weight: 300;
    padding-bottom: 2%;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 950px) {
    h3 {
      font-size: 3.2rem;
      padding-bottom: 4%;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.8rem;
    }
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }
`;
