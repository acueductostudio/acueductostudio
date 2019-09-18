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

const Grid2 = styled.div`
  border-top: ${props =>
    props.borderTop
      ? `${props.theme.stroke} solid ${props.theme.colors.foreground}`
      : "none"};
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  h1 {
    grid-column: 2 / span 10;
    letter-spacing: 0;
    line-height: 100%;
    font-size: 7rem;
    margin-bottom: 5%;
    max-width: 800px;
  }
  p {
    grid-column: 7 / span 4;
    color: ${props => props.theme.colors.foreground_low};
    position: relative;
    max-width: 445px;
  }
  @media (max-width: 1400px) {
    p {
      grid-column: 7 span 5;
    }
  }
  @media (max-width: 1100px) {
    p {
      grid-column: 5 / span 6;
    }
    h1{
      font-size: 6rem;
    }
  }
  @media (max-width: 950px){
    h1{
      font-size: 5rem;
    }
  }
  @media (max-width: 800px) {
    padding-top: 15%;
    p,
    h1 {
      grid-column: 3 / span 8;
    }
    h1{
      font-size: 4rem;
    }
  }
  @media (max-width: 600px) {
    grid-column-gap: 0rem;

    p,
    h1 {
      grid-column: 2 / span 10;
    }
  }
  @media (max-width: 600px) {
    p,
    h1 {
      grid-column: 1 / span 12;
    }
  }
  /* a.inline {
      color: ${props => props.theme.colors.foreground};
      background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="1" y2="1" stroke="rgba(244, 244, 244, 1)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
      text-decoration: none;
      background-repeat: repeat-x;
      background-size: 1px 1px;
      background-position: 0 calc(1rem + 7px);
      transition: 0.3s ease all;
      padding-bottom: 2px;
      &:hover {
        background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="2" y2="2" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
        background-size: 2px 2px;
      }
    } */
`;

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
`;
