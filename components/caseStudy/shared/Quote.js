import styled from "styled-components";
import createMarkup from "../../../helpers/createMarkup";
import Mark from "../../../static/assets/img/layout/quoteMark.svg";

const Quote = props => (
  <QuoteWrapper passedColor={props.color} noMargin={props.noMargin}>
    <QuoteLimiter>
      <QuoteMark passedColor={props.color}>
        <Mark />
      </QuoteMark>
      <blockquote dangerouslySetInnerHTML={createMarkup(props.quote.quote)} />
      <Author>– {props.quote.name}</Author>
      {props.quote.label ? <Label>{props.quote.label}</Label> : null}
    </QuoteLimiter>
  </QuoteWrapper>
);

export default Quote;

const Author = styled.p`
  opacity: 0.7;
  font-size: 2.5rem;
  margin-top: 25px;
  opacity: 1.4;
`;
const Label = styled.p`
  font-size: 1.1rem;
  opacity: 0.5;
  letter-spacing: 1.7px;
  margin: 5px 0 0 25px;
  text-transform: uppercase;
`;

const QuoteMark = styled.div`
  left: -55px;
  top: -15px;
  opacity: 0.07;
  width: 125px;
  height: 115px;
  font-size: 10rem;
  position: absolute;
  svg {
    width: 100%;
    * {
      fill: ${props =>
        props.passedColor ? props.passedColor : props.theme.colors.foreground};
    }
  }
`;

const QuoteLimiter = styled.div`
  max-width: 670px;
  position: relative;
`;

const QuoteWrapper = styled.div`
  width: 100%;
  font-size: 3.4rem;
  margin: ${props => (props.noMargin ? "0" : "6% 0 4% 0")};
  padding: 0 5%;
  position: relative;
  display: flex;
  justify-content: center;
  color: ${props =>
    props.passedColor ? props.passedColor : props.theme.colors.foreground};
  blockquote {
    margin: 0;
    position: relative;
  }
  @media (max-width: 1000px) {
    font-size: 2.5rem;
    ${Author}{
      font-size:2rem;
    }
    ${Label}{
      margin-left:20px;
    }
  }
  @media (max-width: 700px) {
    font-size: 2.2rem;
    ${Author}{
      font-size:1.8rem;
    }
    ${Label}{
      margin-left:17px;
      font-size:1rem;
    }
  }
`;
