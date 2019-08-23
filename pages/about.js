import styled from "styled-components";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import PageClipper from "../components/PageClipper";
import createMarkup from "../helpers/createMarkup";
import Process from "../components/Process";
import Services from "../components/Services";
import ContactFooter from "../components/ContactFooter";
import PinnedSection from "../components/PinnedSection";

const Head3D = dynamic(import("../components/head3D/Head3D"), {
  loading: () => <span style={{ height: "500px" }}>Loading head...</span>,
  ssr: false
});

export default function About(props) {
  let t = props.locale.about_page;
  let s = props.locale.services;
  let p = props.locale.process;
  let f = props.locale.contactfooter;

  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  // let teamMembers = t.team.map(function(member, index) {
  //   return (
  //     <Person key={"person" + index}>
  //       {isVisible? <Head3D file={member.model} key={"model" + index}/> : ""}
  //       <h4>{member.name}</h4>
  //       <span>{member.position}</span>
  //       <p dangerouslySetInnerHTML={createMarkup(member.p)} />
  //     </Person>
  //   );
  // });

  //Arte manual

  return (
    <PageClipper>
      <Head>
        <title>Acueducto | About</title>
      </Head>
      <PinnedSection
        t={t}
        scroll={
          <>
          <Person>
            {isVisible ? <Head3D file={t.team[0].model} /> : ""}
            <h4>{t.team[0].name}</h4>
            <span>{t.team[0].position}</span>
            <p dangerouslySetInnerHTML={createMarkup(t.team[0].p)} />
          </Person>
            <Person>
            {/* {isVisible ? <Head3D file={t.team[1].model} /> : ""} */}
        <h4>{t.team[1].name}</h4>
          <span>{t.team[1].position}</span>
          <p dangerouslySetInnerHTML={createMarkup(t.team[1].p)} />
         </Person>
         </>
        }
      />
      <TitleSection title={t.values.title} text={t.values.p} link={t.values.link} linktext={t.values.linktext} borderTop />
      <Process p={p} />
      <Services s={s} />
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  h4 {
    font-size: 4.5rem;
    margin-bottom: 3%;
  }
  span {
    color: ${props => props.theme.colors.accent};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 3.5px;
    margin-bottom: 6%;
  }
`;

const ModelSection = styled.div`
  min-height: 500px;
  height: auto;
  position: relative;
  width: 100%;
  display: flex;
`;
