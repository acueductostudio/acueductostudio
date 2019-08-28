import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PageClipper from "../../components/PageClipper";
import Fade from "react-reveal/Fade";
import ContactFooter from "../../components/ContactFooter";
import LogoSalvaje from "../../static/assets/img/casestudies/salvajenada/logoSalvaje.svg";
import Ig from "../../static/assets/img/casestudies/salvajenada/ig.svg";
import Ibero from "../../static/assets/img/casestudies/salvajenada/90.svg";
import Wolf from "../../static/assets/img/casestudies/salvajenada/wolf.svg";
import Apple from "../../static/assets/img/casestudies/salvajenada/apple.svg";
import Spotify from "../../static/assets/img/casestudies/salvajenada/spotify.svg";
import createMarkup from "../../helpers/createMarkup";
import Marquee from "../../helpers/react-double-marquee";
import Quote from "../../components/CaseStudies/Quote";
import Stat from "../../components/CaseStudies/Salvajenada/Stat";
import Insight from "../../components/CaseStudies/Insight";
import dynamic from "next/dynamic";

const FramesEmbed = dynamic(
  import("../../components/CaseStudies/FramesEmbed"),
  {
    loading: () => <span style={{ height: "500px" }}>Loading frames...</span>
  }
);

const salvajeBlue = "#009ee2";

