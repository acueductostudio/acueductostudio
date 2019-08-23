import styled from "styled-components";
import TitleSection from "./TitleSection";
import Fade from "react-reveal/Fade";

const Services = props => {
  let s = props.s;
  let services = s.service_categories.map(function(service, index) {
    return (
      <Service key={"service" + index}>
        <Fade>
          <Info>
            <h4>{service.title}</h4>
            <ul>
              {service.tags.map(function(tag, index) {
                return <li key={"tag" + index + service.title}>{tag}</li>;
              })}
            </ul>
          </Info>
        </Fade>
      </Service>
    );
  });
  return (
    <ServicesSection>
      <TitleSection title={s.intro.title} text={s.intro.p} borderTop />
      <ServiceGrid>{services}</ServiceGrid>
    </ServicesSection>
  );
};

export default Services;

const Info = styled.div`
  width: auto;
  h4{
    font-weight: 200;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding-bottom: 15%;
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
  text-transform: capitalize;
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
  }
`;

const ServicesSection = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
