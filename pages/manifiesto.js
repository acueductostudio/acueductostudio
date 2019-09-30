import styled from "styled-components";
import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "../components/PageClipper";
import ContactFooter from "../components/ContactFooter";
import PinnedSection from "../components/PinnedSection";
import TitleSection from "components/TitleSection";
import CaseList from "components/caseStudy/CaseList";
import Fade from "react-reveal/Fade";

export default function Manifesto(props) {
  let t = props.locale.manifesto_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  let beliefs = t.beliefs.map(function(belief, index) {
    return (
      <Belief key={"belief" + index}>
        <Fade>
          <span>0{index + 1}</span>
          <h3>{belief.title}</h3>
          <p>{belief.p}</p>
        </Fade>
      </Belief>
    );
  });
  return (
    <PageClipper>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/manifiesto"}
        en_canonical={"https://acueducto.studio/en/manifesto"}
        lang={props.lang}
      />
      <PinnedSection t={t}>
        <ol>{beliefs}</ol>
      </PinnedSection>
      <TitleSection title={t.cases.title} text={t.cases.p} borderTop />
      <CaseList />
      <ContactFooter />
    </PageClipper>
  );
}

const Belief = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 25%;
  span {
    color: ${props => props.theme.colors.accent};
    font-weight: 100;
    left: -3px;
    font-size: 5rem;
    position: relative;
  }
  h3 {
    font-size: 2.5rem;
    margin-bottom: 10px;
    font-weight: 200;
  }
  @media (max-width: 1250px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 1100px) {
    margin-bottom: 15%;
  }
  @media (max-width: 600px) {
    margin-bottom: 12%;
    span {
      font-size: 4rem;
    }
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 400px) {
    span {
      font-size: 3.7rem;
    }
    h3 {
      font-size: 2rem;
    }
  }
`;