export default function Salvajenada(props) {
  let t = props.locale.casestudies.studies.salvajenada;
  let f = props.locale.contactfooter;

  let formarquee = t.intro_section.tags.map(function(tag, index) {
    return <h3 key={index + "h"}>{tag}</h3>;
  });

  const playlistCovers = () => {
    let covers = [];
    for (let i = 1; i < 7; i++) {
      covers.push(
        <img
          key={"c_" + i}
          alt={"salvajenada_release " + i}
          src={`../static/assets/img/casestudies/salvajenada/c_${i}.jpg`}
        />
      );
    }
    return covers;
  };

  const playlistDescriptions = () => {
    let descriptions = [];
    for (let i = 1; i < 7; i++) {
      descriptions.push(
        <img
          key={"d_" + i}
          alt={"salvajenada_writing " + i}
          src={`../static/assets/img/casestudies/salvajenada/d_${i}.jpg`}
        />
      );
    }
    return descriptions;
  };

  const artistShout = () => {
    let x = [];
    x.push(
      <video
        autoPlay
        muted
        loop
        key={"v_4"}
        src={`../static/assets/img/casestudies/salvajenada/p_4.mp4`}
      />
    );
    for (let i = 1; i < 4; i++) {
      x.push(
        <img
          key={"p_" + i}
          alt={"salvajenada_shoutout " + i}
          src={`../static/assets/img/casestudies/salvajenada/p_${i}.jpg`}
        />
      );
    }
    return x;
  };

  const newPlaylistVideos = () => {
    let x = [];
    for (let i = 0; i < 7; i++) {
      x.push(
        <video
          autoPlay
          muted
          loop
          key={"tile_" + i}
          src={`../static/assets/img/casestudies/salvajenada/p_4.mp4`}
        />
      );
    }
    return x;
  };

  return (
    <PageClipper>
      <Head>
        <title>Case Study | Salvajenada</title>
      </Head>
      <GlobalStyle />
      <Fade>
        <Land>
          <LogoSalvaje />
        </Land>
      </Fade>
      <Intro>
        <TagScroll>
          <Marquee delay={0} childMargin={0}>
            {formarquee} {formarquee}
          </Marquee>
        </TagScroll>
        <Video />
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.intro_section.title)} />
          <p>{t.intro_section.p}</p>
          <Graphic>
            <LogoWolf>
              <Wolf />
            </LogoWolf>

            <p>
              <b>429</b>
              <br />
              {t.intro_section.graphicp}
            </p>
          </Graphic>
          <p>{t.intro_section.p2}</p>
        </Limited>
      </Intro>
      <Second>
        <SecondBack />
        <InterBack />
        <StickyContainer>
          <Sticky>
            <span>{t.second_section.sticky}</span>
            <div>
              <a href="https://open.spotify.com/playlist/4GjrIoPOl6xNo9ZPOhF3tz?si=T2xe-69oQfuWo5xmlY7S1g">
                <Spotify />
              </a>
              <a href="https://open.spotify.com/playlist/4GjrIoPOl6xNo9ZPOhF3tz?si=T2xe-69oQfuWo5xmlY7S1g">
                <Apple />
              </a>
            </div>
          </Sticky>
        </StickyContainer>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.second_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.second_section.p)} />
        </Limited>
        <table>
          <tbody>
            <tr>
              <th>{t.second_section.table[0].label}</th>
              <th>{t.second_section.table[1].label}</th>
            </tr>
            <tr>
              <td
                dangerouslySetInnerHTML={createMarkup(
                  t.second_section.table[0].content
                )}
              />
              <td
                dangerouslySetInnerHTML={createMarkup(
                  t.second_section.table[1].content
                )}
              />
            </tr>
          </tbody>
        </table>
        <Limited>
          <p dangerouslySetInnerHTML={createMarkup(t.second_section.p2)} />
          <p
            className="bigger"
            dangerouslySetInnerHTML={createMarkup(t.second_section.p3)}
          />
        </Limited>
        <table>
          <tbody>
            <tr>
              <td
                dangerouslySetInnerHTML={createMarkup(
                  t.second_section.table2[0].p
                )}
                colSpan="2"
              />
            </tr>
            <tr>
              <td
                dangerouslySetInnerHTML={createMarkup(
                  t.second_section.table2[1].p
                )}
              />
              <td
                dangerouslySetInnerHTML={createMarkup(
                  t.second_section.table2[2].p
                )}
              />
            </tr>
          </tbody>
        </table>
        <Quote
          quote={t.second_section.quote.quote}
          name={t.second_section.quote.name}
          marginBottom="0px"
        />
      </Second>
      <Third>
        <ThirdBack />
        <Limited>
          <h3
            dangerouslySetInnerHTML={createMarkup(t.third_section.subtitle)}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.third_section.p)} />
        </Limited>

        <Insight
          title={t.third_section.insights.periodicity.title}
          p={t.third_section.insights.periodicity.p}
          number={1}
        >
          <PlaylistGrid>{playlistCovers()}</PlaylistGrid>
        </Insight>
        <Insight
          title={t.third_section.insights.meaningfulness.title}
          p={t.third_section.insights.meaningfulness.p}
          number={2}
        >
          <PlaylistGrid>{playlistDescriptions()}</PlaylistGrid>
        </Insight>
        <Insight
          title={t.third_section.insights.spreadability.title}
          p={t.third_section.insights.spreadability.p}
          number={3}
        >
          <ShoutGrid>{artistShout()}</ShoutGrid>
        </Insight>
        <Insight
          title={t.third_section.insights.multimedia_development.title}
          p={t.third_section.insights.multimedia_development.p}
          number={3}
        >
          <IberoGrid>
            <Ibero />
            <img
              src="../../static/assets/img/casestudies/salvajenada/ibero.jpg"
              alt="salvajenada en Ibero 90.9"
            />
          </IberoGrid>
        </Insight>
        <Quote
          quote={t.third_section.insights.multimedia_development.quote.quote}
          name={t.third_section.insights.multimedia_development.quote.name}
        />
        {/* <VideoTile>{newPlaylistVideos()}</VideoTile> */}
      </Third>
      <Fourth>
        <FourthBack />
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.fourth_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.fourth_section.p)} />
        </Limited>
        <StatGrid>
          <Stat stat={t.fourth_section.stats[0]} />
          <Stat stat={t.fourth_section.stats[1]} />
          <Stat stat={t.fourth_section.stats[2]} />
          <Stat stat={t.fourth_section.stats[3]} />
          <Stat stat={t.fourth_section.stats[4]}>
            <Wolf />
          </Stat>
        </StatGrid>
        <Limited>
          <p dangerouslySetInnerHTML={createMarkup(t.fourth_section.p2)} />
        </Limited>
      </Fourth>
      <Fifth>
        <FifthBack />
        <Limited>
          <h3 dangerouslySetInnerHTML={createMarkup(t.fifth_section.title)} />
        </Limited>
        <FramesEmbed />
        <a href="https://www.instagram.com/salvajenada/">
          <Ig />
        </a>
      </Fifth>
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const Sticky = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  span {
    padding: 13px 21px;
    border: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.foreground};
    text-align: center;
  }
  div {
    padding: 13px 21px 11px 21px;
    border: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.foreground};
    border-top: 0;
    display: flex;
    a {
      height: 35px;
      &:nth-child(1) {
        padding-right: 8px;
      }
      &:nth-child(2) {
        padding-left: 8px;
      }
    }
    svg {
      width: 100%;
      * {
        fill: ${props => props.theme.colors.foreground};
      }
    }
  }
