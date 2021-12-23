import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import clientLocale from "utils/clientLocale";
import styled from "styled-components";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import { Fade } from "react-awesome-reveal";
import ContactFooter from "components/shared/footers/ContactFooter";
import NextStudy from "components/caseStudy/shared/NextStudy";
import LogoBlockstem from "public/assets/img/casestudies/blockstem/logoBlockstem.svg";
import Brand1 from "public/assets/img/casestudies/blockstem/Brand1.svg";
import { H2, H3, P } from "components/shared/Dangerously";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Marquee from "components/caseStudy/shared/Marquee";
import Quote from "components/caseStudy/shared/Quote";
import TextColumn from "components/caseStudy/shared/TextColumn";
import CommonSection from "components/caseStudy/shared/CommonSection";
import Picture from "components/caseStudy/shared/Picture";

const rahidBackground = "#F9F5F0";
const rahidForeground = "#31302E";
const bAccent1 = "#4EA68E";
const bAccent2 = "#2B67DD";
const mainGradient =
  "linear-gradient(96.9deg, #060809 12.06%, #3A3A3A 113.48%);";
const bAccent1Darker = "#7A84B9";

function Rahid({ locale, setTitle, pt }) {
  const [loadAssets, setloadAssets] = useState(false);
  const [t, setT] = useState(pt);

  useEffect(() => {
    clientLocale({
      locale: locale,
      fileName: "work.blockstem.json",
      callBack: (nT) => {
        setT(nT);
        setTitle(nT.head.headerTitle);
      },
    });
    setloadAssets(true);
  }, [locale]);

  // console.log(t.intro_section.lessons);
  return (
    <PageClipper
      unPadded
      style={{
        background: mainGradient,
      }}
    >
      <Head
        {...t.head}
        image={{ fileName: "og_image_blockstem.png", alt: t.head.image_alt }}
        es_canonical={"https://acueducto.studio/portafolio/blockstem"}
        en_canonical={"https://acueducto.studio/en/work/blockstem"}
      />
      <Fade triggerOnce>
        <LandSection>
          <Fade delay={300} triggerOnce>
            <LogoBlockstem />
          </Fade>
        </LandSection>
      </Fade>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />

        <IntroVideo link={t.link} />

        <TextColumn>
          <H2>{t.intro_section.title}</H2>
          <P>{t.intro_section.p}</P>
          {/* <LessonContainer>
            {t.intro_section.lessons.map((lesson, i) => (
              <Lesson key={`lessn${i}`}>
                <span>{lesson.title}</span>
                <p>{lesson.p}</p>
              </Lesson>
            ))}
          </LessonContainer> */}
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <Quote quote={t.second_section.quote} color={"#1F2A2D"} />
        <TextColumn>
          {loadAssets && (
            <LogosContainer>
              <img
                src="/assets/img/casestudies/blockstem/tec.svg"
                alt="Tecnológico de Monterrey"
              />
              <img
                src="/assets/img/casestudies/blockstem/global.svg"
                alt="Global Shapers Community"
              />
            </LogosContainer>
          )}
          <P>{t.second_section.p}</P>
        </TextColumn>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
          {/* {t.third_section.aspects.map((aspect, i) => (
            <Aspect key={`aspect${i}`}>
              <span>{i + 1}</span>
              <p>{aspect.p}</p>
            </Aspect>
          ))} */}
          <P>{t.third_section.p2}</P>
          {
            //Piezas de whitepaper
          }
          <H3>{"– " + t.third_section.subtitle}</H3>
          <P>{t.third_section.p3}</P>
        </TextColumn>
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <P>{t.fourth_section.p}</P>
          <SpanContainer>
            <span>{t.fourth_section.body}</span>
            <span>{t.fourth_section.titles}</span>
          </SpanContainer>
          <Brand1 />
        </TextColumn>
      </FourthSection>
      <FifthSection>
        <TextColumn>
          <H2>{t.fifth_section.title}</H2>
          <P>{t.fifth_section.p}</P>
        </TextColumn>
        <LaunchGrid>
          <Picture
            src="/assets/img/casestudies/rahid/desktop.png"
            alt="Festival awards"
            width={558}
            height={340}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/rahid/mobile.png"
            alt="Festival awards"
            width={162}
            height={339}
            withWrapper
          />
        </LaunchGrid>
        <TextColumn>
          <P>{t.fifth_section.p2}</P>
          <Stat>
            <span>
              77<b>%</b>
            </span>
            <P>{t.fifth_section.stat}</P>
          </Stat>
          <P>{t.fifth_section.p3}</P>
        </TextColumn>
        <Picture
          src="/assets/img/casestudies/rahid/referral.jpg"
          alt="Email Marketing"
          width={800}
          height={450}
        />

        <TextColumn>
          <P>{t.fifth_section.p4}</P>
        </TextColumn>
        <Quote
          quote={t.fifth_section.quote}
          color={(props) => props.theme.colors.background}
        />
        <TextColumn>
          <P>{t.fifth_section.p5}</P>
        </TextColumn>
      </FifthSection>
      <SixthSection>
        <Fade triggerOnce>
          <a target="_blank" rel="noopener noreferrer" href="https://rahid.co">
            {t.sixth_section.linkp} rahid.co
          </a>
        </Fade>
      </SixthSection>
      <NextStudy link="ladanzadelasfieras" />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Rahid);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({ locale: context.locale, fileName: "work.rahid.json" });
  return {
    props: {
      pt,
    },
  };
};

