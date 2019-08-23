import styled from "styled-components";
import Head from "next/head";
import Fade from "react-reveal/Fade";
import PageClipper from "../components/PageClipper";
import TitleSection from "../components/TitleSection";


export default function Contact(props) {
  let t = props.locale.contact_page;
  return (
    <PageClipper>
      <Head>
        <title>Acueducto | Contact</title>
      </Head>
      <TitleSection title={t.intro.title} text={t.intro.p}/>
    </PageClipper>
  );
}