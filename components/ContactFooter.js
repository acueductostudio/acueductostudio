import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Link from "next/link";
import Imago from "../static/assets/img/layout/imago.svg";
import Arrow from "../static/assets/img/layout/arrow.svg";

const ContactFooter = (props) => {
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
          <Link href="/contact">
            <h2>{f.title}</h2>
          </Link>
          </Fade>
          <Flexed>
            <Fade>
            <p>{f.p}</p>
            <Arrow />
            </Fade>
          </Flexed>
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
  width:100%;
  cursor: pointer;
  svg {
    align-self: flex-end;
    width: 50px;
    height: 40px;
    fill: none;
    stroke: ${props => props.theme.colors.foreground};
    stroke-width: ${props => props.theme.stroke};
  }
`;

const Flexed = styled.div`
display:flex;
justify-content: space-between;
align-items:center;
width:100%;
margin-top: 25px; */
`;

const Grid = styled.div`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 10% 4%;
  background-color: ${props => props.theme.colors.accent};
  h2 {
    display: inline;
    font-size: 8.5rem;
    background-size: 1px 1em;
    box-shadow: ${props => props.theme.colors.accent} 0px -7px inset,
      ${props => props.theme.colors.foreground} 0px -12px inset;
    transition: 0.3s ease all;
    line-height: 108%;
    &:hover {
      box-shadow: ${props => props.theme.colors.accent} 0px -7px inset,
        ${props => props.theme.colors.background} 0px -12px inset;
    }
  }
  p {
    color: ${props => props.theme.colors.foreground_low};
  }
`;
