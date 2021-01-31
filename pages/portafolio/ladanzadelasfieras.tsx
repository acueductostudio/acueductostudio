import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import Head from "components/layout/Head";
import dynamic from "next/dynamic";
import PageClipper from "components/layout/PageClipper";
import { Fade } from "react-awesome-reveal";
import ContactFooter from "components/shared/footers/ContactFooter";
import NextStudy from "components/caseStudy/shared/NextStudy";
import LogoDanza from "public/assets/img/casestudies/ladanzadelasfieras/logoDanza.svg";
import Laurel from "public/assets/img/casestudies/ladanzadelasfieras/laurel.svg";
import PosterLine from "public/assets/img/casestudies/ladanzadelasfieras/line.svg";
import Type_1 from "public/assets/img/casestudies/ladanzadelasfieras/type_1.svg";
import Type_2 from "public/assets/img/casestudies/ladanzadelasfieras/type_2.svg";
import Type_3 from "public/assets/img/casestudies/ladanzadelasfieras/type_3.svg";
import AppSvg from "public/assets/img/casestudies/ladanzadelasfieras/app.svg";
import { H2, H3, P } from "components/shared/Dangerously";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Marquee from "components/caseStudy/shared/Marquee";
import Quote from "components/caseStudy/shared/Quote";
import Insight from "components/caseStudy/shared/Insight";
import TextColumn from "components/caseStudy/shared/TextColumn";
import CommonSection from "components/caseStudy/shared/CommonSection";
import Picture from "components/caseStudy/shared/Picture";

const fierasRed = "rgb(201,32,26)";

const ThePlayer = dynamic(
  import("components/caseStudy/ladanzadelasfieras/VideoPlayer"),
  {
    loading: () => <p>Loading player...</p>,
    ssr: false,
  }
);

