import styled from "styled-components";
import Fade from "react-reveal";
import createMarkup from "../helpers/createMarkup";
import Link from "next/link";
import Arrow from "../components/Arrow";

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
              <a>
                {linktext + " "}
                <b>{link[1]}</b>
                <Arrow />
              </a>
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
  h1 {
    grid-column: 2 / span 7;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
  }
  p {
    grid-column: 7 / span 5;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
  }
  a {
    grid-column: 7 / span 5;
    text-decoration: none;
    display: block;
    b {
      color: ${props => props.theme.colors.foreground};
      font-weight:inherit;
      border-bottom: ${props =>
        props.theme.stroke + " solid " + props.theme.colors.accent};
    }
  }
  svg {
    align-self: flex-end;
    position: absolute;
    right: 0%;
  }
`;
