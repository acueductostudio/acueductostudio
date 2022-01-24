import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";
import { P } from "components/shared/Dangerously";
import LinkWithArrow from "components/shared/LinkWithArrow";

const SHARE_URL = "https://acueducto.studio/diagnostico";

const Results = ({ results, results_section, setTestStatus }) => {
  let { greeting, answers, last_message } = results_section;
  return (
    <ResultsGrid>
      <Fade triggerOnce>
        <div>
          <MainResult
          // onClick={() => setTestStatus("")}
          >
            <p>
              {greeting.p1}, {results[3]}.
              <br />
              <span>
                {greeting.span} <b>↓</b>
              </span>
            </p>
            <h4>
              {((results[0] + results[1] + results[2]) / 3).toFixed(1)}
              <span>/10</span>
            </h4>
          </MainResult>
        </div>
        <div>
          <ResultNumber result={results[0].toFixed(1)} />
          <div>
            <h3>{answers.strategy.title}</h3>
            {results[0].toFixed(1) < 5 && <P>{answers.strategy.bad}</P>}
            {results[0].toFixed(1) >= 5 && results[0] < 8 && (
              <P>{answers.strategy.neutral}</P>
            )}
            {results[0].toFixed(1) >= 8 && <P>{answers.strategy.good}</P>}
          </div>
        </div>
        <div>
          <ResultNumber result={results[1].toFixed(1)} />
          <div>
            <h3>{answers.culture.title}</h3>
            {results[1].toFixed(1) < 5 && <P>{answers.culture.bad}</P>}
            {results[1].toFixed(1) >= 5 && results[1] < 8 && (
              <P>{answers.culture.neutral}</P>
            )}
            {results[1].toFixed(1) >= 8 && <P>{answers.culture.good}</P>}
          </div>
        </div>
        <div>
          <ResultNumber result={results[2].toFixed(1)} />
          <div>
            <h3>{answers.competition.title}</h3>
            {results[2].toFixed(1) < 5 && <P>{answers.competition.bad}</P>}
            {results[2].toFixed(1) >= 5 && results[2] < 8 && (
              <P>{answers.competition.neutral}</P>
            )}
            {results[2].toFixed(1) >= 8 && <P>{answers.competition.good}</P>}
          </div>
        </div>
      </Fade>
      <LastMessage>
        <Fade triggerOnce>
          <div>
            <p>{last_message.p1}</p>
            <h3>{last_message.title1}</h3>
            <TwitterShareButton url={SHARE_URL}>
              <TwitterIcon size={55} bgStyle={{ fill: "#0C1112" }} />
            </TwitterShareButton>
            <FacebookShareButton url={SHARE_URL}>
              <FacebookIcon size={55} bgStyle={{ fill: "#0C1112" }} />
            </FacebookShareButton>
            <WhatsappShareButton url={SHARE_URL}>
              <WhatsappIcon size={55} bgStyle={{ fill: "#0C1112" }} />
            </WhatsappShareButton>
            <LinkedinShareButton url={SHARE_URL}>
              <LinkedinIcon size={55} bgStyle={{ fill: "#0C1112" }} />
            </LinkedinShareButton>
            <p>
              {last_message.p2}
              <br />
              <br />
            </p>
            <LinkWithArrow
              link={last_message.link}
              linktext={last_message.linktext}
            />
          </div>
        </Fade>
      </LastMessage>
    </ResultsGrid>
  );
};

export default Results;

const LastMessage = styled.div`
  color: ${(p) => p.theme.colors.foreground_low};
  border-top: 2px solid ${(p) => p.theme.colors.accent};
  padding: 10% 5% 0 5%;
  width: 100% !important;
  margin: 5% auto 0 auto !important;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 0 !important;
  & > div {
    max-width: 410px;
    margin-bottom: 0 !important;
  }
  h3 {
    padding-bottom: 5px !important;
    line-height: 110% !important;
  }
  button {
    svg * {
      transition: 0.4s ease all;
    }
    &:nth-of-type(3) svg {
      height: 49px;
      margin-bottom: 1px;
    }
    @media (hover: hover) and (pointer: fine) {
      &:hover {
        svg * {
          fill: ${(props) => props.theme.colors.accent};
        }
      }
    }
  }
  p {
    &:nth-of-type(2) {
      margin-top: 5%;
    }
  }
  @media (min-width: 600px) {
    span {
      height: 26px;
    }
  }
  @media (max-width: 600px) {
    margin: 0px !important;
    padding-right: 0 !important;
    padding-left: 0 !important;
    & > div {
      max-width: unset;
    }
    p {
      max-width: unset;
    }
  }
`;

const MainResult = styled.div`
  color: ${(p) => p.theme.colors.accent};
  align-items: flex-end;
  margin-left: 0 !important;
  width: 100% !important;
  p {
    font-weight: 100;
    margin-bottom: 5%;
    span {
      color: ${(p) => p.theme.colors.accent};
      font-size: 6rem;
      margin-top: 15px;
      font-weight: 300;
      display: block;
      b {
        font-size: 3.5rem;
        font-weight: 800;
      }
    }
  }
  h4 {
    font-weight: 300;
    font-size: 6rem;
    border: 4px solid ${(p) => p.theme.colors.accent};
    border-radius: 50%;
    height: 170px;
    padding-top: 32px;
    text-align: center;
    width: 170px;
    margin: 10% auto 30px auto;
    span {
      font-size: 2rem;
    }
  }
  @media (max-width: 950px) {
    p span {
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    p span {
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    p span {
      font-size: 3.3rem;
      b {
        font-size: 2rem;
      }
    }
    h4 {
      margin-bottom: 0;
    }
  }
`;

const ResultNumber = styled.span`
  width: 85px;
  height: 85px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid
    ${(p) =>
      p.result >= 5 && p.result < 8
        ? p.theme.colors.warning
        : p.result >= 8
        ? p.theme.colors.success
        : p.theme.colors.error};
  &::before {
    content: ${(p) => `'${p.result}'`};
    font-size: 3.5rem;
    display: flex;
    text-align: center;
    color: ${(p) =>
      p.result >= 5 && p.result < 8
        ? p.theme.colors.warning
        : p.result >= 8
        ? p.theme.colors.success
        : p.theme.colors.error};
  }
`;

const ResultsGrid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
  min-height: 20vh;
  > div {
    width: 100%;
    grid-column: 3 / span 8;
    display: flex;
    margin-bottom: 5%;
    > div {
      margin-left: 5%;
      width: calc(100% - 85px - 5%);
      p {
        color: ${(p) => p.theme.colors.foreground_low};
        b {
          color: ${(p) => p.theme.colors.foreground};
          font-weight: 100;
        }
      }
      h3 {
        color: ${(p) => p.theme.colors.foreground};
        font-weight: 200;
        padding-left: 0;
        padding-bottom: 15px;
        margin-top: 0;
        text-align: left;
        font-size: 3rem;
      }
    }
  }
  @media (max-width: 900px) {
    > div {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    > div {
      grid-column: 1 / span 12;
      flex-direction: column;
      > div {
        margin-left: 0;
        margin-top: 10px;
        margin-bottom: 15px;
        width: 100%;
        h3 {
          padding-bottom: 10px;
        }
      }
    }
  }
`;
