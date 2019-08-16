import styled from "styled-components";
import Head from "next/head";
import Fade from "react-reveal/Fade";

export default function Contact() {
  return (
    <ContactoWrapper>
      <Head>
        <title>Antítesis Films | Contacto</title>
      </Head>
      <Fade>
        <h2>Contacto</h2>
      </Fade>
    </ContactoWrapper>
  );
}

const ContactoWrapper = styled.div`
    display: flex;
    width: calc(100% - 44px);
    height: calc(100% - 44px);
    position: absolute;
    margin: 0 auto;
    max-width: 1500px;
    top: 20px;
    left: 20px;
    bottom: 20px;
    right: 20px;
    overflow: hidden;
`;
