import styled from "styled-components";
import { P, H1 } from "components/shared/Dangerously";
import Grid from "./TitleSectionGrid";
import LinkWithArrow from "components/shared/LinkWithArrow";

const TitleSection = ({ title, p, link, linktext, borderTop, children }) => {
  return (
    <Grid borderTop={borderTop}>
      <H1>{title}</H1>
      <P>{p}</P>
      {link && (
        <Container>
          <LinkWithArrow link={link} linktext={linktext} />
        </Container>
      )}
      {children && <Container>{children}</Container>}
    </Grid>
  );
};

export default React.memo(TitleSection);

const Container = styled.div`
  grid-column: 7 / span 5;
  max-width: 455px;
  @media (max-width: 1100px) {
    grid-column: 5 / span 6;
  }
  @media (max-width: 800px) {
    grid-column: 3 / span 7;
  }
  @media (max-width: 600px) {
    grid-column: 1 / span 12;
  }
`;
