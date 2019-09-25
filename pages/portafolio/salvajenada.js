import styled from "styled-components";
import Head from "components/Head";
import { useEffect, useState } from "react";
import Fade from "react-reveal/Fade";
import PageClipper from "components/PageClipper";
import dynamic from "next/dynamic";
import ContactFooter from "components/ContactFooter";
import NextStudy from "components/caseStudy/shared/NextStudy";
import Quote from "components/caseStudy/shared/Quote";
import Stat from "components/caseStudy/salvajenada/Stat";
import Ig from "static/assets/img/casestudies/salvajenada/ig.svg";
import Ibero from "static/assets/img/casestudies/salvajenada/ibero.svg";
import Wolf from "static/assets/img/casestudies/salvajenada/wolf.svg";
import Apple from "static/assets/img/casestudies/salvajenada/apple.svg";
import Spotify from "static/assets/img/casestudies/salvajenada/spotify.svg";
import { H2, H3, P } from "components/caseStudy/shared/Dangerously";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Marquee from "components/caseStudy/shared/Marquee";
import Insight from "components/caseStudy/shared/Insight";
import LogoSalvaje from "static/assets/img/casestudies/salvajenada/logoSalvaje.svg";
import TextColumn from "components/caseStudy/shared/TextColumn";
import CommonSection from "components/caseStudy/shared/CommonSection";

const FramesEmbed = dynamic(
  import("components/caseStudy/salvajenada/FramesEmbed"),
  {
    loading: () => <span style={{ height: "500px" }}>Loading frames...</span>
  }
);

const salvajeBlue = "rgb(60, 179, 224)";

