import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import PageClipper from "../../components/PageClipper";
import Fade from "react-reveal/Fade";
import ContactFooter from "../../components/ContactFooter";
import LogoDanza from "../../static/assets/img/casestudies/ladanzadelasfieras/logoDanza.svg";
import Laurel from "../../static/assets/img/casestudies/ladanzadelasfieras/laurel.svg";
import PosterLine from "../../static/assets/img/casestudies/ladanzadelasfieras/line.svg";
import LogoF from "../../static/assets/img/casestudies/ladanzadelasfieras/logoF.svg";
import Type_1 from "../../static/assets/img/casestudies/ladanzadelasfieras/type_1.svg";
import Type_2 from "../../static/assets/img/casestudies/ladanzadelasfieras/type_2.svg";
import Type_3 from "../../static/assets/img/casestudies/ladanzadelasfieras/type_3.svg";
import AppSvg from "../../static/assets/img/casestudies/ladanzadelasfieras/app.svg";
import createMarkup from "../../helpers/createMarkup";
import Marquee from "../../helpers/react-double-marquee";
import Quote from "../../components/caseStudy/Quote";
import Insight from "../../components/caseStudy/Insight";
import dynamic from "next/dynamic";

// const originalRed = "#C64028";
// const YoutubeFirstRed = "rgb(221, 56, 20)";
const fierasRed = "rgb(201,32,26)";

const ThePlayer = dynamic(import("../../components/caseStudy/VideoPlayer"), {
  loading: () => <p>Loading player...</p>,
  ssr: false
});

export default function LaDanzaDeLasFieras(props) {
  let t = props.locale.casestudies.studies.ladanzadelasfieras;
  let f = props.locale.contactfooter;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, []);

  let formarquee = t.intro_section.tags.map(function(tag, index) {
    return <h3 key={index + "h"}>{tag}</h3>;
  });

  let initialStats = t.intro_section.stats.map(function(stat, index) {
    return (
      <li key={"stat_" + index}>
        <b>{stat.big}</b>
        <p>{stat.small}</p>
      </li>
    );
  });

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
        <Video
          autoPlay
          playsInline
          muted
          loop
          poster="/static/assets/img/casestudies/ladanzadelasfieras/intro_poster.jpg"
        >
          <source src="/static/assets/video/casestudies/ladanzadelasfieras/intro.mp4" />
        </Video>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.intro_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.intro_section.p)} />
          <Graphic>
            <Laurel />
            {initialStats}
            <Laurel />
          </Graphic>
          <p>{t.intro_section.p2}</p>
        </Limited>
      </FirstSection>
      <Second>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.second_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.second_section.p)} />
        </Limited>
        <PosterGrid>
          <PosterLine />
          <img src="/static/assets/img/casestudies/ladanzadelasfieras/p_1.jpg" />
          <img src="/static/assets/img/casestudies/ladanzadelasfieras/p_2.jpg" />
          <img src="/static/assets/img/casestudies/ladanzadelasfieras/p_3.jpg" />
          <img src="/static/assets/img/casestudies/ladanzadelasfieras/boceto.jpg" />
          <img src="/static/assets/img/casestudies/ladanzadelasfieras/p_5.png" />
        </PosterGrid>
        <Type>
          <p>{t.second_section.font_logo}</p>
          <Type_1 />
          <TypeGrid>
            <div>
              <p>{t.second_section.font_body}</p>
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
        <SecondSection_Sub>
          <TransitionWrapper>
            <img src="/static/assets/img/casestudies/ladanzadelasfieras/materials.jpg" />
          </TransitionWrapper>
          <Limited>
            <h3
              dangerouslySetInnerHTML={createMarkup(
                "– " + t.second_section.subtitle
              )}
            />
            <p dangerouslySetInnerHTML={createMarkup(t.second_section.p2)} />
          </Limited>
          <SequenceContainer>
            <ThePlayer
              url={"https://www.youtube.com/embed/AJMXiE16gtc"}
              still={"/static/assets/img/casestudies/ladanzadelasfieras/videoBack.jpg"}
              ratio={"50.62%"}
            />
          </SequenceContainer>
        </SecondSection_Sub>
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
          <Faces src="/static/assets/img/casestudies/ladanzadelasfieras/d_1.jpg" />

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
          <MacPress src="/static/assets/img/casestudies/ladanzadelasfieras/i_1.jpg" />
          <Quote
            quote={t.third_section.insights.press.quote}
            color={props => props.theme.colors.background}
          />
        </Insight>
        <Insight
          color={fierasRed}
          insight={t.third_section.insights.availability}
          number={3}
        >
          <MacContact src="/static/assets/img/casestudies/ladanzadelasfieras/i_3.jpg" />
        </Insight>
        <Limited>
          <h3
            dangerouslySetInnerHTML={createMarkup(
              "– " + t.third_section.subtitle2
            )}
          />
          <p dangerouslySetInnerHTML={createMarkup(t.third_section.p2)} />
          <AppGrid>
            <img src="/static/assets/img/casestudies/ladanzadelasfieras/webapp.png" />
            <AppSvg />
          </AppGrid>
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
          <video
            autoPlay
            playsInline
            muted
            loop
            poster={"/static/assets/img/casestudies/ladanzadelasfieras/incognito_poster.jpg"}
          >
            <source src="/static/assets/video/casestudies/ladanzadelasfieras/incognito.mp4" />
          </video>
        </Limited>
      </Fourth>
      <Fifth>
        <Limited>
          <h2 dangerouslySetInnerHTML={createMarkup(t.fifth_section.title)} />
          <p dangerouslySetInnerHTML={createMarkup(t.fifth_section.p)} />
        </Limited>
        <Quote
          quote={t.fifth_section.quote}
          color={props => props.theme.colors.background}
        />
        <Limited>
          <img src="../static/assets/img/casestudies/ladanzadelasfieras/l_1.jpg" />
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

