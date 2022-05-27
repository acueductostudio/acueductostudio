import React, { useEffect, useState } from "react";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import Head from "components/layout/Head";
import { Fade } from "react-awesome-reveal";
import PageClipper from "components/layout/PageClipper";
import dynamic from "next/dynamic";
import ContactFooter from "components/shared/footers/ContactFooter";
import NextStudy from "components/caseStudy/shared/NextStudy";
import Quote from "components/caseStudy/shared/Quote";
import Stat from "components/caseStudy/salvajenada/Stat";
import { H2, H3, P } from "components/shared/Dangerously";
import Picture from "components/caseStudy/shared/Picture";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Marquee from "components/caseStudy/shared/Marquee";
import Insight from "components/caseStudy/shared/Insight";
import TextColumn from "components/caseStudy/shared/TextColumn";
import CommonSection from "components/caseStudy/shared/CommonSection";

import Spotify from "public/assets/img/layout/logos/spotify.svg";
import AppleMusic from "public/assets/img/layout/logos/applemusic.svg";
import Ig from "public/assets/img/layout/logos/ig.svg";

import Wolf from "public/assets/img/casestudies/salvajenada/wolf.svg";
import LogoSalvaje from "public/assets/img/casestudies/salvajenada/logoSalvaje.svg";

const InterBackImg = dynamic(
  import("public/assets/img/casestudies/salvajenada/interBack2.svg"),
  {
    ssr: false,
  }
);

const SecondBackImg = dynamic(
  import("public/assets/img/casestudies/salvajenada/secondBack2.svg"),
  {
    ssr: false,
  }
);

const ThirdBackImg = dynamic(
  import("public/assets/img/casestudies/salvajenada/thirdBack2.svg"),
  {
    ssr: false,
  }
);

const FourthBackImg = dynamic(
  import("public/assets/img/casestudies/salvajenada/fourthBack2.svg"),
  {
    ssr: false,
  }
);

const FifthBackImg = dynamic(
  import("public/assets/img/casestudies/salvajenada/fifthBack2.svg"),
  {
    ssr: false,
  }
);

const FramesEmbed = dynamic(
  import("components/caseStudy/salvajenada/FramesEmbed"),
  {
    loading: () => <span style={{ height: "500px" }}>Loading frames...</span>,
  }
);

const salvajeBlue = "rgb(60, 179, 224)";

const periodicity_covers = [
  { alt: "Salvajenada - Canásta Básica #27 - Solange" },
  { alt: "Salvajenada - Canásta Básica #29 - Michelle Blades" },
  { alt: "Salvajenada - Canásta Básica #30 - Solange" },
  { alt: "Salvajenada - Canásta Básica #28 - Kevin Abstract" },
  { alt: "Salvajenada - Canásta Básica #34 - Noa Sainz" },
  {
    alt: "Salvajenada - Canásta Básica #33 - Tyler, The Creator",
  },
];

const meaningfulness_covers = [
  { alt: "Salvajenada - Canásta Básica - Balmy Evening" },
  { alt: "Salvajenada - Canásta Básica - Claustro" },
  { alt: "Salvajenada - Canásta Básica - The Experimenter" },
  { alt: "Salvajenada - Canásta Básica - Miel" },
  { alt: "Salvajenada - Canásta Básica - One Eye Open" },
  {
    alt: "Salvajenada - Canásta Básica - Un Arpa Descansa Dentro de un Piano de Cola",
  },
];

const spreadability_covers = [
  { alt: "Salvajenada - Canásta Básica - Shout out - WetBaes" },
  { alt: "Salvajenada - Canásta Básica - Shout out - Valgur" },
  { alt: "Salvajenada - Canásta Básica - Shout out - Yecto" },
];

