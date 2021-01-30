import React from "react";
import styled from "styled-components";
import { P, H1 } from "components/shared/Dangerously";
import Grid from "components/shared/TitleSectionGrid";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

interface TitleProps {
  id: number;
  title: string;
  subtitle: string;
  author: string;
  date: Date;
  body: Array<{ p?: string; t1?: string; t2?: string; image_alt?: string }>;
  p?: string;
  link?: string;
  linktext?: string;
  as?: string;
  borderTop?: boolean;
}

const ArticleSection = ({
  id,
  title,
  subtitle,
  author,
  date,
  body,
}: TitleProps) => {
  let fullDate = new Date(`${date}T00:00:00`);
  let imgCount = 0;
  return (
    <>
      <Fade triggerOnce>
        <Pos>
          <Image
            width="1500px"
            height="600px"
            src={`/assets/img/articles/${id}/header.svg`}
          />
          <Fader />
        </Pos>
      </Fade>
      <ArticleGrid>
        <Fade triggerOnce>
          <H1>{title}</H1>
          <h2>{subtitle}</h2>
          <Credits>
            Por <address>{author}</address>
            {` | `}
            <time dateTime={date.toString()}>
              {fullDate.toLocaleDateString("es", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </Credits>
        </Fade>
        <div>
          {body.map((item, index) => {
            if (item.p) {
              return <P key={`p_${index}`}>{item.p}</P>;
            } else if (item.t1) {
              return <h3 key={`p_${index}`}>{item.t1}</h3>;
            } else if (item.t2) {
              return <h4 key={`p_${index}`}>{item.t2}</h4>;
            } else if (item.image_alt) {
              imgCount = imgCount + 1;
              return (
                <Image
                  key={`p_${index}`}
                  src={`/assets/img/articles/${id}/${imgCount}.svg`}
                  width="600px"
                  height="300px"
                  alt={item.image_alt}
                />
              );
            }
          })}
        </div>
      </ArticleGrid>
    </>
  );
};

export default React.memo(ArticleSection);

const ArticleGrid = styled(Grid)`
  background-color: ${(p) => p.theme.colors.foreground};
  color: ${(p) => p.theme.colors.background};
  div {
    &:nth-of-type(1),
    &:nth-of-type(2),
    &:nth-of-type(3) {
      grid-column: 2 / span 6;
    }
    &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3)) {
      grid-column: 4 / span 8;
    }
  }
  h1 {
    color: ${(p) => p.theme.colors.background};
    margin-bottom: 0;
  }
  h2 {
    font-size: 2.2rem;
    grid-column: 1 / span 5;
    font-weight: 200;
    color: ${(p) => p.theme.colors.accent};
  }
  p {
    color: ${(p) => p.theme.colors.background};
    max-width: 600px;
  }
`;
const Pos = styled.div`
  position: relative;
`;
const Fader = styled.div`
  width: 100%;
  height: 60%;
  display: block;
  position: absolute;
  bottom: 0;
  background: linear-gradient(0deg, rgba(6, 8, 9, 1) 0%, rgba(6, 8, 9, 0) 100%);
`;

const Credits = styled.div`
  text-transform: uppercase;
  font-weight: 200;
  margin-bottom: 10%;
  address {
    display: inline-block;
    font-style: normal;
  }
`;
