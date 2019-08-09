import { useRouter } from "next/router";
import styled from "styled-components";
import Head from "next/head";
import Slide from "react-reveal/Slide";
import { proyects } from "../portafolio/proyects.json";
import React, { useState, useEffect } from "react";

const Post = ({ queryId }) => {
  const router = useRouter();
  const proyect = proyects[`${queryId}`];

  // const description = () => {
  //   if (proyect.description ===! undefined) {
  //     console.log("si armo")
  //     return <p>{proyect.description}</p>;
  //   } else {
  //     return <p>no jala</p>
  //   }
  //   console.log(proyect.description)
  // };
  var description = proyect.description !== undefined ? <p>{proyect.description}</p> : "";
  return (
    <ProyectWrapper>
      <Head>
        <title>Antítesis Films | {router.query.id}</title>
      </Head>
      <Slide bottom cascade>
        <h2>{proyect.title}</h2>
      </Slide>
      <Slide bottom>
        <h3>{proyect.subtitle}</h3>
        {description}
        <h4>{router.query.id}</h4>
      </Slide>
    </ProyectWrapper>
  );
};

Post.getInitialProps = async ({ query }) => {
  return { queryId: query.id };
};

export default Post;

const ProyectWrapper = styled.div`
  display: grid;
  box-sizing: border-box;
  padding-bottom: 160px;
  width: 100%;
  grid-template-columns: repeat(12, 1fr);
  align-items: flex-end;
  h2 {
    grid-column: 4 / span 6;
    text-transform: uppercase;
    font-size: 3.2rem;
  }
  p,
  h3 {
    grid-column: 4 / span 6;
  }
`;
