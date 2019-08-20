import styled from "styled-components";
import TitleSection from "./TitleSection";

const Services = props => {
  let s = props.s;
  return (
    <ServicesWrapper>
      <TitleSection title={s.intro.title} text={s.intro.p} borderTop/>
    </ServicesWrapper>
  );
};

export default Services;

const ServicesWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