export default function Salvajenada(props) {
  const [loadAssets, setloadAssets] = useState(false);
  let t = props.locale.casestudies.studies.salvajenada;
  let f = props.locale.contactfooter;
  let n = props.locale.next_study;

  useEffect(() => {
    props.setTitle(t.headerTitle);
    setloadAssets(true);
  }, []);

  const playlistCovers = () => {
    let covers = [];
    for (let i = 1; i < 7; i++) {
      covers.push(
        <img
          key={"c_" + i}
          alt={"salvajenada_release " + i}
          src={`/static/assets/img/casestudies/salvajenada/c_${i}.jpg`}
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
          src={`/static/assets/img/casestudies/salvajenada/d_${i}.png`}
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
        playsInline
        muted
        loop
        key={"v_4"}
        poster={`/static/assets/img/casestudies/salvajenada/girlUltra_poster.jpg`}
      >
        <source src="/static/assets/video/casestudies/salvajenada/girlUltra.mp4" />
      </video>
    );
    for (let i = 1; i < 4; i++) {
      x.push(
        <img
          key={"p_" + i}
          alt={"salvajenada_shoutout " + i}
          src={`/static/assets/img/casestudies/salvajenada/p_${i}.jpg`}
        />
      );
    }
    return x;
  };

  return (
    <PageClipper unPadded>
      <Head
        title={"Where playlists meet strategy | Salvajenada & Acueducto"}
        description={
          "We partner with innovators around the globe to develop experiences that tell stories, inspire communities and build meaningful bonds."
        }
        canonical={"https://acueducto.studio/work/salvajenada"}
      />
      <Fade>
        <Land>
          <LogoSalvaje />
        </Land>
      </Fade>
      <Intro>
        <Marquee tags={t.intro_section.tags} amount={2} />
        <IntroVideo link={t.link} />
        <Column>
          <H2>{t.intro_section.title}</H2>
          <p>{t.intro_section.p}</p>
          <WolfDays>
            <LogoWolf>
              <Wolf />
            </LogoWolf>
            <p>
              <b>429</b>
              <br />
              {t.intro_section.graphicp}
            </p>
          </WolfDays>
          <p>{t.intro_section.p2}</p>
        </Column>
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
              <a href="https://music.apple.com/mx/playlist/canasta-b%C3%A1sica/pl.u-e98lkq9hK27VzP">
                <Apple />
              </a>
            </div>
          </Sticky>
        </StickyContainer>
        <Column>
          <H2 className="topUnPadded">{t.second_section.title}</H2>
          <P>{t.second_section.p}</P>
        </Column>
        <TableStrengths>
          <p>{t.second_section.table[0].label}</p>
          <P>{t.second_section.table[0].content}</P>
          <p>{t.second_section.table[1].label}</p>
          <P>{t.second_section.table[1].content}</P>
        </TableStrengths>
        <Column>
          <P>{t.second_section.p2}</P>
        </Column>
        <TableProposition>
          <P colSpan="2">{t.second_section.table2[0].p}</P>
          <P>{t.second_section.table2[1].p}</P>
          <P>{t.second_section.table2[2].p}</P>
        </TableProposition>
        <Quote quote={t.second_section.quote} specialMarginBottom />
      </Second>
      <Third>
        <ThirdBack />
        <Column>
          <H3>{"– " + t.third_section.subtitle}</H3>
          <P>{t.third_section.p}</P>
        </Column>

        <Insight insight={t.third_section.insights.periodicity} number={1}>
          <PlaylistGrid>{loadAssets && playlistCovers()}</PlaylistGrid>
        </Insight>
        <Insight insight={t.third_section.insights.meaningfulness} number={2}>
          <PlaylistGrid>{loadAssets && playlistDescriptions()}</PlaylistGrid>
        </Insight>
        <Insight insight={t.third_section.insights.spreadability} number={3}>
          <ShoutGrid>{loadAssets && artistShout()}</ShoutGrid>
        </Insight>
        <Insight
          insight={t.third_section.insights.multimedia_development}
          p={t.third_section.insights.multimedia_development.p}
          number={4}
        >
          <IberoGrid>
            <Ibero />
            {loadAssets && (
              <img
                src="/static/assets/img/casestudies/salvajenada/ibero.jpg"
                alt="salvajenada en Ibero 90.9"
              />
            )}
          </IberoGrid>
        </Insight>
        <Quote
          quote={t.third_section.insights.multimedia_development.quote}
          color={props => props.theme.colors.background}
        />
      </Third>
      <Fourth>
        <FourthBack />
        <Column>
          <H2>{t.fourth_section.title}</H2>
          <P>{t.fourth_section.p}</P>
        </Column>
        <StatGrid>
          <Stat stat={t.fourth_section.stats[0]} />
          <Stat stat={t.fourth_section.stats[1]} />
          <Stat stat={t.fourth_section.stats[2]} />
          <Stat stat={t.fourth_section.stats[3]} />
          <Stat stat={t.fourth_section.stats[4]}>
            <Wolf />
          </Stat>
        </StatGrid>
        <Column>
          <P>{t.fourth_section.p2}</P>
        </Column>
      </Fourth>
      <Fifth>
        <FifthBack />
        <Column>
          <H3>{t.fifth_section.title}</H3>
        </Column>
        {loadAssets && <FramesEmbed />}
        <a href="https://www.instagram.com/salvajenada/">
          <Ig />
        </a>
      </Fifth>
      <NextStudy n={n} link="ladanzadelasfieras" />
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
      props.theme.stroke + " solid " + props.theme.colors.foreground_low};
    text-align: center;
  }
  div {
    padding: 13px 21px 11px 21px;
    border: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.foreground_low};
    border-top: 0;
    display: flex;
    a {
      height: 40px;
      &:nth-child(1) {
        padding-right: 8px;
      }
      &:nth-child(2) {
        padding-left: 8px;
      }
    }
    svg {
      width: 100%;
      height: 100%;
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
  margin-right: 8%;
  @media (max-width: 1400px) {
    margin-right: 3%;
    ${Sticky} {
      width: 100px;
      span {
        font-size: 1.5rem;
      }
      div a {
        height: 30px;
      }
      span,
      div {
        padding: 9px;
      }
    }
  }
  @media (max-width: 1300px) {
    ${Sticky} {
      svg a {
        padding: 0%;
      }
    }
  }
  @media (max-width: 1250px) {
    display: none;
  }
`;

const StatGrid = styled.div`
  max-width: 1050px;
  width: 100%;
  padding: 0 5%;
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
  @media (max-width: 1100px) {
    div {
      padding-left: 6%;
      &:nth-child(5) {
        padding-left: 10%;
      }
    }
  }
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    div {
      grid-column-end: span 2;
      &:nth-child(5) {
        grid-column: 1 / span 3;
        grid-row: 3;
        padding: 3%;
        flex-direction: row;
        svg {
          width: 30%;
          height: auto;
          padding: 0 2% 0 10%;
        }
      }
    }
  }
  @media (max-width: 800px) {
    grid-gap: 2rem;
  }
  @media (max-width: 700px) {
    grid-template-columns: 0.8fr auto auto auto;
    grid-gap: 0;
    div {
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        margin-top: -2px;
      }
      &:nth-child(2),
      &:nth-child(4) {
        margin-left: -2px;
      }
    }
  }
  @media (max-width: 600px) {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin-top: 8%;
    margin-left: 6%;
    padding-left: 0px;
    width: 95%;
    div {
      &:nth-child(1),
      &:nth-child(2),
      &:nth-child(3),
      &:nth-child(4),
      &:nth-child(5) {
        width: 120px;
        min-width: 70%;
        margin: 0 5% 5% 0;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
        scroll-snap-align: center;
        scroll-snap-stop: always;
        text-align: center;
        padding: 2%;
        align-items: center;
        justify-content: center;
      }
      svg {
        display: none;
      }
    }
  }
