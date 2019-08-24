import styled, { createGlobalStyle } from "styled-components";
import { useState, useEffect } from "react";
import Head from "next/head";
import PageClipper from "../../components/PageClipper";
import Fade from "react-reveal/Fade";
import ContactFooter from "../../components/ContactFooter";
import LogoSalvaje from "../../static/assets/img/casestudies/salvajenada/logoSalvaje.svg";
import createMarkup from "../../helpers/createMarkup";
import Marquee from "../../helpers/react-double-marquee";

export default function Salvajenada(props) {
  let t = props.locale.casestudies.studies.salvajenada;
  let f = props.locale.contactfooter;

  let formarquee = t.intro_section.tags.map(function(tag, index) {
    return <h3 key={index + "h"}>{tag}</h3>;
  });
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
            <LogoWolf />
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
        </Limited>
      </Second>
      <ContactFooter f={f} />
    </PageClipper>
  );
}

const CommonSection = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SecondBack = styled.div`
  width: 100%;
  background-image: url("../static/assets/img/casestudies/salvajenada/secondBack.svg");
  background-position: center bottom;
  background-size: cover;
  height: 0;
  padding-bottom: 46%;
`;

const Second = styled(CommonSection)`
  background-color: ${props => props.theme.colors.background};
  color: ${props => props.theme.colors.foreground_low};
  h2 {
    color: ${props => props.theme.colors.foreground};
  }
  table {
    color: ${props => props.theme.colors.foreground};
  }
`;

const GlobalStyle = createGlobalStyle`
h2{
  padding: 15% 0 5% 0;
  font-weight:200;
  max-width: 670px;
}
p{
  max-width: 670px;
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
  background-image: url("../static/assets/img/casestudies/salvajenada/wolf.svg");
  background-position: center center;
  background-size: 82px;
  height: 0px;
  width: 55%;
  background-repeat: no-repeat;
  padding-bottom: 37%;
  border-right: 2px solid black;
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
  background-color: #009ee2;
  color: ${props => props.theme.colors.background};
  padding-bottom: 8%;
`;

const Land = styled.section`
  min-height: 100vh;
  background-color: #009ee2;
  background-image: url("../static/assets/img/casestudies/salvajenada/landBack.svg");
  background-position: center bottom;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2px;
  svg {
    max-width: 90%;
    max-height: 860px;
    width: 100%;
  }
`;
