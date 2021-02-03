import styled from "styled-components";
import Fade from "react-awesome-reveal";
import Image from "next/image";

const Header = ({ slug }: { slug: string }) => (
  <Fade triggerOnce>
    <Pos>
      <Image
        // width="1500px"
        // height="600px"
        layout="fill"
        src={`/assets/img/articles/${slug}/header.svg`}
      />
      <Fader />
    </Pos>
  </Fade>
);

export default Header;

const Pos = styled.div`
  position: relative;
  div img {
    object-fit: cover;
  }
  height: 600px;
  @media (max-width: 1250px) {
    height: 500px;
  }
  @media (max-width: 900px) {
    height: 400px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`;

const Fader = styled.div`
  width: 100%;
  height: 60%;
  display: block;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, rgba(6, 8, 9, 1) 0%, rgba(6, 8, 9, 0) 100%);
`;
