import styled from "styled-components";
import Fade from "react-reveal/Fade";
import MarqueeHelper from "utils/react-double-marquee";

const Marquee = ({ tags, amount }) => {
  let tagList = tags.map(function(tag, index) {
    return <li key={index + "h"}>{tag}</li>;
  });

  let list = <ul>{tagList}</ul>;
  return (
    <TagScroll>
      <Fade>
        <MarqueeHelper delay={0} childMargin={0}>
          {list}
          {amount === 2 ? list : null}
        </MarqueeHelper>
      </Fade>
    </TagScroll>
  );
};

export default Marquee;

const TagScroll = styled.div`
  text-transform: uppercase;
  white-space: nowrap;
  margin: 7% 0 7% 0;
  width: 100%;
  ul {
    width: 100%;
    display: inline;
    li {
      margin-right: 70px;
      font-weight: 200;
      font-size: 1.4rem;
      display: inline;
      letter-spacing: 4px;
    }
  }
  @media (max-width: 700px) {
    margin: 10% 0 10% 0;
    ul li {
      margin-right: 35px;
      font-size: 1rem;
    }
  }
  @media (max-width: 450px) {
    span ul li {
      font-size: 0.7rem;
    }
  }
`;
