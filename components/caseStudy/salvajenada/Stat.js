import styled from "styled-components";
import { B } from "components/shared/Dangerously";

const Stat = ({ stat, children }) => {
  return (
    <StatWrapper>
      <p>
        <B>{stat.big}</B>
        {stat.small}
      </p>
      {children}
    </StatWrapper>
  );
};

export default Stat;

const StatWrapper = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  padding: 7% 5% 5% 10%;
  i {
    font-size: 3.4rem;
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
    display: block;
    color: ${props => props.theme.colors.foreground};
  }
  @media (max-width: 1000px) {
    b {
      font-size: 7rem;
    }
  }
  @media (max-width: 800px) {
    b {
      font-size: 6rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 600px) {
    b {
      font-size: 7rem;
    }
  }
  @media (max-width: 500px) {
    b {
      font-size: 6rem;
    }
    p {
      font-size: 1.3rem;
    }
  }
  @media (max-width: 400px) {
    b {
      font-size: 5rem;
    }
  }
`;
