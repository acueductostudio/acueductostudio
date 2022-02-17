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

const rahidForeground = "#31302E";
const bAccent1 = "#4EA68E";
const bAccent2 = "#2B67DD";
const mainGradient =
  "linear-gradient(96.9deg, #060809 12.06%, #3A3A3A 113.48%);";

function Blockstem({ locale, setTitle, pt }) {
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

  return (
    <PageClipperBlockstem unPadded>
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
        <EditVideo>
          <IntroVideo link={t.link} />
        </EditVideo>
        <TextColumn>
          <H2>{t.intro_section.title}</H2>
          <P>{t.intro_section.p}</P>
          <LessonContainer>
            {t.intro_section.lessons.map((lesson, i) => (
              <Lesson key={`lessn${i}`}>
                <span>{lesson.title}</span>
                <p>{lesson.p}</p>
              </Lesson>
            ))}
          </LessonContainer>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <Quote quote={t.second_section.quote} color={"#1F2A2D"} />
        <TextColumn>
          <>
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
          </>
          <P>{t.second_section.p}</P>
        </TextColumn>
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
          {t.third_section.aspects.map((aspect, i) => (
            <Aspect key={`aspect${i}`}>
              <span>{i + 1}</span>
              <p>{aspect.p}</p>
            </Aspect>
          ))}
          <P>{t.third_section.p2}</P>
        </TextColumn>
        <WhitepaperGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/cover.jpg"
            alt="Whitepaper cover"
            width={544}
            height={395}
          />

          <Picture
            src="/assets/img/casestudies/blockstem/small1.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small2.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small3.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/small4.jpg"
            alt="Whitepaper page"
            width={306}
            height={223}
          />
        </WhitepaperGrid>
        <TextColumn>
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
        <KeyShotGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/conversation.png"
            alt="Conversation"
            width={270}
            height={270}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/blockstem/ballot.png"
            alt="Ballot"
            width={270}
            height={270}
            withWrapper
          />
          <Picture
            src="/assets/img/casestudies/blockstem/latam.png"
            alt="LATAM"
            width={270}
            height={270}
            withWrapper
          />
        </KeyShotGrid>
      </FourthSection>
      <FifthSection>
        <TransitionWrapper>
          <Picture
            src="/assets/img/casestudies/blockstem/transition.jpg"
            alt="Ballot cover"
            width={1150}
            height={612}
          />
        </TransitionWrapper>
        <ScreenGrid>
          <Picture
            src="/assets/img/casestudies/blockstem/leftphone.png"
            alt="Blockstem homepage mobile"
            width={300}
            height={628}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/rightphone.png"
            alt="Blockstem page mobile"
            width={300}
            height={628}
          />
          <Picture
            src="/assets/img/casestudies/blockstem/mac.png"
            alt="Blockstem homepage desktop"
            width={1010}
            height={650}
          />
        </ScreenGrid>
      </FifthSection>
      <SixthSection>
        <TextColumn>
          <H2>{t.sixth_section.title}</H2>
          <P>{t.sixth_section.p}</P>
          <StatGrid>
            <Stat>
              <span>
                <b>+</b>950
              </span>{" "}
              <P>{t.sixth_section.stat1}</P>
            </Stat>
            <Stat>
              <span>7</span> <P>{t.sixth_section.stat2}</P>
            </Stat>
          </StatGrid>
          <Quote quote={t.sixth_section.quote} color={"#1F2A2D"} />
          <div className="lastP">
            <P>{t.sixth_section.p2}</P>
          </div>
        </TextColumn>
      </SixthSection>
      <SeventhSection>
        <Picture
          src="/assets/img/casestudies/blockstem/main-bg.png"
          alt="Blockstem ballots"
          width={979}
          height={853}
        />
        <Fade triggerOnce>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://blockstem.org"
          >
            {t.seventh_section.linkp} blockstem.org
          </a>
        </Fade>
      </SeventhSection>
      <NextStudy link="rahid" />
      <ContactFooter />
    </PageClipperBlockstem>
  );
}

export default React.memo(Blockstem);

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "work.blockstem.json",
  });
  return {
    props: {
      pt,
    },
  };
};

const PageClipperBlockstem = styled(PageClipper)`
  background: ${mainGradient};
  @media (max-width: 600px) {
    background: linear-gradient(97.9deg, #060809 0.06%, #3a3a3a 42.48%);
  }
`;

