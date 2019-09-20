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
  padding: 0 5%;
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
      color: ${props => (props.color ? props.color : "#019ee3")};
      display: block;
      position: absolute;
      bottom: 0;
      left: -40px;
      line-height: 190%;
    }
  }
  @media (max-width: 1000px) {
    h4 {
      font-size: 2.4rem;
    }
  }
  @media (max-width: 850px) {
    h4 {
      span {
        line-height: 100%;
        left: 0;
        position: relative;
        margin-right: 15px;
        font-size: 5rem;
      }
      &:after {
        content: "–";
        font-size: 3rem;
        display: block;
        width: 100%;
        min-height: 25px;
        line-height: 60%;
        color: ${props => (props.color ? props.color : "#019ee3")};
      }
    }
  }
`;
