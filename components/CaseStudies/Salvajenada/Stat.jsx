import styled from "styled-components";
import createMarkup from "../../../helpers/createMarkup";

const Stat = ({ stat, children }) => {
    return (
        <StatWrapper>
            <p>
                <b dangerouslySetInnerHTML={createMarkup(stat.big)}/>
                {stat.small}
            </p>
            {children}
        </StatWrapper>
    )
};

export default Stat;

const StatWrapper = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction:column;
  padding: 7% 5% 5% 10%;
  i{
    font-size:3.4rem;
    font-style: normal;
    line-height: 100%;
  }
  p {
    width: 100%;
  }
  b {
    font-size: 8rem;
    font-weight: 200;
    line-height: 100%;
    display:block;
  }
  `;


