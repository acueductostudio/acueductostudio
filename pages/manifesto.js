import styled from "styled-components";
import Head from "next/head";
import PageClipper from "../components/PageClipper";
import ContactFooter from "../components/ContactFooter";
import PinnedSection from "../components/PinnedSection";
import CaseStudiesPreview from "../components/CaseStudies/CaseStudiesPreview";

export default function Manifesto(props) {
  let t = props.locale.manifesto_page;
  let f = props.locale.contactfooter;
  let c = props.locale.casestudies;

  let beliefs = t.beliefs.map(function(belief, index) {
    return (
      <Belief key={"belief" + index}>
        <span>{index + 1}</span>
        <h3>{belief.title}</h3>
        <p>{belief.p}</p>
      </Belief>
    );
  });
  return (
    <PageClipper>
      <Head>
        <title>Acueducto | Manifesto</title>
      </Head>
      <PinnedSection t={t} scroll={<ol>{beliefs}</ol>} />
      <CaseStudiesPreview c={c} />
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const Belief = styled.li`
list-style:none;
position:relative;
margin-bottom: 25%;
  span {
    color: ${props => props.theme.colors.accent};
    font-size:3.5rem;
    position: absolute;
    left: -4.5rem;
  }
  h3{
    font-size:3rem;
    margin-bottom:10px;
  }
`;
