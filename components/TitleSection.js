import styled from "styled-components";
import Fade from "react-reveal";
import createMarkup from "../helpers/createMarkup";

const TitleSection = props => {
  const { title, text, link } = props;
  return (
    <Grid borderTop={props.borderTop}>
      <Fade>
        <h2 dangerouslySetInnerHTML={createMarkup(title)} />
        <p dangerouslySetInnerHTML={createMarkup(text)} />
      </Fade>
    </Grid>
  );
};

export default TitleSection;

const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  h2 {
    grid-column: 2 / span 4;
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
  }
`;
