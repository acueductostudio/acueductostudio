import styled from "styled-components";
import MarqueeHelper from "../../../helpers/react-double-marquee";


const Marquee = ({tags, amount}) => {
    let tagList = tags.map(function (tag, index) {
        return <h3 key={index + "h"}>{tag}</h3>;
    });

    return (
        <TagScroll>
            <MarqueeHelper delay={0} childMargin={0}>
                {tagList}
                {amount === 2? tagList : null}
            </MarqueeHelper>
        </TagScroll>
    )
}

export default Marquee;
const TagScroll = styled.div`
  text-transform: uppercase;
  white-space: nowrap;
  margin: 7% 0 7% 0;
  width: 100%;
  h3 {
    margin-right: 70px;
    font-weight: 100;
    font-size: 1.4rem;
    display: inline;
    letter-spacing: 4px;
  }
  @media (max-width: 700px) {
    margin: 10% 0 10% 0;
    h3{
        margin-right:35px;
        font-size: 1rem;
    }
  }
`;