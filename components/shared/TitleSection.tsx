import React from "react";
import { P, H1 } from "components/shared/Dangerously";
import Grid, { Container } from "./TitleSectionGrid";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { Fade } from "react-awesome-reveal";

type TitleProps = {
  title: string;
  p: string;
  link?: string;
  linktext?: string;
  borderTop?: boolean;
  children?: React.ReactNode;
};

const TitleSection = ({
  title,
  p,
  link,
  linktext,
  borderTop,
  children,
}: TitleProps) => {
  return (
    <Grid borderTop={borderTop}>
      <Fade triggerOnce>
        <H1>{title}</H1>
      </Fade>
      {p && (
        <Fade triggerOnce>
          <P>{p}</P>
        </Fade>
      )}
      {link && (
        <Container>
          <Fade triggerOnce>
            <LinkWithArrow link={link} linktext={linktext} />
          </Fade>
        </Container>
      )}
      {children && (
        <Container>
          <Fade triggerOnce>{children}</Fade>
        </Container>
      )}
    </Grid>
  );
};

export default React.memo(TitleSection);
