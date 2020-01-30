import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { P, H1 } from "components/shared/Dangerously";
import createMarkup from "utils/createMarkup";
import Link from "next/link";
import Arrow from "./Arrow";
import Grid from "./TitleSectionGrid";

const TitleSection = ({ title, p, link, linktext, borderTop }) => {
  return (
    <Grid borderTop={borderTop}>
      <H1>{title}</H1>
      <P>{p}</P>
      {link ? (
        <Link href={link[0]} passHref>
          <WidthLink>
            <Fade>
              <p>
                <span dangerouslySetInnerHTML={createMarkup(linktext + " ")} />
                <b>{link[1]}</b>
              </p>
            </Fade>
            <Arrow />
          </WidthLink>
        </Link>
      ) : (
        ""
      )}
    </Grid>
  );
};

export default React.memo(TitleSection);

const WidthLink = styled.a`
  grid-column: 7 / span 5;
  text-decoration: none;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;
  b {
    color: ${props => props.theme.colors.foreground};
    font-weight: 100;
    border-bottom: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.accent};
  }
  a span {
    align-self: flex-end;
    position: absolute;
    right: 0%;
  }
  &:hover {
    svg * {
      stroke: ${props => props.theme.colors.accent};
    }
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${props => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -5px;
    }
  }
`;
