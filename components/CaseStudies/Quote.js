import styled from "styled-components";
import createMarkup from "../../helpers/createMarkup";

const Quote = props => (
  <Wrapper marginBottom={props.marginBottom}>
    <blockquote dangerouslySetInnerHTML={createMarkup(props.quote)} />
    <br />
    <p>– {props.name}</p>
    {props.label ? <Label>{props.label}</Label> : null}
  </Wrapper>
);

export default Quote;

const Wrapper = styled.div`
  width: 100%;
  font-size: 3.4rem;
  max-width: 670px;
  margin: 4% 0;
  margin-bottom: ${props => props.marginBottom ? props.marginBottom : "4%"};
  blockquote {
    margin: 0;
    position: relative;
    color: ${props => props.theme.colors.foreground};
    &:before,
    &:after {
      color: ${props => props.theme.colors.foreground_lowest};
      width: 35px;
      height: 35px;
      font-size: 10rem;
      position: absolute;
    }
    &:before {
      content: "“";
      left: -45px;
      top: -5px;
    }
    &:after {
      content: "”";
      right: -45px;
      bottom: 5px;
    }
  }
`;

const Label = styled.span`
  font-size: 1.1rem;
  letter-spacing: 117%;
  text-transform: uppercase;
  color: ${props => props.theme.colors.foreground_low};
`;