`;

const IberoGrid = styled.div`
  display: flex;
  align-items: center;
  margin: 5rem 0 2.5% 0;
  img {
    max-width: 850px;
    width: 100%;
  }
  @media (max-width: 600px) {
    margin-top: 8%;
  }
`;

const ShoutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  max-width: 90%;
  width: 100%;
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
  margin-top: 5rem;
  img,
  video {
    max-width: 250px;
    width: 100%;
  }
  @media (max-width: 1100px) {
    grid-gap: 1rem;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 600px) {
    width: 110%;
    margin-left: 10%;
    max-width: unset;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin-top: 8%;
    img,
    video {
      max-width: 70%;
      margin-right: 5%;
      margin-bottom: 5%;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;

const PlaylistGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 90%;
  width: 100%;
  align-items: center;
  justify-items: center;
  grid-gap: 5rem;
  margin-top: 5rem;
  img {
    max-width: 300px;
    width: 100%;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 600px) {
    width: 110%;
    margin-left: 10%;
    max-width: unset;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin-top: 8%;
    img {
      max-width: 70%;
      margin-right: 5%;
      margin-bottom: 5%;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`;

const Table = styled.div`
  display: grid;
  text-align: left;
  width: 90%;
  max-width: 800px;
  margin: 5%;
  box-shadow: 0 0 0 2px ${props => props.theme.colors.foreground_low};
  p {
    box-shadow: 0 0 0 1px ${props => props.theme.colors.foreground_low};
    padding: 25px;
    font-weight: 100;
    color: ${props => props.theme.colors.foreground};
  }
  @media (max-width: 900px) {
    margin: 10% 5%;
  }
  @media (max-width: 700px) {
    p {
      padding: 15px;
    }
  }
  @media (max-width: 615px) {
    font-size: 1.5rem;
  }
  @media (max-width: 500px) {
    display: flex;
    flex-direction: column;
  }
`;

