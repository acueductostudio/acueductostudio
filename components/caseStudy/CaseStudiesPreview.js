import styled from "styled-components";
import TitleSection from "../TitleSection";
import CaseList from "./CaseList";

const CaseStudiesPreview = props => {
  let c = props.c;
  let cpage = props.cpage;
  return (
    <CaseStudiesPreviewWrapper>
      <TitleSection
        title={cpage ? cpage.title : c.intro.title}
        text={cpage ? cpage.p : c.intro.p}
        borderTop
      />
      <CaseList c={c.studies} limit={2} noPlay={props.noPlay} />
    </CaseStudiesPreviewWrapper>
  );
};

export default CaseStudiesPreview;

const CaseStudiesPreviewWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
