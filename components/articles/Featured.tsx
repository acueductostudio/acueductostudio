import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import ArticleProps from "utils/types/ArticleProps";
import BorderLink from "components/shared/BorderedLink";
import Image from "next/image";
import Arrow from "components/shared/Arrow";
import CaseGrid from "components/caseStudy/CaseGrid";

const Featured = ({ title, subtitle, excerpt, slug }: ArticleProps) => {
  const LinkComplex = ({ children }: { children: React.ReactNode }) => (
    <Link href={"/articulos/" + slug} passHref>
      <a>{children}</a>
    </Link>
  );
  console.log(excerpt);
  return (
    <CaseGrid>
      <LinkComplex>
        <Fade triggerOnce>
          <Pos>
            <Image
              layout="fill"
              src={`/assets/img/articles/${slug}/header.svg`}
            />
            <Fader />
          </Pos>
        </Fade>
      </LinkComplex>
      <Info>
        <Fade triggerOnce>
          <span>Artículo destacado</span>
          <LinkComplex>
            <Hoverable>
              {title.charAt(0).toLowerCase() + title.slice(1)}
            </Hoverable>
          </LinkComplex>
          <h3>{subtitle}</h3>
          <p>{excerpt}</p>
          <CTA>
            <LinkComplex>
              <span>leer más</span>
              <Arrow />
            </LinkComplex>
          </CTA>
        </Fade>
      </Info>
    </CaseGrid>
  );
};

export default Featured;

const Info = styled.div`
  padding-left: 10%;
  a {
    text-decoration: none;
  }
  span:not(a span) {
    text-transform: uppercase;
    color: ${(props) => props.theme.colors.foreground_low};
    letter-spacing: 0.2rem;
    font-size: 1.5rem;
  }
  h2 {
    font-size: 4.5rem;
    font-weight: 200;
    line-height: 115%;
    max-width: 600px;
    cursor: pointer;
    background-position: 0 5.8rem;
  }
  h3 {
    font-size: 2.4rem;
    font-weight: 100;
    line-height: 115%;
    max-width: 500px;
    margin-top: 10px;
    color: ${(props) => props.theme.colors.accent};
    margin-bottom: 8%;
  }
  p {
    color: ${(props) => props.theme.colors.foreground_low};
    max-width: 500px;
  }
`;

const Hoverable = styled.h2`
  ${BorderLink({ showLink: false })}
`;

const CTA = styled.div`
  border-radius: 40px;
  border: 3px solid ${(p) => p.theme.colors.accent};
  display: inline-flex;
  margin-top: 20%;
  a {
    display: flex;
    flex-direction: row;
  }
`;

const Pos = styled.div`
  position: relative;
  div img {
    object-fit: cover;
  }
  height: 600px;
  @media (max-width: 1250px) {
    height: 500px;
  }
  @media (max-width: 900px) {
    height: 400px;
  }
  @media (max-width: 700px) {
    height: 300px;
  }
  @media (max-width: 600px) {
    height: 200px;
  }
`;

const Fader = styled.div`
  width: 100%;
  height: 30%;
  display: block;
  position: absolute;
  bottom: 0;
  background: linear-gradient(
    0deg,
    rgba(6, 8, 9, 1) 30%,
    rgba(6, 8, 9, 0) 100%
  );
`;
