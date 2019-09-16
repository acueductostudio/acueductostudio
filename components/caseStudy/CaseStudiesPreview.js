import styled from "styled-components";
import TitleSection from "../TitleSection";
import CaseList from "./CaseList";

const CaseStudiesPreview = props => {
  let c = props.c;
  return (
    <CaseStudiesPreviewWrapper>
      <TitleSection title={c.intro.title} text={c.intro.p} borderTop/>
      <CaseList c={c.studies} limit={2}/>
    </CaseStudiesPreviewWrapper>
  );
};

export default CaseStudiesPreview;

const CaseStudiesPreviewWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
