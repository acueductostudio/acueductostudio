import styled from "styled-components";
import TitleSection from "../components/TitleSection";
import createMarkup from "../helpers/createMarkup";
import Envision from "../static/assets/img/layout/steps/envision.svg";
import Fade from "react-reveal/Fade";

const CaseStudiesSmall = props => {
  let t = props.t.studies;
  return (
    <CaseStudiesSmallWrapper>
      <TitleSection title={t.title} text={t.p} borderTop />
    </CaseStudiesSmallWrapper>
  );
};

export default CaseStudiesSmall;

const CaseStudiesSmallWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
  min-height: 90vh;
`;
