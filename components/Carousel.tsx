import { useState, useEffect, useRef } from "react";
import { useInView } from "react-hook-inview";
import styled from "styled-components";
import useInterval from "utils/useInterval";
import Holed from "public/assets/img/layout/holed.svg";

const Carousel = ({ items }) => {
  const [activeIndex, setIndex] = useState(0);
  const [ref, isVisible] = useInView({
    threshold: 0.2,
    unobserveOnEnter: true,
  });
  const [start, startTick] = useState(false);
  const [manualMode, setManualMode] = useState(false);
  const manualModeRef = useRef(manualMode);
  manualModeRef.current = manualMode;

  useInterval(
    () => {
      nextIndex();
    },
    2000,
    start
  );

  useEffect(() => {
    if (isVisible) {
      startTick(true);
    }
  }, [isVisible]);

  useEffect(() => {
    if (manualMode) {
      startTick(false);
    }
    const timer = setTimeout(() => {
      if (manualModeRef.current) {
        startTick(true);
        setManualMode(false);
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, [manualMode]);

  const nextIndex = () => {
    if (activeIndex + 1 > 2) {
      setIndex(0);
    } else {
      setIndex(activeIndex + 1);
    }
  };

  const nextManualIndex = () => {
    nextIndex();
    setManualMode(true);
  };

  const prevManualIndex = () => {
    if (activeIndex - 1 > -1) {
      setIndex(activeIndex - 1);
    } else {
      setIndex(2);
    }
    setManualMode(true);
  };

  return (
    <>
      <HalfContainer>
        <LeftSection />
        <HoledSection ref={ref}>
          <Holed />
          <CarouselContainer>
            {items.map((word, index) => (
              <Word
                key={"word" + index}
                show={index === activeIndex ? true : false}
              >
                {word}
              </Word>
            ))}
          </CarouselContainer>
          <ButtonLeft onClick={prevManualIndex} />
          <ButtonRight onClick={nextManualIndex} />
        </HoledSection>
        <RightSection />
      </HalfContainer>
      <FakePadding />
    </>
  );
};

export default Carousel;

const HalfContainer = styled.div`
  width: 100%;
  display: flex;
`;
const LeftSection = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  width: 53%;
  @media (max-width: 1100px) {
    width: 50%;
  }
  @media (max-width: 800px) {
    width: 35%;
  }
  @media (max-width: 600px) {
    width: 4%;
  }
`;

const RightSection = styled.div`
  background-color: ${(p) => p.theme.colors.background};
  width: 15%;
  @media (max-width: 1100px) {
    width: calc(30% + 1px);
    margin-left: -1px;
  }
  @media (max-width: 800px) {
    width: calc(30% + 1px);
  }
  @media (max-width: 600px) {
    width: calc(4% + 1px);
  }
`;

const FakePadding = styled.div`
  width: 100%;
  padding-bottom: 12%;
  background-color: ${(p) => p.theme.colors.background};
`;

const HoledSection = styled.div`
  width: 35%;
  align-self: end;
  display: flex;
  flex: 0 0 auto;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: -1px 0;
  svg {
    width: 100%;
  }
  @media (max-width: 1100px) {
    width: 45%;
  }
  @media (max-width: 800px) {
    width: 65%;
  }
  @media (max-width: 600px) {
    width: 92%;
  }
`;

const CarouselContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ButtonLeft = styled.div`
  width: 50%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  position: absolute;
  cursor: w-resize;
`;

const ButtonRight = styled(ButtonLeft)`
  left: unset;
  right: 0;
  cursor: e-resize;
`;

const Word = styled.p<{ show: boolean }>`
  position: absolute;
  text-align: center;
  opacity: ${(p) => (p.show ? 1 : 0)};
  font-size: 4rem;
  font-weight: 300;
  padding: 4%;
  color: ${(p) => p.theme.colors.foreground_low};
  transition: opacity 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  @media (max-width: 1100px) {
    font-size: 4rem;
  }
  @media (max-width: 900px) {
    font-size: 3.5rem;
  }
  @media (max-width: 450px) {
    font-size: 2.5rem;
  }
`;
