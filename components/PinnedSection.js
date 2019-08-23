import styled from "styled-components";
import Fade from "react-reveal/Fade";
import createMarkup from "../helpers/createMarkup";

const PinnedSection = ({ t, scroll }) => (
  <Pinned>
    <Fade>
      <h1 dangerouslySetInnerHTML={createMarkup(t.intro.title)} />
      <p dangerouslySetInnerHTML={createMarkup(t.intro.p)} />
    </Fade>
    <ScrollDown>{scroll}</ScrollDown>
  </Pinned>
);
export default PinnedSection;

const ScrollDown = styled.div`
  grid-column: 7 / span 4;
  display: flex;
  flex-direction: column;
`;
const Pinned = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  h1 {
    grid-column: 2 / span 4;
    position: sticky;
    top: 17.5%;
    letter-spacing: 0px;
    line-height: 100%;
    font-size: 7rem;
  }
  p {
    grid-column: 7 / span 4;
    color: ${props => props.theme.colors.foreground_low};
    margin-bottom: 5%;
  }
`;
