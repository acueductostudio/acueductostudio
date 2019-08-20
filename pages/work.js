import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import CaseList from "../components/CaseStudies/CaseList";

export default function Work(props) {
  let t = props.locale.work_page;
  let c = props.locale.casestudies.studies;


  return (
    <WorkWrapper>
      <Head>
        <title>Acueducto | Work</title>
      </Head>
      <TitleSection
        title={t.intro.title}
        text={t.intro.p}
        link={t.intro.link}
        borderTop
      />
      <CaseList c={c} />
    </WorkWrapper>
  );
}

const WorkWrapper = styled.div`
  display: flex;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: absolute;
  margin: 0 auto;
  max-width: 1496px;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow: hidden;
`;