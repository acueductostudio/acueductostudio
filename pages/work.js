import styled from "styled-components";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import CaseList from "../components/CaseStudies/CaseList";
import PageClipper from "../components/PageClipper";
import ContactFooter from "../components/ContactFooter";

export default function Work(props) {
  let t = props.locale.work_page;
  let c = props.locale.casestudies.studies;
  let f = props.locale.contactfooter;

  return (
    <PageClipper>
      <Head>
        <title>Acueducto | Work</title>
      </Head>
      <TitleSection
        title={t.intro.title}
        text={t.intro.p}
        link={t.intro.link}
      />
      <CaseList c={c} />
      <ContactFooter f={f} />
    </PageClipper>
  );
}