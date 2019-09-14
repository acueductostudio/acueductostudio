import styled from "styled-components";
import Fade from "react-reveal/Fade";
import createMarkup from "../helpers/createMarkup";
import BorderedLink from "./styles/BorderedLink";

const PinnedSection = ({ t, children, className }) => (
  <Pinned className={className}>
    <Fade>
      <h1 dangerouslySetInnerHTML={createMarkup(t.intro.title)} />
      <p dangerouslySetInnerHTML={createMarkup(t.intro.p)} />
    </Fade>
    <ScrollDown>{children}</ScrollDown>
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
  a{
      color: ${props => props.theme.colors.foreground};
      background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 1)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
      text-decoration: none;
      background-repeat: repeat-x;
      background-size:1px 1px;
      background-position: 0 calc(1rem + 7px);
      transition: .3s ease all;
      padding-bottom: 2px;
      &:hover{
        background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="2" y2="2" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
        background-size:2px 2px;

      }
    }
`;
