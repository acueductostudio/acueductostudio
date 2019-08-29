import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import PageClipper from "../../components/PageClipper";
import Fade from "react-reveal/Fade";
import ContactFooter from "../../components/ContactFooter";
import LogoDanza from "../../static/assets/img/casestudies/lddlf/logoDanza.svg";
import LogoF from "../../static/assets/img/casestudies/lddlf/logoF.svg";
import createMarkup from "../../helpers/createMarkup";
import Marquee from "../../helpers/react-double-marquee";
import Quote from "../../components/CaseStudies/Quote";
import Insight from "../../components/CaseStudies/Insight";
import dynamic from "next/dynamic";

const fierasRed = "#C64028";

export default function Salvajenada(props) {
  let t = props.locale.casestudies.studies.ladanzadelasfieras;
  let f = props.locale.contactfooter;

  let formarquee = t.intro_section.tags.map(function(tag, index) {
    return <h3 key={index + "h"}>{tag}</h3>;
  });

  // const playlistCovers = () => {
  //   let covers = [];
  //   for (let i = 1; i < 7; i++) {
  //     covers.push(
  //       <img
  //         key={"c_" + i}
  //         alt={"salvajenada_release " + i}
  //         src={`../static/assets/img/casestudies/salvajenada/c_${i}.jpg`}
  //       />
  //     );
  //   }
  //   return covers;
  // };

  // const playlistDescriptions = () => {
  //   let descriptions = [];
  //   for (let i = 1; i < 7; i++) {
  //     descriptions.push(
  //       <img
  //         key={"d_" + i}
  //         alt={"salvajenada_writing " + i}
  //         src={`../static/assets/img/casestudies/salvajenada/d_${i}.jpg`}
  //       />
  //     );
  //   }
  //   return descriptions;
  // };

  // const artistShout = () => {
  //   let x = [];
  //   x.push(
  //     <video
  //       autoPlay
  //       muted
  //       loop
  //       key={"v_4"}
  //       src={`../static/assets/img/casestudies/salvajenada/p_4.mp4`}
  //     />
  //   );
  //   for (let i = 1; i < 4; i++) {
  //     x.push(
  //       <img
  //         key={"p_" + i}
  //         alt={"salvajenada_shoutout " + i}
  //         src={`../static/assets/img/casestudies/salvajenada/p_${i}.jpg`}
  //       />
  //     );
  //   }
  //   return x;
  // };

  // const newPlaylistVideos = () => {
  //   let x = [];
  //   for (let i = 0; i < 7; i++) {
  //     x.push(
  //       <video
  //         autoPlay
  //         muted
  //         loop
  //         key={"tile_" + i}
  //         src={`../static/assets/img/casestudies/salvajenada/p_4.mp4`}
  //       />
  //     );
  //   }
  //   return x;
  // };

  return (
    <PageClipper>
      <Head>
        <title>Case Study | La Danza de las Fieras</title>
      </Head>
      <Fade>
        <LandSection>
          <LogoDanza />
        </LandSection>
      </Fade>
      <FirstSection>
        <TagScroll>
          <Marquee delay={0} childMargin={0}>
            {formarquee}
          </Marquee>
        </TagScroll>
        <Video />
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.intro_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.intro_section.p)} />
          <Graphic></Graphic>
          <p>{t.intro_section.p2}</p>
        </Limited>
      </FirstSection>
      <Second>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.second_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.second_section.p)} />
        </Limited>
        <Limited>
          <p dangerouslySetInnerHTML={createMarkup(t.second_section.p2)} />
        </Limited>
      </Second>
      <Third>
        <Limited>
          <h3
            dangerouslySetInnerHTML={createMarkup(
              "– " + t.third_section.subtitle
            )}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.third_section.p)} />
        </Limited>
        <Insight
          insight={t.third_section.insights.portfolio}
          number={1}
          color={fierasRed}
        >
          <Quote
            quote={t.third_section.insights.portfolio.quote}
            color={props => props.theme.colors.background}
          />
        </Insight>
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.press}
          number={2}
        >
          <Quote
            quote={t.third_section.insights.press.quote}
            color={props => props.theme.colors.background}
          />
        </Insight>
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.availability}
          number={3}
        ></Insight>
        <Limited>
          <h3
            dangerouslySetInnerHTML={createMarkup(
              "– " + t.third_section.subtitle2
            )}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.third_section.p2)} />
        </Limited>
      </Third>
      <Fourth>
        <Limited>
          <h3
            dangerouslySetInnerHTML={createMarkup(
              "– " + t.fourth_section.subtitle
            )}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.fourth_section.p)} />
        </Limited>
        <Stat>
          <LogoF />
          <b>81%</b>
          <p>{t.fourth_section.stat}</p>
        </Stat>
        <Limited>
          <p dangerouslySetInnerHTML={createMarkup(t.fourth_section.p2)} />
        </Limited>
      </Fourth>
      <Fifth>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.fifth_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.fifth_section.p)} />
          <Quote
            quote={t.fifth_section.quote}
            color={props => props.theme.colors.background}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.fifth_section.p2)} />
        </Limited>
      </Fifth>
      <Sixth>
        <a href="https://ladanzadelasfieras.com">
          {t.sixth_section.linkp} ladanzadelasfieras.com
        </a>
      </Sixth>
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const Stat = styled.div`
  position: relative;
  margin: 8% 0;
  max-width: 390px;
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.foreground};
  b {
    font-size: 8rem;
    font-weight: 200;
    line-height: 100%;
    display: block;
    text-align: center;
    z-index: 1;
  }
  p {
    z-index: 1;
  }
  svg {
    position: absolute;
    margin: 0 auto;
    width: 20%;
    display: flex;
    z-index: 0;
    align-self: center;
    top: -20px;
  }
`;

const CommonSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  flex: 0 0 auto;
`;

const Sixth = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("../static/assets/img/casestudies/lddlf/sixthBack.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 4.5rem;
    text-decoration: none;
    line-height: 100%;
    border-bottom: 3px solid ${props => props.theme.colors.foreground};
  }
`;

const Fifth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
  padding-bottom: 10%;
  h3 {
    font-size: 4.5rem;
  }
  svg {
    width: 50px;
    * {
      fill: ${props => props.theme.colors.background};
    }
  }
`;

const Fourth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  h3 {
    font-weight: 200;
    color: ${props => props.theme.colors.foreground};
  }
`;

const Third = styled(CommonSection)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.foreground};
  margin-top: 5%;
  h3 {
    font-weight: 200;
  }
`;

const Second = styled(CommonSection)`
  color: ${props => props.theme.colors.foreground_low};
  margin-bottom: 7%;
  h2 {
    color: ${props => props.theme.colors.foreground};
    padding-top: 0;
  }
  table {
    color: ${props => props.theme.colors.foreground};
  }
`;

const Limited = styled.div`
  h2 {
    padding: 15% 0 5% 0;
    font-weight: 200;
    max-width: 670px;
  }
  h3 {
    font-size: 4.5rem;
    margin-bottom: 25px;
  }
  h4 {
    font-size: 3rem;
    position: relative;
    span {
      font-size: 1.5rem;
      color: #019ee3;
      display: block;
      position: absolute;
      bottom: 0;
      left: -40px;
      line-height: 190%;
    }
  }
  p {
    max-width: 670px;
  }
`;

const Graphic = styled.div`
  border: 2px solid black;
  display: flex;
  max-width: 390px;
  margin: 10% auto;
  p {
    padding: 6%;
    width: 100%;
    line-height: 85%;
  }
  b {
    font-size: 8rem;
    font-weight: 200;
    line-height: 100%;
  }
`;

const Video = styled.div`
  background-color: pink;
  height: 0;
  padding-bottom: 45%;
  width: 100%;
  max-width: 1000px;
`;

const TagScroll = styled.div`
  text-transform: uppercase;
  letter-spacing: 4px;
  font-size: 1.4rem;
  white-space: nowrap;
  margin: 5% 0 7% 0;
  width: 100%;
  h3 {
    margin-right: 70px;
    font-weight: 100;
    font-size: 1.4rem;
    display: inline;
  }
`;

const FirstSection = styled(CommonSection)`
  background-color: ${fierasRed};
  color: ${props => props.theme.colors.background};
  padding-bottom: 8%;
  margin-top: -1px;
`;

const LandSection = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("../static/assets/img/casestudies/lddlf/landBack.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  svg {
    max-width: 650px;
    width: 70%;
  }
`;
