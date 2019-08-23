import styled from "styled-components";
import createMarkup from "../../helpers/createMarkup";
import Fade from "react-reveal/Fade";
import Arrow from "../../static/assets/img/layout/arrow.svg";

const SingleCase = props => {
  return (
    <Case>
      <figure />
      <Info>
        <h4>{props.title}</h4>
        <Flexed>
          <p dangerouslySetInnerHTML={createMarkup(props.tags)} />
          <Arrow />
        </Flexed>
      </Info>
    </Case>
  );
};

const CaseList = props => {
  let c = props.c;

  let cases = c.map(function(study, index) {
    if (props.limit !== undefined && index + 1 > props.limit) {
      return;
    } else {
      return (
        <SingleCase
          key={"case" + index}
          title={study.title}
          tags={study.tags}
          link={study.link}
          video={study.video}
        />
      );
    }
  });
  return <CaseStudiesWrapper>{cases}</CaseStudiesWrapper>;
};

export default CaseList;

const Flexed = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Info = styled.div`
  padding: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  h4 {
    font-size: 4.5rem;
    font-weight: 200;
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
  }
  svg {
    align-self: flex-end;
    width: 50px;
    height: 40px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
  }
`;

const Case = styled.div`
  display: grid;
  border-top: ${props =>
    props.theme.stroke + " solid " + props.theme.colors.foreground_lowest};
  grid-template-columns: repeat(2, 1fr);
  figure {
    margin: 10%;
    background-color: ${props => props.theme.colors.accent};
    width: 80%;
    height: 0;
    padding-bottom: 80%;
  }
`;

const CaseStudiesWrapper = styled.section`
  color: ${props => props.theme.colors.foreground};
  background-color: ${props => props.theme.colors.background};
`;
