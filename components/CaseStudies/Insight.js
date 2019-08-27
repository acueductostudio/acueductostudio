import styled from "styled-components";

const Insight = props => (
    <InsightWrapper>
      <div>
        <h4>
          <span>0{props.number}</span>
          {props.title}
        </h4>
        <p>{props.p}</p>
      </div>
      {props.children}
    </InsightWrapper>
  );

  export default Insight;

  const InsightWrapper = styled.div`
    margin: 10% 0 4% 0;
    width: 100%;
    align-items: center;
    display: flex;
    flex-direction: column;
  h4{
      font-weight:200;
      margin-bottom: 10px;
  }
  `;
