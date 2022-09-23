import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import { B } from "components/shared/Dangerously";

const Stat = ({
  stat,
  children,
}) => {
  return (
    <StatWrapper>
      <Fade triggerOnce>
        <p>
          <>
            <B>{stat.big}</B>
            {stat.small}
          </>
        </p>
      </Fade>
      {children}
    </StatWrapper>
  );
};

export default Stat;

const StatWrapper = styled.div`
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  padding: 3% 5% 5% 10%;
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
    font-weight: 300;
    line-height: 100%;
    display: block;
    color: ${(props) => props.theme.colors.foreground};
  }
  @media (max-width: 1000px) {
    padding-top: 2%;
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
