import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Imago from "../static/assets/img/layout/imago.svg";
import Arrow from "../components/Arrow";

const ContactFooter = props => {
  let f = props.f;
  return (
    <Grid>
      <Graphic>
        <Fade>
          <Imago />
        </Fade>
      </Graphic>
      <Linked>
        <Fade>
          <Link href="/contact" passHref>
            <a>
              <h2>{f.title}</h2>
              <Flexed>
                <p>{f.p}</p>
                <Arrow />
              </Flexed>
            </a>
          </Link>
        </Fade>
      </Linked>
    </Grid>
  );
};

export default ContactFooter;

const Graphic = styled.div`
  grid-column: 1 / span 3;
  display: flex;
  align-items: center;
  svg {
    width: 100%;
    height: auto;
    path {
      fill: ${props => props.theme.colors.foreground};
    }
  }
`;

const Linked = styled.div`
  grid-column: 9 / span 4;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  a{
    text-decoration:none;
  }
`;

const Flexed = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 25px;
`;

const Grid = styled.footer`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 7% 4%;
  background-color: ${props => props.theme.colors.accent};
  h2 {
    display: inline;
    padding:0;
    font-size: 8.5rem;
    font-weight:200;
    background-size: 1px 1em;
    box-shadow: ${props => props.theme.colors.accent} 0px -8px inset,
      ${props => props.theme.colors.foreground} 0px -12px inset;
    transition: 0.3s ease all;
    line-height: 108%;
    &:hover {
      box-shadow: ${props => props.theme.colors.accent} 0px -8px inset,
        ${props => props.theme.colors.background} 0px -12px inset;
    }
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
  }
`;