const SpanContainer = styled.div`
flex-direction:row;
`;

const Aspect = styled.div`
  display: flex;
  width: 100%;
  margin: 5% 0;
  span {
    background: ${bAccent2};
    width: 28px;
    line-height: 0;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 100%;
    font-weight: 300;
    color: ${(p) => p.theme.colors.background};
    margin-top: 2px;
  }
  p {
    max-width: 630px;
  }
`;

const LogosContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10%;
  justify-content: space-around;
  margin-top: 5%;
  img {
    max-height: 100px;
    width: auto;
  }
`;

const Lesson = styled.div`
  max-width: 500px;
  &:not(:last-of-type) {
    margin-bottom: 10%;
  }
  &:nth-of-type(2) {
    span {
      &::before,
      &::after {
        background: linear-gradient(92.93deg, #1e6a5a -6.6%, #4da38b 150.71%);
      }
    }
  }
  p {
    margin-top: 20px;
    margin-left: 42px;
  }
  span {
    font-size: 2.6rem;
    position: relative;
    &::before,
    &::after {
      content: " ";
      width: 22px;
      height: 22px;
      background: linear-gradient(70.86deg, #1a4ce0 23.81%, #81edce 385.7%);
      border-radius: 100%;
    }
    &::before {
      content: " ";
      display: inline-block;
      position: relative;
      margin-right: 12px;
      margin-left: 7px;
    }
    &::after {
      content: " ";
      display: block;
      position: absolute;
      left: 0px;
      bottom: 0px;
    }
  }
`;

const LessonContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LaunchGrid = styled.div`
  max-width: 800px;
  width: 100%;
  display: grid;
  grid-template-columns: 7fr 1fr 2.038fr;
  margin: 5% 0;
  position: relative;
  max-height: 340px;
  & > div {
    &:nth-of-type(even) {
      grid-column-start: 3;
    }
  }
  @media (max-width: 1000px) {
    max-width: unset;
    width: 90%;
    margin: 5%;
  }
`;

const InsertBlock = styled.figure`
  width: 90%;
  background-color: ${rahidBackground};
  margin: 8% 0;
  padding: 8%;
  position: relative;
  max-width: 1200px;
  p {
    color: #4f4f4f;
    margin-top: 20px;
    position: absolute;
    max-width: 220px;
    right: 5%;
    bottom: 25%;
  }
  @media (max-width: 1120px) {
    p {
      font-size: 1.5rem;
      bottom: 23%;
      max-width: 200px;
    }
  }
  @media (max-width: 950px) {
    p {
      right: 3%;
      font-size: 1.4rem;
      max-width: 180px;
    }
  }
  @media (max-width: 830px) {
    p {
      right: unset;
      position: relative;
      font-size: 1.4rem;
      max-width: unset;
      bottom: unset;
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
  color: ${rahidForeground};
  span {
    font-size: 8rem;
    font-weight: 300;
    display: block;
    text-align: center;
    z-index: 1;
    line-height: 1.3;
    margin-top: -20px;
    b {
      color: ${bAccent1};
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

const SixthSection = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${bAccent1};
  background-image: url("/assets/img/casestudies/rahid/landBack.svg");
  background-repeat: no-repeat;
  background-position: left top;
  background-size: auto 100%;
  align-items: flex-end;
  a {
    font-size: 4.5rem;
    text-decoration: none;
    line-height: 100%;
    border-bottom: 3px solid ${(props) => props.theme.colors.foreground};
  }
  & > div {
    margin-right: 20%;
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
    align-items: center;
    & > div {
      margin-right: 0;
      display: contents;
    }
    a {
      font-size: 1.5rem;
      padding: 5%;
      border-radius: 4px;
      background-color: #f6e27f;
      color: ${rahidForeground};
      box-shadow: 0px 3px 7px rgba(0, 0, 0, 0.3);
      border: 0;
      margin-right: 0;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        transform: scale(0.95);
      }
    }
  }
`;

const FifthSection = styled(CommonSection)`
  background-color: ${rahidBackground};
  color: ${rahidForeground};
  padding-bottom: 10%;
  h2 b {
    color: ${bAccent1Darker};
  }
  blockquote,
  p {
    color: ${rahidForeground};
  }
  .image div div {
    box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
  }
  & > div:nth-last-of-type(4) {
    max-width: 800px;
    margin: 6% 0;
  }
  @media (max-width: 1000px) {
    & > div:nth-last-of-type(4) {
      max-width: unset;
      width: 90%;
    }
  }
`;

const FourthSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding: 10% 0;

  span {
    margin-top: 5%;
    display:inline-block;
    &:nth-of-type(2){
      margin-left:30px;
    }
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .image {
    width: 100%;
    padding: 12% 0;
    max-width: 800px;
  }
  figure img {
    width: 100%;
  }
  h3 {
    color: ${(props) => props.theme.colors.foreground};
  }
`;

const ThirdSection = styled(CommonSection)`
  padding-bottom: 8%;
  color: ${(props) => props.theme.colors.over_black};
  background: ${mainGradient};
  h2 {
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${bAccent1};
    }
  }
`;

const SecondSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding-bottom: 8%;
  padding-top: 3%;
`;

const FirstSection = styled(CommonSection)`
  color: ${(props) => props.theme.colors.foreground};
  padding-bottom: 10%;
  h2 {
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${bAccent1};
    }
  }
  ul li,
  p {
    color: ${(props) => props.theme.colors.over_black};
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  background-image: url("/assets/img/casestudies/blockstem/main-bg.png");
  background-position: left center;
  background-size: cover;
  align-items: flex-end;
  & > div {
    max-width: 500px;
    width: 70%;
    margin-right: 10%;
  }
  svg {
    width: 100%;
  }
  @media (max-width: 1200px) {
    background-position: 20% 100%;
  }
  @media (max-width: 1100px) {
    background-position: 10% 100%;
    & > div {
      max-width: 350px;
      margin-right: 10%;
    }
  }
  @media (max-width: 960px) {
    background-position: 15% 100%;
    & > div {
      max-width: 300px;
      margin-right: 10%;
    }
  }
  @media (max-width: 850px) {
    background-position: 25% 100%;
    & > div {
      margin-right: 12%;
    }
  }
  @media (max-width: 800px) {
    background-position: 25% 100%;
    background-image: url("/assets/img/casestudies/rahid/landBackMobile.svg");
    background-position: center center;
    background-color: transparent;
    align-items: center;
    & > div {
      max-width: 300px;
      margin-right: 0;
      mix-blend-mode: invert;
      svg * {
        fill: ${rahidBackground};
      }
    }
  }
`;
