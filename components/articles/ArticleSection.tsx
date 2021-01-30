import React from "react";
import styled from "styled-components";
import { P, H1 } from "components/shared/Dangerously";
import Grid, { Container } from "components/shared/TitleSectionGrid";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { Fade } from "react-awesome-reveal";

interface TitleProps {
  title: string;
  subtitle: string;
  author: string;
  date: Date;
  body: Array<{ any }>;
  p?: string;
  link?: string;
  linktext?: string;
  as?: string;
  borderTop?: boolean;
}

const TitleSection = ({
  title,
  subtitle,
  author,
  date,
  body,
  p,
  link,
  linktext,
  as,
}: TitleProps) => {
  let fullDate = new Date(`${date}T00:00:00`);
  let bodyText = body.forEach((e) => <p>{e}</p>);
  return (
    <Grid>
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
      <Fade triggerOnce>
        <P>
          {body.map((item) => (item.t1 ? <p>{item.t1}</p> : "nada"))}
        </P>
      </Fade>
      {link && (
        <Container>
          <Fade triggerOnce>
            <LinkWithArrow link={link} linktext={linktext} as={as} />
          </Fade>
        </Container>
      )}
    </Grid>
  );
};

export default React.memo(TitleSection);

const Credits = styled.div`
  text-transform: uppercase;
  address {
    display: inline-block;
    font-style: normal;
  }
`;