export default function Salvajenada({ locale, setTitle, pt }) {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.salvajenada.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    setloadAssets(true);
  }, [locale]);

  return (
    <PageClipper unPadded>
      <Head
        {...t.head}
        image={{ fileName: "og_image_salvajenada.png", alt: t.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/salvajenada"}
        en_canonical={"https://acueducto.studio/en/work/salvajenada"}
      />
      <Fade triggerOnce>
        <Land>
          <Fade delay={250} triggerOnce>
            <LogoSalvaje />
          </Fade>
        </Land>
      </Fade>
      <Intro>
        <Marquee tags={t.intro_section.tags} />
        <IntroVideo link={t.link} />
        <Column>
          <H2>{t.intro_section.title}</H2>
          <P>{t.intro_section.p}</P>
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
        <SecondBack>
          <SecondBackImg />
        </SecondBack>
        <InterBack>
          <InterBackImg />
        </InterBack>
        <StickyContainer>
          <Sticky>
            <Fade triggerOnce>
              <span>{t.second_section.sticky}</span>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://open.spotify.com/playlist/4GjrIoPOl6xNo9ZPOhF3tz?si=T2xe-69oQfuWo5xmlY7S1g"
                >
                  <Spotify />
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://music.apple.com/mx/playlist/canasta-b%C3%A1sica/pl.u-e98lkq9hK27VzP"
                >
                  <AppleMusic />
                </a>
              </div>
            </Fade>
          </Sticky>
        </StickyContainer>
        <Column>
          <H2 className="topUnPadded">{t.second_section.title}</H2>
          <P>{t.second_section.p}</P>
        </Column>
        <TableStrengths>
          <div>
            <Fade triggerOnce>
              <p>{t.second_section.table[0].label}</p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce>
              <P>{t.second_section.table[0].content}</P>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce>
              <p>{t.second_section.table[1].label}</p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce>
              <P>{t.second_section.table[1].content}</P>
            </Fade>
          </div>
        </TableStrengths>
        <Column>
          <P>{t.second_section.p2}</P>
        </Column>
        <TableProposition>
          <div>
            <Fade triggerOnce>
              <p>{t.second_section.table2[0].label}</p>
            </Fade>
          </div>
          <div>
            <Fade triggerOnce>
              <p>{t.second_section.table2[0].content}</p>
            </Fade>
          </div>
        </TableProposition>
        <Quote quote={t.second_section.quote} specialMarginBottom />
      </Second>
      <Third>
        <ThirdBack>
          <ThirdBackImg />
        </ThirdBack>
        <Column>
          <H3>{"– " + t.third_section.subtitle}</H3>
          <P>{t.third_section.p}</P>
        </Column>
        <Insight insight={t.third_section.insights.periodicity} number={1}>
          <PlaylistGrid>
            {periodicity_covers.map((cover, i) => (
              <Picture
                key={"c_" + i}
                alt={cover.alt}
                src={`/assets/img/casestudies/salvajenada/c_${i}.jpg`}
                width={362}
                height={362}
                withWrapper
              />
            ))}
          </PlaylistGrid>
        </Insight>
        <Insight insight={t.third_section.insights.meaningfulness} number={2}>
          <PlaylistGrid>
            {meaningfulness_covers.map((cover, i) => (
              <Picture
                key={"d_" + i}
                alt={cover.alt}
                src={`/assets/img/casestudies/salvajenada/d_${i}.png`}
                width={362}
                height={362}
                withWrapper
              />
            ))}
          </PlaylistGrid>
        </Insight>
        <Insight insight={t.third_section.insights.spreadability} number={3}>
          <ShoutGrid>
            <Fade triggerOnce key="v_7">
              <video
                autoPlay
                playsInline
                muted
                loop
                poster="/assets/img/casestudies/salvajenada/girlUltra_poster.jpg"
              >
                <source src="/assets/video/casestudies/salvajenada/girlUltra.mp4" />
              </video>
            </Fade>
            {spreadability_covers.map((cover, i) => (
              <Picture
                key={"p_" + i}
                alt={cover.alt}
                src={`/assets/img/casestudies/salvajenada/p_${i}.jpg`}
                width={320}
                height={537}
                withWrapper
              />
            ))}
          </ShoutGrid>
        </Insight>
        <Insight
          insight={t.third_section.insights.multimedia_development}
          p={t.third_section.insights.multimedia_development.p}
          number={4}
        >
          <IberoGrid>
            <Picture
              src="/assets/img/casestudies/salvajenada/ibero.jpg"
              alt="Salvajenada - Ibero 90.9"
              width={850}
              height={534}
            />
          </IberoGrid>
        </Insight>
        <Quote
          quote={t.third_section.insights.multimedia_development.quote}
          color={(props) => props.theme.colors.background}
        />
      </Third>
      <Fourth>
        <FourthBack>
          <FourthBackImg />
        </FourthBack>
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
        <FifthBack>
          <FifthBackImg />
        </FifthBack>
        <Column>
          <H3>{t.fifth_section.title}</H3>
        </Column>
        {loadAssets && <FramesEmbed />}
        <Fade triggerOnce>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/salvajenada/"
          >
            instagram
            <Ig />
          </a>
        </Fade>
      </Fifth>
      <NextStudy link="rahid" margined />
      <ContactFooter />
    </PageClipper>
  );
}

export const getStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "work.salvajenada.json",
  });
  return {
    props: {
      pt,
    },
  };
};

