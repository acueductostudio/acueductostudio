import styled from "styled-components";
import React, { useContext } from "react";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import Arrow from "components/shared/Arrow";
import LangContext from "utils/LangContext";
import { P } from "components/shared/Dangerously";

const NextStudy = ({ link, margined }) => {
  const context = useContext(LangContext);
  let n = context.next_study;
  return (
    <Link href={link} passHref>
      <Wrapper margined={margined}>
        <LogoContainer>
          <Logo
            style={{
              backgroundImage: `url(/assets/img/casestudies/${link}/portfolio_logo.svg)`,
            }}
          />
        </LogoContainer>
        <Fade triggerOnce>
          <P>{n.p}</P>
          <ArrowContainer>
            <Arrow />
          </ArrowContainer>
        </Fade>
      </Wrapper>
    </Link>
  );
};

export default React.memo(NextStudy);

const ArrowContainer = styled.div`
  margin-top: 10%;
`;

const LogoContainer = styled.div`
  width: 100%;
  max-width: 700px;
  position: relative;
`;

const Logo = styled.div`
  padding-bottom: 20%;
  background-size: 90%;
  background-position: 50% 50%;
  transition: transform 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  background-repeat: no-repeat;
  transform: scale(0.97);
  transform-origin: 50% 0;
`;

const Wrapper = styled.a`
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
  text-decoration: none;
  color: ${(props) => props.theme.colors.foreground};
  p {
    margin-bottom: 1%;
    margin-top: ${(props) => (props.margined ? "1%" : "0")};
    border-bottom: 2px solid transparent;
  }
  &:hover {
    ${Logo} {
      transform: scale(1);
    }
    svg {
      stroke: ${(props) => props.theme.colors.accent};
    }
  }
  @media (max-width: 900px) {
    padding-top: 15%;
  }
  @media (max-width: 600px), (max-height: 450px) {
    p {
      max-width: 220px;
      text-align: center;
    }
    &:hover svg * {
      stroke: ${(props) => props.theme.colors.foreground};
    }
    svg {
      border: 2px solid ${(props) => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -10px;
      transition: 0.2s ease-out all;
      &:active,
      &:focus {
        border-color: ${(props) => props.theme.colors.accent};
        transform: scale(0.9);
      }
    }
  }
  @media (max-width: 450px) {
    ${Logo} {
      margin-bottom: 5%;
    }
  }
`;
