import Head from "components/Head";
import styled from "styled-components";
import { useEffect } from "react";
import TitleSection from "components/shared/TitleSection";
import CaseList from "components/caseStudy/CaseList";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";

export default function Work(props) {
  let t = props.locale.work_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipperPadded>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/portafolio"}
        en_canonical={"https://acueducto.studio/en/work"}
        lang={props.lang}
      />
      <TitleSection title={t.intro.title} text={t.intro.p} />
      <CaseList />
      <ContactFooter />
    </PageClipperPadded>
  );
}

const PageClipperPadded = styled(PageClipper)`
  @media (max-width: 1300px) {
    padding-top: 5%;
  }
  @media (max-width: 700px) {
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 15%;
  }
`;
