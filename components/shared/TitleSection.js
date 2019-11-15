import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { P, H1 } from "components/shared/Dangerously";
import Link from "next/link";
import Arrow from "./Arrow";
import Grid from "./TitleSectionGrid";

const TitleSection = ({ title, text, link, linktext, borderTop }) => {
  return (
    <Grid borderTop={borderTop}>
      <H1>{title}</H1>
      <P>{text}</P>
      <Fade>
        {link ? (
          <p>
            <Link href={link[0]} passHref>
              <WidthLink>
                {linktext + " "}
                <b>{link[1]}</b>
                <Arrow />
              </WidthLink>
            </Link>
          </p>
        ) : (
          ""
        )}
      </Fade>
    </Grid>
  );
};

export default React.memo(TitleSection);

const WidthLink = styled.a`
  grid-column: 7 / span 5;
  text-decoration: none;
  display: block;
  position: relative;
  b {
    color: ${props => props.theme.colors.foreground};
    font-weight: 100;
    border-bottom: ${props =>
      props.theme.stroke + " solid " + props.theme.colors.accent};
  }
  svg {
    align-self: flex-end;
    position: absolute;
    right: 0%;
  }
  @media (max-width: 600px) {
    svg {
      border: 2px solid ${props => props.theme.colors.foreground_low};
      padding: 10px;
      border-radius: 50%;
      width: 45px;
      height: 45px;
      bottom: -10px;
    }
  }
`;