const SequenceContainer = styled.div`
  max-width: 1300px;
  width: 100%;
  margin: 4% auto;
`;

const MacContact = styled.img`
  max-width: 670px;
  margin: 5% 0;
`;

const Faces = styled.img`
  max-width: 670px;
  margin: 3.5% 0px -1.5%;
`;

const MacPress = styled.img`
  max-width: 830px;
  width: 90%;
  margin: 4% 5% -9% 5%;
`;

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 670px;
  margin: 10% 0 20% 0;
  img {
    max-width: 100%;
    width: 100%;
  }
  svg {
    height: 100%;
    justify-self: center;
  }
`;

const Type = styled.div`
  max-width: 670px;
  width: 100%;
  svg {
    width: 100%;
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
  img {
    max-width: 1100px;
    margin: 0 auto;
    z-index: 1;
    margin-bottom: 5%;
  }
  &:before {
    content: " ";
    z-index: 0;
    position: absolute;
    height: 50%;
    top: 0;
    left: 0;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
  }
`;

const PosterGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 4.65fr;
  grid-template-rows: 1fr 3fr;
  grid-gap: 2rem;
  max-width: 1200px;
  margin: 5% 5% 10% 5%;
  width: 90%;
  position: relative;
  svg {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 0;
    opacity: 0.5;
    path {
      stroke-width: ${props => props.theme.stroke};
    }
  }
  img {
    z-index: 1;
    max-width: 100%;
    width: 100%;
    &:nth-of-type(4) {
      grid-column: 2 / span 3;
      grid-row: 2 / span 1;
    }
    &:nth-of-type(5) {
      grid-column: 6 / span 1;
      grid-row: 1 / span 2;
    }
  }
`;

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
  margin: 0 2px;
`;

const Sixth = styled(CommonSection)`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("../static/assets/img/casestudies/ladanzadelasfieras/sixthBack.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  a {
    font-size: 4.5rem;
    margin-bottom: 3%;
    text-decoration: none;
    line-height: 100%;
    border-bottom: 3px solid ${props => props.theme.colors.foreground};
  }
`;

const Fifth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
  padding-bottom: 10%;
  img {
    max-width: 670px;
    margin: 5% 0 12% 0;
  }
`;

const Fourth = styled(CommonSection)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground_low};
  margin-bottom: 10%;
  video {
    width: 100%;
    max-width: 670px;
    margin-top: 12%;
  }
  h3 {
    color: ${props => props.theme.colors.foreground};
  }
`;

const Third = styled(CommonSection)`
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.foreground};
`;

const SecondSection_Sub = styled.div`
  color: ${props => props.theme.colors.background};
  background-color: ${fierasRed};
  padding-bottom: 7%;
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  flex: 0 0 auto;
  width: 100%;
  margin-top: 10%;
`;

const Second = styled(CommonSection)`
  color: ${props => props.theme.colors.foreground_low};
  h2 {
    color: ${props => props.theme.colors.foreground};
  }
`;

const Limited = styled.div`
  h2 {
    padding: 18% 0 5% 0;
    font-weight: 200;
    max-width: 670px;
  }
  h3 {
    font-weight: 200;
    padding: 18% 0 5% 0;
    font-size: 4.5rem;
    margin-bottom: 25px;
    max-width: 670px;
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
  display: flex;
  width: 100%;
  margin: 10% auto;
  justify-content: space-between;
  align-items: center;
  li {
    list-style: none;
    text-align: center;
  }
  svg {
    width: 20%;
    max-width: 70px;
    * {
      fill: ${props => props.theme.colors.background};
    }
    &:nth-of-type(2) {
      transform: rotateZ(180deg) rotateX(180deg);
    }
  }
  p {
    margin-top: -15px;
    width: 100%;
    line-height: 85%;
  }
  b {
    font-size: 11.7rem;
    font-weight: 200;
    line-height: 100%;
  }
`;

const Video = styled.video`
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
  background-color: ${props => props.theme.colors.foreground};
  color: ${props => props.theme.colors.background};
  padding-bottom: 8%;
  margin-top: -1px;
`;

const LandSection = styled.section`
  min-height: 100vh;
  background-color: ${props => props.theme.colors.background};
  background-image: url("../static/assets/img/casestudies/ladanzadelasfieras/landBackX.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2px 2px 0 2px;
  svg {
    max-width: 650px;
    width: 70%;
  }
`;
