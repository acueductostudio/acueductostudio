import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import Head from "next/head";
import TitleSection from "../components/TitleSection";

export default function About(props) {
  let t = props.locale.about_page;
  return (
    <NosotrosWrapper>
      <Head>
        <title>Acueducto | About</title>
      </Head>
      <TitleSection title={t.main.title} text={t.main.p}/>
    </NosotrosWrapper>
  );
}

const NosotrosWrapper = styled.div`
    display: flex;
    width: calc(100% - 44px);
    height: calc(100% - 44px);
    position: absolute;
    margin: 0 auto;
    max-width: 1500px;
    top: 20px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    overflow: hidden;
`;
