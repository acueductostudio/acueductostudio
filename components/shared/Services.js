import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import Picture from "components/caseStudy/shared/Picture";

const Services = ({ services }) => {
  let heights = [127, 153, 173, 137];
  return (
    <ServicesSection>
      <PinnedSection title={services.title} borderTop>
        {services.areas.map((area, index) => (
          <Service key={"area" + index}>
            <Fade triggerOnce>
              <Picture
                src={`/assets/img/layout/home_draw/${index + 1}.png`}
                width={175}
                height={heights[index]}
                alt={area.title}
              />
              <Info>
                <span>0{index + 1}</span>
                <p>{area.title}</p>
                <p>{area.p}</p>
              </Info>
            </Fade>
          </Service>
        ))}
      </PinnedSection>
    </ServicesSection>
  );
};

export default React.memo(Services);

const Info = styled.div`
  width: auto;
  span {
    color: ${(props) => props.theme.colors.accent};
    position: absolute;
    left: calc(10% + 10px);
    margin-top: 10px;
    font-size: 1.5rem;
  }
  p {
    margin-left: 9%;
    &:nth-of-type(1) {
      margin-bottom: 13px;
      line-height: 120%;
      font-size: 2.6rem;
      color: ${(props) => props.theme.colors.white};
    }
  }
  @media (max-width: 1300px) {
    span {
      margin-top: 8px;
    }
    p {
      &:nth-of-type(1) {
        font-size: 2.4rem;
      }
    }
  }
  @media (max-width: 900px) {
    span {
      left: calc(10%);
    }
    p {
      &:nth-of-type(1) {
        font-size: 2.3rem;
      }
    }
  }
  @media (max-width: 600px) {
    span {
      left: 0px;
      margin-top: 7px;
    }
    p {
      margin-left: 7%;
    }
  }
  @media (max-width: 450px) {
    span {
      left: 0px;
      margin-top: 7px;
    }
    p {
      margin-left: 10%;
    }
  }
`;

const Service = styled.div`
  width: 100%;
  margin-bottom: 15%;
  padding-left: 10%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (max-width: 1300px) {
    img {
      max-width: 150px !important;
    }
  }
  @media (max-width: 600px) {
    padding-left: 0%;
  }
  @media (max-width: 450px) {
    img {
      max-width: 120px !important;
    }
  }
`;

const ServicesSection = styled.section`
  color: ${(props) => props.theme.colors.foreground};
  background-color: ${(props) => props.theme.colors.background};
`;