const Sticky = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  flex-direction: column;
  span {
    padding: 13px 21px;
    border: ${(props) =>
      props.theme.stroke + " solid " + props.theme.colors.foreground_low};
    text-align: center;
  }
  & > div {
    display: contents;
    & > div {
      padding: 13px 21px 11px 21px;
      border: ${(props) =>
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
        @media (hover: hover) and (pointer: fine) {
          &:hover {
            svg {
              transform: scale(1.07);
            }
          }
        }
      }
      svg {
        width: 100%;
        height: 100%;
        transition: 0.4s ease all;
        * {
          fill: ${(props) => props.theme.colors.foreground};
        }
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
    -webkit-overflow-scrolling: touch;
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
        width: auto;
        min-width: 70%;
        margin: 0 5% 5% 0;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
        scroll-snap-align: center;
        scroll-snap-stop: always;
        text-align: center;
        padding: 1% 4% 4.5% 4%;
        align-items: center;
        justify-content: center;
        transition: 0.2s ease-out transform;
        &:active,
        &:focus {
          transform: scale(0.95);
        }
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
  & > div {
    max-width: 250px;
    width: 100%;
  }
  .image,
  video {
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
    -webkit-overflow-scrolling: touch;
    margin-top: 8%;
    & > div {
      min-width: 70%;
      padding-bottom: 117%;
      margin-right: 5%;
      margin-bottom: 5%;
      height: 0;
      transition: 0.3s ease transform;
      &:focus,
      &:active {
        transform: scale(0.95);
      }
    }
    .image {
      max-width: 100%;
      box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.05);
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
    video {
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
  .image {
    max-width: 300px;
    max-height: 300px;
    width: 100%;
  }
  @media (max-width: 900px) {
    max-width: 100%;
  }
  @media (max-width: 600px) {
    width: 105%;
    margin-left: 7%;
    max-width: unset;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    margin-top: 8%;
    & > div {
      min-width: 70%;
      padding-bottom: 70%;
      margin-right: 5%;
      margin-bottom: 5%;
      height: 0;
      transform: scale(1);
      transition: 0.3s ease transform;
      &:focus,
      &:active {
        transform: scale(0.95);
      }
    }
    .image {
      max-width: 100%;
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
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.foreground_low};
  & > div {
    box-shadow: 0 0 0 1px ${(props) => props.theme.colors.foreground_low};
  }
  p {
    padding: 25px;
    height: 100%;
    font-weight: 100;
    color: ${(props) => props.theme.colors.foreground};
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
  grid-template-columns: 1fr;
  @media (max-width: 500px) {
    p {
      &:nth-child(1) {
        font-weight: 300;
        color: ${(props) => props.theme.colors.foreground};
      }
      &:nth-child(2) {
        color: ${(props) => props.theme.colors.foreground_low};
      }
    }
  }
`;

const TableStrengths = styled(Table)`
  grid-template-columns: 1fr 1fr;
  & > div {
    &:nth-child(3) {
      grid-column: 2 / span 1;
      grid-row: 1 / span 1;
    }
  }
  @media (max-width: 500px) {
    & > div {
      &:nth-child(1),
      &:nth-child(3) {
        font-weight: 300;
        color: ${(props) => props.theme.colors.foreground};
      }
      &:nth-child(2),
      &:nth-child(4) {
        color: ${(props) => props.theme.colors.foreground_low};
      }
    }
  }
`;

const CommonTransition = styled.div`
  width: 100%;
  height: 0;
  margin: -1px 0;
  position: relative;
  svg {
    position: absolute;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    bottom: 0;
    top: 0%;
    height: 100%;
  }
`;

const FifthBack = styled(CommonTransition)`
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
  color: ${(props) => props.theme.colors.background};
  padding-bottom: 10%;
  h3 {
    padding: 0;
    font-weight: 200;
    line-height: 1;
    margin-bottom: 10%;
  }
  a {
    font-size: 0;
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg {
          transform: scale(1.07);
        }
      }
    }
    svg {
      width: 100%;
      max-width: 120px;
      transition: 0.4s ease all;
      * {
        fill: ${(props) => props.theme.colors.background};
        width: 100%;
      }
    }
    @media (max-width: 600px) {
      svg:focus,
      svg:active {
        transform: scale(0.9);
      }
    }
  }
`;

const FourthBack = styled(CommonTransition)`
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
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  h2 {
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${salvajeBlue};
    }
  }
`;

const Third = styled(CommonSection)`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  margin-top: 5%;
  blockquote {
    color: ${(props) => props.theme.colors.background};
  }
  h3 {
    font-weight: 300;
  }
`;
const ThirdBack = styled(CommonTransition)`
  padding-bottom: 39%;
  @media (max-width: 1100px) {
    padding-bottom: 50%;
  }
  @media (max-width: 700px) {
    padding-bottom: 70%;
  }
`;

const InterBack = styled.div`
  height: 0px;
  width: 50%;
  padding-bottom: 96%;
  top: 70%;
  transform: translateY(-50%);
  position: absolute;
  right: 0;
  z-index: -1;
  svg {
    position: absolute;
    left: 50%;
    right: 0;
    transform: translateX(-50%);
    bottom: 0;
    top: 0%;
    height: 100%;
  }
`;

const Second = styled(CommonSection)`
  color: ${(props) => props.theme.colors.foreground_low};
  margin-bottom: 15%;
  h1 {
    padding-top: 0;
  }
  h2 {
    color: ${(props) => props.theme.colors.foreground};
    padding-top: 0;
    b {
      color: ${salvajeBlue};
    }
  }
  table {
    color: ${(props) => props.theme.colors.foreground};
  }
  p {
    b {
      color: ${(props) => props.theme.colors.foreground};
      font-weight: 100;
    }
  }
`;

const SecondBack = styled(CommonTransition)`
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
    padding: 1% 6% 6% 6%;
    width: 100%;
    line-height: 85%;
  }
  b {
    font-size: 8rem;
    font-weight: 300;
    line-height: 110%;
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
  color: ${(props) => props.theme.colors.background};
  padding-bottom: 8%;
  margin-top: -1px;
  h2 b {
    color: ${(props) => props.theme.colors.background};
  }
`;

const Land = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url("/assets/img/casestudies/salvajenada/landBack2.svg");
  background-position: center bottom;
  background-size: cover;
  & > div {
    max-width: 800px;
    width: 70%;
    svg {
      width: 100%;
    }
  }
`;
