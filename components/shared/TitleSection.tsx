import React from "react";
import { P, H1 } from "components/shared/Dangerously";
import Grid, { Container } from "./TitleSectionGrid";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { Fade } from "react-awesome-reveal";

interface TitleProps {
  title: string;
  p?: string;
  link?: string;
  linktext?: string;
  as?: string;
  borderTop?: boolean;
  ul?: Array<String>;
  children?: React.ReactNode;
}

const TitleSection = ({
  title,
  p,
  link,
  linktext,
  as,
  borderTop,
  ul,
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
      {ul && (
        <Container>
          <Fade triggerOnce>
            <ul>
              {ul.map((t: string, index) => (
                <li key={"li" + index}>{t}</li>
              ))}
            </ul>
          </Fade>
        </Container>
      )}
      {link && (
        <Container>
          <Fade triggerOnce>
            <LinkWithArrow link={link} linktext={linktext} as={as} />
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