const EditVideo = styled.div`
  padding: 3%;
  border-radius: 40px;
  background-color: #ffffff;
  & > div {
    padding: 0px;
  }
  @media (max-width: 1300px) {
    margin: 0 30px;
  }
  @media (max-width: 700px) {
    padding: 10px;
    border-radius: 20px;
    margin: 0 20px;
  }
  @media (max-width: 500px) {
    border-radius: 17px;
  }
`;

const WhitepaperGrid = styled.div`
  display: grid;
  grid-template-columns: 1.8fr 1fr 1fr;
  grid-gap: 2rem;
  padding: 10% 10% 0 10%;
  div:nth-child(1) {
    grid-row: 1 / span 2;
    border-radius: 5px;
  }
  div {
    border-radius: 5px;
    overflow: hidden;
  }
  @media (max-width: 1000px) {
    padding: 8% 8% 0 8%;
  }
  @media (max-width: 780px) {
    padding: 8% 5% 0 5%;
    grid-gap: 1rem;
  }
  @media (max-width: 580px) {
    grid-template-columns: 1fr;
    & > div {
      display: flex;
      justify-content: center;
      max-width: 309px;
    }
  }
`;

const Stat = styled.div`
  position: relative;
  max-width: 310px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  color: ${rahidForeground};
  border: 2px solid;
  padding: 5%;
  border-radius: 50px;
  &:nth-of-type(1) {
    border-color: ${bAccent1};
    margin-right: 20px;
  }
  &:nth-of-type(2) {
    border-color: ${bAccent2};
  }
  span {
    font-size: 8rem;
    font-weight: 400;
    display: block;
    text-align: center;
    z-index: 1;
    line-height: 1.3;
    margin-top: -20px;
    b {
      font-size: 4rem;
    }
  }
  @media (max-width: 730px) {
    margin-bottom: 20px;
  }
  @media (max-width: 600px) {
    max-width: unset;
    width: 100%;
    padding: 30px;
    &:nth-of-type(1) {
      margin-right: 0px;
    }
    b {
      font-size: 6rem;
    }
  }
  @media (max-width: 600px) {
    border-radius: 30px;
    span {
      font-size: 7rem;
    }
  }
`;

const StatGrid = styled.div`
  padding: 10% 0;
  display: flex;
  max-width: 670px;
  justify-content: flex-end;
  @media (max-width: 730px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
  }
`;

const ScreenGrid = styled.div`
  display: grid;
  grid-template: 1fr 1fr;
  padding: 12% 5% 2%;
  grid-gap: 0 10%;
  & > div:nth-child(1),
  & > div:nth-child(2) {
    & > div {
      box-shadow: -30px 40px 40px #1a4ba8;
      border-radius: 40px;
    }
  }
  & > div:nth-child(1) {
    grid-column: 1 / span 1;
    justify-self: flex-end;
  }
  & > div:nth-child(2) {
    grid-column: 2 / span 1;
  }
  & > div:nth-child(3) {
    padding-top: 10%;
    grid-column: 1 / span 2;
    box-shadow: none;
  }
  @media (max-width: 1100px) {
    & > div:nth-child(1) {
      padding-left: 35%;
    }
    & > div:nth-child(2) {
      padding-right: 35%;
    }
    & > div:nth-child(1),
    & > div:nth-child(2) {
      & > div {
        border-radius: 30px;
      }
    }
  }
  @media (max-width: 750px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      & > div {
        border-radius: 20px;
      }
    }
  }
  @media (max-width: 550px) {
    & > div:nth-child(1),
    & > div:nth-child(2) {
      & > div {
        border-radius: 14px;
        box-shadow: -20px 20px 30px #1a4ba8;
      }
    }
  }
`;

const TransitionWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 5%;
  & > div {
    max-width: 1150px;
    width: 100%;
    margin: 0 auto;
    z-index: 1;
    img {
      border-radius: 30px;
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
    background-color: #f3f4f5;
  }
  @media (max-width: 800px) {
    & > div img {
      border-radius: 20px;
    }
  }
  @media (max-width: 400px) {
    & > div img {
      border-radius: 15px;
    }
  }
`;

const KeyShotGrid = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5% 0 0;
  justify-content: space-evenly;
  @media (max-width: 1300px) {
    .image {
      max-width: 25%;
    }
  }
  @media (max-width: 1100px) {
    justify-content: space-between;
    padding: 5% 5% 0 5%;
  }
`;

const SpanContainer = styled.div`
  flex-direction: row;
  span {
    margin-top: 10%;
    margin-bottom: 7px;
    display: inline-block;
    &:nth-of-type(2) {
      margin-left: 37%;
    }
  }
`;

const Aspect = styled.div`
  display: flex;
  width: 100%;
  margin: 5% 0;
  span {
    background: ${bAccent2};
    min-width: 28px;
    width: 28px;
    line-height: 0;
    min-height: 28px;
    height: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 15px;
    border-radius: 100%;
    font-weight: 300;
    color: ${(p) => p.theme.colors.background};
    margin-top: 2px;
    padding-bottom:3px;
  }
  p {
    max-width: 630px;
  }
  @media (max-width: 600px) {
    span {
      min-width: 24px;
      min-height: 24px;
      height: 24px;
      width: 24px;
      font-size: 1.3rem;
      line-height: 130%;
    }
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
    max-width: 50%;
  }
  @media (max-width: 650px) {
    img {
      max-height: 65px;
    }
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
  @media (max-width: 600px) {
    span {
      font-size: 2rem;
    }
    p {
      margin-top: 10px;
    }
  }
  @media (max-width: 450px) {
    p {
      margin-left: 0px;
    }
  }
`;

const LessonContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeventhSection = styled(CommonSection)`
  min-height: 100vh;
  background: ${mainGradient};
  align-items: center;
  padding: 10% 0;
  div {
    max-width: 700px;
  }
  a {
    font-size: 3.3rem;
    text-decoration: none;
    line-height: 100%;
    background: linear-gradient(
      90.27deg,
      #1a4ce0 -6.41%,
      #2f6edc 106.96%,
      #3c81da 172.14%,
      #53a5d6 294%,
      #81edce 537.74%
    );
    padding: 16px 40px 22px;
    border-radius: 50px;
    text-align: center;
    margin-top: 15%;
    display: block;
    margin-left: 30px;
    border: 2px solid transparent;
    transition: 0.4s ease all;
    &:hover,
    &:active,
    &:focus {
      border-color: ${bAccent2};
      background: black;
    }
  }
  @media (max-width: 900px) {
    min-height: unset;
    & > div:nth-of-type(1) {
      max-width: 80%;
    }
    a {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 600px) {
    a {
      font-size: 1.7rem;
      margin-left: 0;
    }
  }
  @media (max-width: 500px), (max-height: 450px) {
    a {
      padding: 15px 22px 18px;
      font-size: 1.5rem;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        transform: scale(0.95);
      }
    }
  }
`;

const SixthSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding-bottom: 8%;
  .lastP {
    margin-top: 10%;
  }
  h2 {
    color: ${(props) => props.theme.colors.background};
    b {
      color: ${bAccent2};
    }
  }
`;

const FifthSection = styled(CommonSection)`
  background: linear-gradient(
      90.27deg,
      #1a4ce0 -6.41%,
      #2f6edc 106.96%,
      #3c81da 172.14%,
      #53a5d6 294%,
      #81edce 537.74%
    ),
    #3f3f3f;
  color: ${rahidForeground};
  padding-bottom: 5%;
`;

const FourthSection = styled(CommonSection)`
  background-color: #f3f4f5;
  color: ${(props) => props.theme.colors.over_white};
  padding: 10% 0;
`;

const ThirdSection = styled(CommonSection)`
  padding-bottom: 8%;
  color: ${(props) => props.theme.colors.over_black};
  background: ${mainGradient};
  h2,
  h3 {
    color: ${(props) => props.theme.colors.foreground};
    b {
      color: ${bAccent2};
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
      color: ${bAccent2};
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
  background-size: auto 75%;
  background-repeat: no-repeat;
  align-items: flex-end;
  & > div {
    max-width: 400px;
    width: 70%;
    margin-right: 10%;
  }
  svg {
    width: 100%;
  }
  @media (max-width: 1000px) {
    background-size: auto 65%;
    & > div {
      max-width: 300px;
      margin-right: 10%;
    }
  }
  @media (max-width: 850px) {
    background-size: auto 55%;
    svg {
      overflow: visible;
      path {
        filter: drop-shadow(0px 0px 45px rgba(43, 44, 4, 1));
      }
    }
    & > div {
      margin-right: 12%;
    }
  }
  @media (max-width: 730px) {
    align-items: center;
    background-position: center center;
    & > div {
      max-width: 300px;
      margin-right: 0;
    }
  }
`;
