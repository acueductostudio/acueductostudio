import Head from "../components/Head";
import styled from "styled-components";
import { useEffect } from "react";
import TitleSection from "../components/TitleSection";
import CaseList from "../components/caseStudy/CaseList";
import PageClipper from "../components/PageClipper";
import ContactFooter from "../components/ContactFooter";

export default function Work(props) {
  let t = props.locale.work_page;
  let c = props.locale.casestudies.studies;
  let f = props.locale.contactfooter;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, []);

  return (
    <PageClipperPadded>
      <Head
        title={"Our Work | Let's build amazing things together"}
        description={
          "We partner with innovators around the globe to develop experiences that tell stories, inspire communities and build meaningful bonds."
        }
        canonical={"https://acueducto.studio/work/"}
      />
      <TitleSection
        title={t.intro.title}
        text={t.intro.p}
        link={t.intro.link}
      />
      <CaseList c={c} />
      <ContactFooter f={f} />
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