function LaDanzaDeLasFieras({ locale, setTitle, pt }) {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.lddlf.json",
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
        image={{ fileName: "og_image_lddlf.png", alt: t.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/ladanzadelasfieras"}
        en_canonical={"https://acueducto.studio/en/work/ladanzadelasfieras"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoDanza />
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />
        <IntroVideo link={t.link} />
        <TextColumn>
          <H2>{t.intro_section.title}</H2>
          <P>{t.intro_section.p}</P>
          <LaurelNumbers>
            <Laurel />
            <ul>
              {t.intro_section.stats.map((stat, index) => (
                <li key={"stat_" + index}>
                  <b>{stat.big}</b>
                  <p>{stat.small}</p>
                </li>
              ))}
            </ul>
            <Laurel />
          </LaurelNumbers>
          <P>{t.intro_section.p2}</P>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <H2>{t.second_section.title}</H2>
          <P>{t.second_section.p}</P>
        </TextColumn>
        <PosterGrid>
          <Fade triggerOnce>
            <PosterLine />
          </Fade>
          <Picture
            src={"/assets/img/casestudies/ladanzadelasfieras/p_1.jpg"}
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_2.jpg"
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_3.jpg"
            alt="First references for branding"
            width={114}
            height={160}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/boceto.jpg"
            alt="Original sketch of poster design"
            width={382}
            height={544}
          />
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/p_5.jpg"
            alt="Final poster design with awards"
            width={530}
            height={755}
          />
        </PosterGrid>
      </SecondSection>
      <Section_Pre>
        <TextColumn>
          <Type>
            <P>{t.second_section.font_logo}</P>
            <Type_1 />
            <TypeGrid>
              <div>
                <P>{t.second_section.font_body}</P>
                <Type_2 />
              </div>
              <div>
                <p>{t.second_section.font_titles}</p>
                <Type_3 />
              </div>
            </TypeGrid>
            <ColorGrid>
              <div>
                {t.second_section.red}
                <br />
                #DD3814
              </div>
              <div>#080B0C</div>
              <div>#F4F4F4</div>
            </ColorGrid>
          </Type>
        </TextColumn>
      </Section_Pre>
      <Section_Sub>
        <TransitionWrapper>
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/materials.jpg"
            alt="Printed assets for film attendants"
            width={1150}
            height={612}
          />
        </TransitionWrapper>
        <TextColumn>
          <H3>{"– " + t.second_section.subtitle}</H3>
          <P>{t.second_section.p2}</P>
        </TextColumn>
        <SequenceContainer>
          {loadAssets && (
            <Fade triggerOnce>
              <ThePlayer
                url={"https://www.youtube.com/watch?v=11aYNilxhko"}
                still={
                  "/assets/img/casestudies/ladanzadelasfieras/videoBack.jpg"
                }
                ratio={"50.62%"}
              />
            </Fade>
          )}
        </SequenceContainer>
      </Section_Sub>
      <Third>
        <TextColumn>
          <H3>{"– " + t.third_section.subtitle}</H3>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Insight
          insight={t.third_section.insights.portfolio}
          number={1}
          color={fierasRed}
        >
          <Faces>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/d_1.jpg"
              alt="Contact cards for directors and producers"
              width={670}
              height={356}
            />
          </Faces>
        </Insight>
        <Quote
          quote={t.third_section.insights.portfolio.quote}
          color={(props) => props.theme.colors.background}
          noMargin
        />
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.press}
          number={2}
        >
          <MacPress>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/i_1.jpg"
              alt="A whole section for the press"
              width={830}
              height={634}
            />
          </MacPress>
        </Insight>
        <Quote
          quote={t.third_section.insights.press.quote}
          color={(props) => props.theme.colors.background}
          noMargin
        />
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.availability}
          number={3}
        >
          <MacContact>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/i_3.jpg"
              alt="A contact component on every page"
              width={670}
              height={1057}
            />
          </MacContact>
        </Insight>
        <TextColumn>
          <H3>{"– " + t.third_section.subtitle2}</H3>
          <P>{t.third_section.p2}</P>
          <AppGrid>
            <Picture
              src="/assets/img/casestudies/ladanzadelasfieras/webapp.png"
              alt="A Progressive Web App"
              width={335}
              height={188}
              withWrapper
            />
            <AppSvg />
          </AppGrid>
        </TextColumn>
      </Third>
      <Fourth>
        <TextColumn>
          <H3>{"– " + t.fourth_section.subtitle}</H3>
          <P>{t.fourth_section.p}</P>
          <Stat>
            <span>
              81<b>%</b>
            </span>
            <P>{t.fourth_section.stat}</P>
          </Stat>
          <P>{t.fourth_section.p2}</P>
          <div>
            {loadAssets && (
              <video
                autoPlay
                playsInline
                muted
                loop
                poster={
                  "/assets/img/casestudies/ladanzadelasfieras/incognito_poster.jpg"
                }
              >
                <source src="/assets/video/casestudies/ladanzadelasfieras/incognito.mp4" />
              </video>
            )}
          </div>
        </TextColumn>
      </Fourth>
      <Fifth>
        <TextColumn>
          <H2>{t.fifth_section.title}</H2>
          <P>{t.fifth_section.p}</P>
        </TextColumn>
        <Quote
          quote={t.fifth_section.quote}
          color={(props) => props.theme.colors.background}
        />
        <TextColumn>
          <Picture
            src="/assets/img/casestudies/ladanzadelasfieras/l_1.jpg"
            alt="Festival awards"
            width={670}
            height={445}
            withWrapper
          />
          <P>{t.fifth_section.p2}</P>
        </TextColumn>
      </Fifth>
      <Sixth>
        <Fade triggerOnce>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://ladanzadelasfieras.com"
          >
            {t.sixth_section.linkp} ladanzadelasfieras.com
          </a>
        </Fade>
      </Sixth>
      <NextStudy link="salvajenada" />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(LaDanzaDeLasFieras);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "work.lddlf.json" });
  return {
    props: {
      pt,
    },
  };
};

const SequenceContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 4% auto;
`;

const MacContact = styled.div`
  max-width: 670px;
  margin: 5% 0;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 500px) {
    max-width: 480px;
  }
`;

const Faces = styled.div`
  max-width: 670px;
  margin: 5% 0 0;
  position: relative;
  width: 100%;
  img {
    width: 100%;
  }
  @media (max-width: 700px) {
    margin: 8% 0 5%;
  }
