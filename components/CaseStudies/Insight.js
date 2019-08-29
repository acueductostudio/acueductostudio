import styled from "styled-components";

const Insight = props => (
  <InsightWrapper color={props.color}>
    <Limiter>
      <h4>
        <span>0{props.number}</span>
        {props.insight.title}
      </h4>
      <p>{props.insight.p}</p>
    </Limiter>
    {props.children}
  </InsightWrapper>
);

export default Insight;

const Limiter = styled.div`
  max-width: 670px;
  width: 100%;
`;

const InsightWrapper = styled.div`
  margin: 10% 0 4% 0;
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;
  h4 {
    font-weight: 200;
    margin-bottom: 10px;
    font-size: 3rem;
    position: relative;
    span {
      font-size: 1.5rem;
      color: ${props => props.color? props.color : "#019ee3"};
      display: block;
      position: absolute;
      bottom: 0;
      left: -40px;
      line-height: 190%;
    }
  }
`;
