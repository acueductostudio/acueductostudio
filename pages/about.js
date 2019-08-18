import styled from "styled-components";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";
import Head from "next/head";
import TitleSection from "../components/TitleSection";
import createMarkup from "../helpers/createMarkup";

const Head3D = dynamic(import("../components/head3D/Head3D"), {
  loading: () => <span style={{height: "500px"}}>Loading head...</span>,
  ssr: false
});

export default function About(props) {
  let t = props.locale.about_page;

  let teamMembers = t.team.map(function(member, index) {
    return (
      <Person key={"person" + index}>
        <Head3D file={member.model} key={"model" + index}/>
        <h4>{member.name}</h4>
        <span>{member.position}</span>
        <p dangerouslySetInnerHTML={createMarkup(member.p)} />
      </Person>
    );
  });

  return (
    <NosotrosWrapper>
      <Head>
        <title>Acueducto | About</title>
      </Head>
      <Grid>
        <Fade>
          <h2>{t.main.title}</h2>
          <p dangerouslySetInnerHTML={createMarkup(t.main.p)} />
        </Fade>
        <ScrollDown>{teamMembers}</ScrollDown>
      </Grid>
      <TitleSection title={t.values.title} text={t.values.p} borderTop />
    </NosotrosWrapper>
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

const ScrollDown = styled.div`
  grid-column: 7 / span 4;
  display: flex;
  flex-direction: column;
`;
const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  h2 {
    grid-column: 2 / span 4;
    position: sticky;
    top: 17.5%;
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
    margin-bottom: 5%;
  }
`;

const ModelSection = styled.div`
  min-height: 500px;
  height: auto;
  position: relative;
  width: 100%;
  display: flex;
`;
const NosotrosWrapper = styled.div`
  display: flex;
  width: calc(100% - 44px);
  height: calc(100% - 44px);
  position: absolute;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1500px;
  top: 20px;
  left: 20px;
  bottom: 20px;
  right: 20px;
  overflow-x: hidden;
  overflow-y: scroll;
`;