`;

const MacPress = styled.div`
  max-width: 830px;
  width: 100%;
  margin: 4% 0 -9% 0;
  img {
    width: 100%;
    max-width: 100%;
  }
  @media (max-width: 1050px) {
    margin: 8% 0 -9% 0;
  }
  @media (max-width: 450px) {
    margin: 8% 0 -7% 0;
  }
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 670px;
  margin: 10% 0 20% 0;
  width: 100%;
  /* img {
    max-width: 100%;
    width: 100%;
  } */
  svg {
    height: 100%;
    max-width: 100%;
    max-height: 188px;
    width: auto;
    justify-self: center;
  }
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    padding: 0 5%;
    .image {
      max-width: 400px;
      align-self: center;
      margin-bottom: 15%;
    }
  }
  @media (max-width: 450px) {
    padding: 0;
    svg {
      height: auto;
      width: 30%;
      align-self: center;
    }
  }
`;

const Type = styled.div`
  max-width: 670px;
  width: 100%;
  svg {
    width: 100%;
  }
  @media (max-width: 800px) {
    padding: 0 10%;
  }
  @media (max-width: 600px) {
    padding: 0 15%;
    p {
      display: none;
    }
  }
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 12%;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    line-height: 140%;
    &:before {
      content: " ";
      width: 80px;
      height: 80px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    &:nth-child(1) {
      grid-column: 1 / span 1;
      &:before {
        background-color: ${fierasRed};
      }
    }
    &:nth-child(2) {
      grid-column: 4 / span 1;
      &:before {
        background-color: #080b0c;
        border: 2px solid white;
      }
    }
    &:nth-child(3) {
      grid-column: 5 / span 1;
      &:before {
        background-color: #f4f4f4;
      }
    }
  }
  @media (max-width: 800px) {
    display: flex;
    justify-content: space-between;
    div {
      font-size: 1.6rem;
      align-items: center;
      &:before {
        width: 40px;
        height: 40px;
      }
    }
  }
  @media (max-width: 600px) {
    div {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 450px) {
    div {
      font-size: 1.1rem;
    }
  }
`;

const TypeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  div {
    margin-top: 30%;
  }
`;

const TransitionWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  & > div {
    max-width: 1300px;
    padding: 0 5%;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
  }
  picture {
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  &:before {
    content: " ";
    z-index: 0;
    position: absolute;
    height: 50%;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4.65fr;
  grid-template-rows: 1fr 3fr;
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 5% 5% 12% 5%;
  width: 90%;
  position: relative;
  svg {
    path {
      stroke-width: ${(props) => props.theme.stroke};
    }
  }
  & > div {
    z-index: 1;
    max-width: 100%;
    width: 100%;
    img {
      max-width: 100%;
      width: 100%;
    }
    &:nth-of-type(1) {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 0;
    }
    &:nth-of-type(5) {
      grid-column: 2 / span 3;
      grid-row: 2 / span 1;
    }
    &:nth-of-type(6) {
      grid-column: 6 / span 1;
      grid-row: 1 / span 2;
    }
  }
  @media (max-width: 900px) {
    & > div {
      &:nth-of-type(5) {
        grid-column: 1 / span 3;
      }
      &:nth-of-type(6) {
        grid-column: 4 / span 3;
      }
    }
  }
  @media (max-width: 450px) {
    grid-template-rows: 1fr 1fr 5fr;
    margin-bottom: 20px;
    svg {
      display: none;
    }
    & > div {
      grid-column-end: span 2;
      &:nth-of-type(5) {
        grid-row: 1 / span 2;
        grid-column: 5 / span 2;
      }
      &:nth-of-type(6) {
        grid-row: 3 / span 1;
        grid-column: 1 / span 6;
      }
    }
  }
`;

const Stat = styled.div`
  position: relative;
  margin: 12% auto;
  max-width: 310px;
  text-align: center;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.colors.foreground};
  span {
    font-size: 8rem;
    font-weight: 300;
    display: block;
    text-align: center;
    z-index: 1;
    line-height: 1.3;
    margin-top: -20px;
    b {
      color: ${fierasRed};
    }
  }
  p {
    z-index: 1;
  }
  svg {
    position: absolute;
    margin: 0 auto;
    width: 15%;
    display: flex;
    z-index: 0;
    align-self: center;
    top: -12px;
  }
  @media (max-width: 700px) {
    max-width: 330px;
    margin: 16% auto 12%;
  }
  @media (max-width: 600px) {
    max-width: 240px;
    margin: 20% auto 14%;
    b {
      font-size: 6rem;
    }
    svg {
      width: 13%;
    }
  }
  @media (max-width: 400px) {
    margin: 14% auto 14%;
  }
`;

const Sixth = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url("/assets/img/casestudies/ladanzadelasfieras/sixthBack.svg");
  background-position: center bottom;
  background-size: cover;
  a {
    font-size: 4.5rem;
    text-decoration: none;
    line-height: 100%;
    border-bottom: 3px solid ${(props) => props.theme.colors.foreground};
  }
  & > div {
    margin-bottom: 5%;
  }
  @media (max-width: 900px) {
    background-position: left top;
    a {
      font-size: 3rem;
    }
  }
  @media (max-width: 600px) {
    a {
      font-size: 2rem;
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    & > div {
      display: contents;
    }
    a {
      font-size: 1.5rem;
      padding: 5%;
      border-radius: 8px;
      background-color: ${fierasRed};
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      border: 0;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        transform: scale(0.95);
      }
    }
  }
`;

const Fifth = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  padding-bottom: 10%;
  h2 b {
    color: ${fierasRed};
  }
  .image {
    max-width: 670px;
    margin: 5% 0 12% 0;
  }
`;

const Fourth = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  video {
    width: 100%;
    max-width: 670px;
    margin-top: 12%;
  }
  h3 {
    color: ${(props) => props.theme.colors.foreground};
  }
`;

const Third = styled(CommonSection)`
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
`;

const Section_Pre = styled(CommonSection)`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
  padding: 10% 0%;
  @media (max-width: 1000px) {
    padding-top: 20%;
  }
`;

const Section_Sub = styled(CommonSection)`
  color: ${(props) => props.theme.colors.background};
  background-color: ${fierasRed};
  padding-bottom: 2%;
`;

const SecondSection = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.foreground};
  color: ${(props) => props.theme.colors.background};
  h2 {
    color: ${(props) => props.theme.colors.background};
    b {
      color: ${fierasRed};
    }
  }
`;

const LaurelNumbers = styled.div`
  display: flex;
  width: 100%;
  margin: 10% auto;
  justify-content: space-between;
  align-items: center;
  ul {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10%;
    width: 100%;
  }
  li {
    list-style: none;
    text-align: center;
    margin-top: -20px;
  }
  svg {
    width: 20%;
    max-width: 70px;
    transform-origin: 50% 50%;
    * {
      fill: ${(props) => props.theme.colors.foreground};
    }
    &:nth-of-type(2) {
      transform: scaleX(-1);
    }
  }
  p {
    width: 100%;
    line-height: 1;
  }
  b {
    font-size: 11.7rem;
    font-weight: 300;
    line-height: 1;
  }
  @media (max-width: 700px) {
    ul {
      padding: 0 5%;
    }
    b {
      font-size: 10rem;
    }
  }
  @media (max-width: 600px) {
    p {
      color: ${(props) => props.theme.colors.foreground_low};
      margin-top: -5px;
    }
    b {
      font-size: 9rem;
    }
    svg {
      max-width: 50px;
    }
  }
  @media (max-width: 500px) {
    b {
      font-size: 7rem;
    }
    svg {
      max-width: 40px;
    }
  }
  @media (max-width: 400px) {
    ul {
      padding: 0 10px;
      li {
        margin-top: -10px;
      }
    }
    p {
      margin-top: 0px;
      font-size: 1.3rem;
    }
    b {
      font-size: 5rem;
    }
    svg {
      max-width: 30px;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  background-color: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.foreground};
  padding-bottom: 10%;
  h2 {
    b {
      color: ${fierasRed};
    }
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.background};
  background-image: url("/assets/img/casestudies/ladanzadelasfieras/landBack.svg");
  background-position: center bottom;
  background-size: cover;
  & > div {
    max-width: 650px;
    width: 70%;
  }
  svg {
    width: 100%;
  }
`;
