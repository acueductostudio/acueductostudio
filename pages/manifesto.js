import styled from "styled-components";
import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "../components/PageClipper";
import ContactFooter from "../components/ContactFooter";
import PinnedSection from "../components/PinnedSection";
import CaseStudiesPreview from "../components/caseStudy/CaseStudiesPreview";

export default function Manifesto(props) {
  let t = props.locale.manifesto_page;
  let f = props.locale.contactfooter;
  let c = props.locale.casestudies;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, []);

  let beliefs = t.beliefs.map(function(belief, index) {
    return (
      <Belief key={"belief" + index}>
        <span>0{index + 1}</span>
        <h3>{belief.title}</h3>
        <p>{belief.p}</p>
      </Belief>
    );
  });
  return (
    <PageClipper>
      <Head
        title={"Manifesto | What makes us better"}
        description={
          "We partner with innovators around the globe to develop experiences that tell stories, inspire communities and build meaningful bonds."
        }
        canonical={"https://acueducto.studio/manifesto/"}
      />
      <PinnedSection t={t}>
        <ol>{beliefs}</ol>
      </PinnedSection>
      <CaseStudiesPreview c={c} />
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const Belief = styled.li`
  list-style: none;
  position: relative;
  margin-bottom: 25%;
  span {
    color: ${props => props.theme.colors.accent};
    font-weight: 200;
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
