import styled from "styled-components";
import Fade from "react-reveal";
import createMarkup from "../helpers/createMarkup";
import Link from "next/link";
import Arrow from "../components/Arrow";
import Grid from "./TitleSectionGrid";

const TitleSection = props => {
  const { title, text, link, linktext } = props;

  return (
    <Grid borderTop={props.borderTop}>
      <Fade>
        <h1 dangerouslySetInnerHTML={createMarkup(title)} />
        <p dangerouslySetInnerHTML={createMarkup(text)} />
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

export default TitleSection;

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
