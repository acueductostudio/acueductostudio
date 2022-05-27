import React from "react";
import { P, H1, H2 } from "components/shared/Dangerously";
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
  heading?: number;
}

const TitleSection = ({
  title,
  p,
  link,
  linktext,
  as,
  borderTop,
  children,
  ul,
  heading,
}: TitleProps) => {
  return (
    <Grid borderTop={borderTop}>
      {(!heading || heading === 1) && (
        <Fade triggerOnce>
          <H1 className="h1">{title}</H1>
        </Fade>
      )}
      {heading === 2 && (
        <Fade triggerOnce>
          <H2 className="h1">{title}</H2>
        </Fade>
      )}
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