`;

const StickyContainer = styled.div`
  width: 135px;
  position: sticky;
  right: 0px;
  top: 200px;
  display: flex;
  align-self: flex-end;
  margin-right: 120px;
`;

const StatGrid = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 7% 0px;
  display: grid;
  grid-template-columns: 0.8fr 1fr 0.7fr;
  gap: 4rem;
  div:nth-child(5) {
    grid-column: 3 / span 1;
    grid-row: 1 / span 2;
    padding: 10% 15% 5% 15%;
    svg {
      align-self: flex-end;
      padding: 6% 0 6% 6%;
      margin-right: -10px;
      * {
        fill: ${salvajeBlue};
      }
    }
  }
`;

const VideoTile = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 120%;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  margin-top: 5rem;
  video {
    max-width: 250px;
  }
`;

const IberoGrid = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  margin: 4% 0 2.5% 0;
  svg {
    max-width: 100px;
  }
  img {
    max-width: 300px;
  }
`;

const ShoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  width: auto;
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
  margin-top: 5rem;
  img,
  video {
    max-width: 250px;
  }
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 90%;
  width: auto;
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
  margin-top: 5rem;
  img {
    max-width: 300px;
  }
`;

const Stats = styled.div`
  height: 500px;
  width: 1000px;
  margin: 5% 0;
`;

const CommonStat = styled.div`
  border: 2px solid white;
  display: flex;
  i {
    font-size: 3.4rem;
    font-style: normal;
  }
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

const CommonSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height:auto;
  flex: 0 0 auto;
`;

const CommonTransition = styled.div`
  width: 100%;
  background-position: center bottom;
  background-size: cover;
  height: 0;
`;

const FifthBack = styled(CommonTransition)`
  background-image: url("../static/assets/img/casestudies/salvajenada/fifthBack.svg");
  padding-bottom: 27%;
`;

const Fifth = styled(CommonSection)`
  background-color: ${salvajeBlue};
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

const FourthBack = styled(CommonTransition)`
  background-image: url("../static/assets/img/casestudies/salvajenada/fourthBack.svg");
  padding-bottom: 48%;
  margin-top: -1px;
`;

const Fourth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground};
  margin-bottom: 10%;
`;

const Third = styled(CommonSection)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.foreground};
  margin-top: 5%;
  blockquote {
    color: ${props => props.theme.colors.background};
  }
  h3 {
    font-weight: 200;
  }
`;
const ThirdBack = styled(CommonTransition)`
  background-image: url("../static/assets/img/casestudies/salvajenada/thirdBack.svg");
  padding-bottom: 42%;
`;

const InterBack = styled.div`
  background-image: url("../static/assets/img/casestudies/salvajenada/interBack.svg");
  background-size: cover;
  height: 0px;
  width: 50%;
  padding-bottom: 96%;
  top: 50%;
  transform: translateY(-50%);
  position: absolute;
  right: 0;
  z-index: -1;
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

const SecondBack = styled(CommonTransition)`
  background-image: url("../static/assets/img/casestudies/salvajenada/secondBack.svg");
  padding-bottom: 46%;
  margin-bottom: 10%;
`;

const GlobalStyle = createGlobalStyle`
h2{
  padding: 15% 0 5% 0;
  font-weight:200;
  max-width: 670px;
}
h3{
  font-size:4.5rem;
  margin-bottom: 25px;
}
h4{
  font-size:3rem;
  position:relative;
  span{
    font-size: 1.5rem;
    color: #019EE3;
    display: block;
    position: absolute;
    bottom: 0;
    left: -40px;
    line-height: 190%;
  }
}
p{
  max-width: 670px;
  &.bigger{
    font-size: 3.4rem;
    text-align:center;
    margin-top:10%;
  }
}
table{
  text-align: left;
    width: 100%;
    max-width: 800px;
    padding: 2%;
    border-collapse: collapse;
    margin:5%;
}
table, th, td {
  border: 2px solid ${props => props.theme.colors.foreground_low};
  padding: 25px;
  font-weight:100;
}
`;

const Limited = styled.div``;

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

const LogoWolf = styled.div`
  width: 55%;
  border-right: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
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

const Intro = styled(CommonSection)`
  background-color: ${salvajeBlue};
  color: ${props => props.theme.colors.background};
  padding-bottom: 8%;
  margin-top: -1px;
`;

const Land = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("../static/assets/img/casestudies/salvajenada/landBack.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  svg {
    max-width: 80%;
    max-height: 860px;
    width: 100%;
  }
`;