const TableProposition = styled(Table)`
  grid-template-columns: 1fr 0.7fr;
  p {
    &:nth-child(1) {
      grid-column: 1 / span 2;
    }
  }
`;
const TableStrengths = styled(Table)`
  grid-template-columns: 1fr 1fr;
  p {
    &:nth-child(3) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }
  }
  @media (max-width: 500px) {
    p {
      &:nth-child(1),
      &:nth-child(3) {
        font-weight: 200;
        color: ${props => props.theme.colors.foreground};
      }
      &:nth-child(2),
      &:nth-child(4) {
        color: ${props => props.theme.colors.foreground_low};
      }
    }
  }
`;

const CommonTransition = styled.div`
  width: 100%;
  background-position: center bottom;
  background-size: cover;
  height: 0;
  margin: -1px 0;
`;

const FifthBack = styled(CommonTransition)`
  background-image: url("/static/assets/img/casestudies/salvajenada/fifthBack.svg");
  padding-bottom: 28%;
  @media (max-width: 1300px) {
    padding-bottom: 40%;
  }
  @media (max-width: 600px) {
    padding-bottom: 60%;
  }
`;

const Fifth = styled(CommonSection)`
  background-color: ${salvajeBlue};
  color: ${props => props.theme.colors.background};
  padding-bottom: 10%;
  svg {
    width: 50px;
    * {
      fill: ${props => props.theme.colors.background};
    }
  }
`;

const FourthBack = styled(CommonTransition)`
  background-image: url("/static/assets/img/casestudies/salvajenada/fourthBack.svg");
  padding-bottom: 48%;
  @media (max-width: 1300px) {
    padding-bottom: 55%;
  }
  @media (max-width: 800px) {
    padding-bottom: 65%;
  }
  @media (max-width: 500px) {
    padding-bottom: 95%;
  }
`;

const Fourth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  h2 {
    color: ${props => props.theme.colors.foreground};
    b {
      color: ${salvajeBlue};
    }
  }
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
  background-image: url("/static/assets/img/casestudies/salvajenada/thirdBack.svg");
  padding-bottom: 37%;
  margin-bottom: -1px;
  margin-top: -1px;
  @media (max-width: 1100px) {
    padding-bottom: 50%;
  }
  @media (max-width: 700px) {
    padding-bottom: 70%;
  }
`;

const InterBack = styled.div`
  background-image: url("/static/assets/img/casestudies/salvajenada/interBack.svg");
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
  margin-bottom: 15%;
  h1 {
    padding-top: 0;
  }
  h2 {
    color: ${props => props.theme.colors.foreground};
    padding-top: 0;
    b {
      color: ${salvajeBlue};
    }
  }
  table {
    color: ${props => props.theme.colors.foreground};
  }
`;

const SecondBack = styled(CommonTransition)`
  background-image: url("/static/assets/img/casestudies/salvajenada/secondBack.svg");
  padding-bottom: 46%;
  margin-bottom: 10%;
  @media (max-width: 1300px) {
    padding-bottom: 60%;
  }
  @media (max-width: 800px) {
    padding-bottom: 60%;
  }
  @media (max-width: 500px) {
    padding-bottom: 90%;
  }
`;

const Column = styled(TextColumn)`
  h3 {
    padding-top: 0;
  }
`;

const LogoWolf = styled.div`
  width: 55%;
  border-right: 2px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WolfDays = styled.div`
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
  @media (max-width: 450px) {
    b {
      font-size: 6rem;
    }
    ${LogoWolf} {
      width: 30%;
      padding: 3% 5%;
    }
  }
  @media (max-width: 350px) {
    p {
      font-size: 1.4rem;
    }
  }
`;

const Intro = styled(CommonSection)`
  background-color: ${salvajeBlue};
  color: ${props => props.theme.colors.background};
  padding-bottom: 8%;
  margin-top: -1px;
  h2 b {
    color: ${props => props.theme.colors.background};
  }
`;

const Land = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("/static/assets/img/casestudies/salvajenada/landBack.svg");
  background-position: center bottom;
  background-size: cover;
  svg {
    max-width: 800px;
    width: 70%;
  }
`;
