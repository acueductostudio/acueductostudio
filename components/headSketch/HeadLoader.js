import styled from "styled-components";
import Picture from "components/caseStudy/shared/Picture";

const HeadLoader = () => (
  <HeadLoaderContainer>
    <Picture
      src="/assets/img/layout/headPlacerHolder.jpg"
      alt="3DScan"
      height={400}
      width={400}
    />
  </HeadLoaderContainer>
);

export default HeadLoader;

const HeadLoaderContainer = styled.div`
  width: 100%;
  margin-bottom: 10%;
  position: relative;
  max-width: 400px;
  left: -30%;
  @media (max-width: 1250px) {
    margin-bottom: 8%;
    left: -20%;
  }
  @media (max-width: 1000px) {
    margin-bottom: 7%;
  }
  @media (max-width: 600px) {
    left: -30px;
  }
`;
