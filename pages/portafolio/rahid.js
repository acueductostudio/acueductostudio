import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Head from "components/Head";
import PageClipper from "components/PageClipper";
import { Fade } from "react-awesome-reveal";
import ContactFooter from "components/ContactFooter";
import NextStudy from "components/caseStudy/shared/NextStudy";
import LogoRahid from "public/assets/img/casestudies/rahid/logoRahid.svg";
import { H2, H3, P } from "components/shared/Dangerously";
import IntroVideo from "components/caseStudy/shared/IntroVideo";
import Marquee from "components/caseStudy/shared/Marquee";
import Quote from "components/caseStudy/shared/Quote";
import TextColumn from "components/caseStudy/shared/TextColumn";
import CommonSection from "components/caseStudy/shared/CommonSection";
import Picture from "components/caseStudy/shared/Picture";

const rahidBackground = "#F9F5F0";
const rahidForeground = "#31302E";
const rahidAccent = "#8893CE";
const rahidAccentDarker = "#7A84B9";

function Rahid(props) {
  const [loadAssets, setloadAssets] = useState(false);
  let t = props.locale.casestudies.studies.rahid;

  useEffect(() => {
    props.setTitle(t.headerTitle);
    setloadAssets(true);
  }, []);

  return (
    <PageClipper unPadded>
      <Head
        title={t.page_title}
        description={t.meta_description}
        image={"og_image_rahid.png"}
        canonical={"https://acueducto.studio/portafolio/rahid"}
        en_canonical={"https://acueducto.studio/en/work/rahid"}
        lang={props.lang}
      />
      <LandSection>
        <LogoRahid />
      </LandSection>
      <FirstSection>
        <Marquee tags={t.intro_section.tags} />

        <IntroVideo link={t.link} />

        <TextColumn>
          <H2>{t.intro_section.title}</H2>
          <P>{t.intro_section.p}</P>
          <OldBrand>
            <img
              src="/assets/img/casestudies/rahid/oldLogo.svg"
              alt="El Rahid"
            />
            <p>{t.intro_section.graphicp}</p>
          </OldBrand>
          <P>{t.intro_section.p2}</P>
        </TextColumn>
      </FirstSection>
      <SecondSection>
        <TextColumn>
          <H3>{"– " + t.second_section.subtitle}</H3>
          <P>{t.second_section.p}</P>
        </TextColumn>
        <Quote quote={t.second_section.quote} color={rahidBackground} />
      </SecondSection>
      <ThirdSection>
        <TextColumn>
          <H2>{t.third_section.title}</H2>
          <P>{t.third_section.p}</P>
        </TextColumn>
        <Branding>
          <Fade triggerOnce>
            <div>
              {t.third_section.spans.map((span, index) => (
                <span key={index + "span"}>{span}</span>
              ))}
              {loadAssets && (
                <img
                  src="/assets/img/casestudies/rahid/brandGroup.svg"
                  alt="Branding"
                />
              )}
            </div>
          </Fade>
        </Branding>
        {loadAssets && (
          <Applications>
            <Picture
              src="/assets/img/casestudies/rahid/box.png"
              alt="Packaging"
            />
            <Picture
              src="/assets/img/casestudies/rahid/fb.jpg"
              alt="Facebook Post"
            />
            <Picture
              src="/assets/img/casestudies/rahid/ig.jpg"
              alt="Instagram Post"
            />
          </Applications>
        )}
      </ThirdSection>
      <FourthSection>
        <TextColumn>
          <H3>{"– " + t.fourth_section.subtitle}</H3>
          <P>{t.fourth_section.p}</P>
          <>
            {loadAssets && (
              <Picture
                src="/assets/img/casestudies/rahid/home.jpg"
                alt="Home Rahid.co"
              />
            )}
          </>
          <P>{t.fourth_section.p2}</P>
        </TextColumn>
        <InsertBlock>
          {loadAssets && (
            <Picture
              src="/assets/img/casestudies/rahid/boxes.png"
              alt="Home Rahid.co"
            />
          )}
          <P>{t.fourth_section.graphicp}</P>
        </InsertBlock>
        <TextColumn>
          <P>{t.fourth_section.p3}</P>
        </TextColumn>
      </FourthSection>
      <FifthSection>
        <TextColumn>
          <H2>{t.fifth_section.title}</H2>
          <P>{t.fifth_section.p}</P>
        </TextColumn>
        {loadAssets && (
          <LaunchGrid>
            <Picture
              src="/assets/img/casestudies/rahid/desktop.png"
              alt="Festival awards"
            />
            <Picture
              src="/assets/img/casestudies/rahid/mobile.png"
              alt="Festival awards"
            />
          </LaunchGrid>
        )}
        <TextColumn>
          <P>{t.fifth_section.p2}</P>
          <Stat>
            {/* <Fade triggerOnce> */}
            <span>
              77<b>%</b>
            </span>
            {/* </Fade> */}
            <P>{t.fifth_section.stat}</P>
          </Stat>
          <P>{t.fifth_section.p3}</P>
        </TextColumn>
        {loadAssets && (
          <Picture
            src="/assets/img/casestudies/rahid/referral.jpg"
            alt="Email Marketing"
          />
        )}
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
  picture {
    width: 100%;
    margin: 0px !important;
    height: auto;
    img {
      width: 100%;
      margin: 0 !important;
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

const Applications = styled.div`
  background-color: ${rahidAccent};
  width: 90%;
  max-width: 1200px;
  margin: 8% 0;
  padding: 9%;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: 0.7fr 1fr;
  & > div {
    &:nth-of-type(1) {
      grid-column: 1 / span 3;
      margin-top: -5%;
    }
    &:nth-of-type(2) {
      grid-column: 7 / span 4;
      grid-row: 1 / span 2;
    }
    &:nth-of-type(3) {
      grid-column: 1 / span 5;
      grid-row: 2;
      align-self: flex-end;
    }
  }
  picture {
    width: 100%;
    border-radius: 2px;
    position: relative;
    display: block;
    img {
      width: 100%;
    }
  }
  @media (max-width: 500px) {
    margin-bottom: 15%;
  }
`;

const Branding = styled.div`
  width: 80%;
  max-width: 800px;
  margin-top: 6%;
  position: relative;
  img {
    width: 100%;
  }
  span {
    font-size: 1.2rem;
    width: 100%;
    position: absolute;
    max-width: 36%;
    border-bottom: 2px solid #686153;
    padding-bottom: 4px;
    color: ${rahidForeground};

    &:nth-of-type(even) {
      right: 0;
    }
    &:nth-of-type(3),
    &:nth-of-type(4) {
      top: 34.3%;
    }
    &:nth-of-type(5),
    &:nth-of-type(6) {
      top: 63.6%;
    }
  }
  @media (max-width: 1000px) {
    max-width: unset;
    width: 90%;
    margin-right: 5%;
    margin-left: 5%;
  }
  @media (max-width: 600px) {
    margin-top: 10%;
    margin-bottom: 8%;
    span {
      padding-bottom: 3px;
      border-bottom: 1px solid #686153;
      &:nth-of-type(1),
      &:nth-of-type(2) {
        top: -2%;
      }
      &:nth-of-type(3),
      &:nth-of-type(4) {
        top: 32%;
      }
      &:nth-of-type(5),
      &:nth-of-type(6) {
        top: 60%;
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
      color: ${rahidAccent};
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
  background-color: ${rahidAccent};
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
      transition: .2s ease-out all;
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
    color: ${rahidAccentDarker};
  }
  blockquote,
  p {
    color: ${rahidForeground};
  }
  picture {
    img {
      width: 100%;
      box-shadow: 0px 4px 9px rgba(0, 0, 0, 0.05);
    }
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
  background-color: ${rahidForeground};
  color: ${(props) => props.theme.colors.foreground_low};
  padding-bottom: 10%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  div img {
    width: 100%;
    margin: 12% 0;
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
  color: ${(props) => props.theme.colors.background};
  background-color: ${(props) => props.theme.colors.foreground};
  h2 {
    color: ${rahidForeground};
    b {
      color: ${rahidAccentDarker};
    }
  }
  p {
    color: ${rahidForeground};
  }
`;

const SecondSection = styled(CommonSection)`
  background-color: ${rahidForeground};
  color: ${rahidBackground};
  padding-bottom: 8%;
  h2 {
    color: ${rahidBackground};
  }
`;

const OldBrand = styled.div`
  display: flex;
  width: 100%;
  margin: 10% auto;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 170px;
  }
  p {
    line-height: 1;
    margin-top: 20px;
    color: #828282;
  }
  @media (max-width: 500px) {
    img {
      max-width: 130px;
    }
  }
`;

const FirstSection = styled(CommonSection)`
  background-color: ${rahidBackground};
  color: ${(props) => props.theme.colors.background};
  padding-bottom: 10%;
  h2 {
    color: ${rahidForeground};
    b {
      color: ${rahidAccentDarker};
    }
  }
  ul li,
  p {
    color: ${rahidForeground};
  }
`;

const LandSection = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${rahidBackground};
  background-image: url("/assets/img/casestudies/rahid/landBack.svg");
  background-position: left center;
  background-size: cover;
  align-items: flex-end;
  svg {
    max-width: 500px;
    width: 70%;
    margin-right: 10%;
  }
  @media (max-width: 1200px) {
    background-position: 20% 100%;
  }
  @media (max-width: 1100px) {
    background-position: 10% 100%;
    svg {
      max-width: 350px;
      margin-right: 10%;
    }
  }
  @media (max-width: 960px) {
    background-position: 15% 100%;
    svg {
      max-width: 300px;
      margin-right: 10%;
    }
  }
  @media (max-width: 850px) {
    background-position: 25% 100%;
    svg {
      margin-right: 12%;
    }
  }
  @media (max-width: 800px) {
    background-position: 25% 100%;
    background-image: url("/assets/img/casestudies/rahid/landBackMobile.svg");
    background-position: center center;
    align-items: center;
    svg {
      max-width: 300px;
      margin-right: 0;
      mix-blend-mode: invert;
      * {
        fill: ${rahidBackground};
      }
    }
  }
`;
