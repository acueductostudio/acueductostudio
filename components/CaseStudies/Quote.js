import styled from "styled-components";
import createMarkup from "../../helpers/createMarkup";
import Mark from "../../static/assets/img/layout/quoteMark.svg";

const Quote = props => (
  <Wrapper marginBottom={props.marginBottom} passedColor={props.color}>
    <QuoteMark passedColor={props.color}><Mark/></QuoteMark>
    <blockquote dangerouslySetInnerHTML={createMarkup(props.quote.quote)} />
    <Author>– {props.quote.name}</Author>
    {props.quote.label ? <Label>{props.quote.label}</Label> : null}
  </Wrapper>
);

export default Quote;

const Wrapper = styled.div`
  width: 100%;
  font-size: 3.4rem;
  max-width: 670px;
  margin: 4% 0;
  position:relative;
  color: ${props => props.passedColor? props.passedColor : props.theme.colors.foreground};
  margin-bottom: ${props => (props.marginBottom ? props.marginBottom : "4%")};
  blockquote {
    margin: 0;
    position: relative;
  }
`;

const QuoteMark = styled.div`
      left: -55px;
      top: -15px;
      opacity: 0.07;
      width: 125px;
      height: 115px;
      font-size: 10rem;
      position: absolute;
      svg{
        width:100%;
        *{
          fill: ${props => props.passedColor? props.passedColor : props.theme.colors.foreground};
        }
      }
`;

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
