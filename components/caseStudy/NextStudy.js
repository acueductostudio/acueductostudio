import styled from "styled-components";
import Fade from "react-reveal";
import Link from "next/link";
import Arrow from "./../Arrow";

const NextStudy = ({ link, n }) => {
  console.log(n);
  return (
    <Link href={link}>
      <Wrapper>
        <LogoContainer>
          <Logo
            style={{
              backgroundImage: `url(/static/assets/img/casestudies/${link}/portfolio_logo.svg)`
            }}
          />
        </LogoContainer>
        <p>{n.p}</p>
        <ArrowContainer>
          <Arrow />
        </ArrowContainer>
      </Wrapper>
    </Link>
  );
};

export default NextStudy;

const ArrowContainer = styled.div`
  margin-top: 15px;w
  /* position: absolute;
  right: 5%;
  bottom: 50%;
  transform: translateY(50%);
  svg {
    width: 65px;
    height: auto;
  } */
`;

const LogoContainer = styled.div`
  height: 0;
  padding-bottom: 12.3%;
  width: 100%;
  max-width: 700px;
  position: relative;
`;

const Logo = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0%;
  bottom: 0;
  background-size: 90%;
  background-position: 50% 50%;
  transition: 0.3s ease all;
  background-repeat: no-repeat;
  transform: scale(0.97);
`;

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  position: relative;
  height: auto;
  flex: 0 0 auto;
  margin: 0 2px;
  width: 100%;
  padding: 9% 7% 8%;
  cursor: pointer;
  p {
    margin-top: 2%;
    border-bottom: 2px solid transparent;
    transition: 0.3s ease all;
  }
  &:hover {
    /* p {
      border-bottom: 2px solid ${props => props.theme.colors.accent};
    } */
    ${Logo} {
      transform: scale(1);
    }
    svg {
      * {
        stroke: ${props => props.theme.colors.accent};
      }
    }
  }
`;
