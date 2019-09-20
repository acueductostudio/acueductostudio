import styled from "styled-components";

const TextColumn = styled.div`
  padding: 0 5%;
  h2 {
    padding: 15% 0 5% 0;
    font-weight: 200;
    max-width: 670px;
    line-height: 110%;
    &.topUnPadded {
      padding: 1px 0 5% 0;
    }
    b {
      font-size: 4rem;
    }
  }
  h3 {
    font-size: 4.5rem;
    margin-bottom: 25px;
    max-width: 670px;
    font-weight: 200;
    padding: 18% 0 5% 0;
  }
  p {
    max-width: 670px;
    &.bigger {
      font-size: 3.4rem;
      text-align: center;
      margin-top: 10%;
    }
  }
  img {
    width: 100%;
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 4.8rem;
      b {
        font-size: 3rem;
      }
    }
    h3 {
      font-size: 3.5rem;
      margin-bottom: 0;
    }
  }
  @media (max-width: 700px) {
    h2 {
      font-size: 4rem;
      b {
        font-size: 2rem;
      }
    }
  }
  @media (max-width: 600px) {
    h3 {
      font-size: 2.5rem;
    }
  }
  @media (max-width: 450px) {
    h2 {
      font-size: 3.3rem;
    }
  }
`;

export default TextColumn;
