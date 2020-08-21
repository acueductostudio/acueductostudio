import { P, H1 } from "components/shared/Dangerously";
import Grid, { Container } from "./TitleSectionGrid";
import LinkWithArrow from "components/shared/LinkWithArrow";
import { Fade } from "react-awesome-reveal";

const TitleSection = ({ title, p, link, linktext, borderTop, children }) => {
  return (
    <Grid borderTop={borderTop}>
      <Fade>
        <H1>{title}</H1>
      </Fade>
      {p && (
        <Fade>
          <P>{p}</P>
        </Fade>
      )}
      {link && (
        <Container>
          <Fade>
            <LinkWithArrow link={link} linktext={linktext} />
          </Fade>
        </Container>
      )}
      {children && (
        <Container>
          <Fade>{children}</Fade>
        </Container>
      )}
    </Grid>
  );
};

export default React.memo(TitleSection);
