import styled from "styled-components";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import ArticleProps from "utils/types/ArticleProps";
import BorderLink from "components/shared/BorderedLink";
import Arrow from "components/shared/Arrow";
import CaseGrid from "components/caseStudy/CaseGrid";
import ButtonArrow from "components/shared/footers/ButtonArrow";

interface ArticleReverse extends ArticleProps {
  featured?: boolean;
  reverse?: boolean;
}

const SingleArticle = ({
  title,
  subtitle,
  excerpt,
  slug,
  featured,
  reverse,
}: ArticleReverse) => {
  const LinkComplex = ({ children }: { children: React.ReactNode }) => (
    <Link href={"/articulos/" + slug} passHref>
      <a>{children}</a>
    </Link>
  );
  return (
    <CaseGrid reverse={reverse}>
      <LinkComplex>
        <Fade triggerOnce>
          <ImageContainer
            style={{
              backgroundImage: `url(/assets/img/articles/${slug}/header.svg)`,
            }}
          />
          <Fader />
        </Fade>
      </LinkComplex>
      <Info>
        <Fade triggerOnce>
          <div>{featured && <span>Artículo destacado</span>}</div>
          <LinkComplex>
            <Hoverable>
              {title.charAt(0).toLowerCase() + title.slice(1)}
            </Hoverable>
          </LinkComplex>
          <h3>{subtitle}</h3>
          <div>{featured && <p>{excerpt}</p>}</div>
          <CTA featured={featured}>
            <Link href={"/articulos/" + slug} passHref>
              <ButtonArrow text="leer más" />
            </Link>
          </CTA>
        </Fade>
      </Info>
    </CaseGrid>
  );
};

export default SingleArticle;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  transition: 0.4s ease transform;
  transform: scale(1);
  will-change: transform;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      transform: scale(1.03);
    }
  }
  &:focus,
  &:active {
    transform: scale(1.05);
  }
  @media (max-width: 700px) {
    min-height: 200px;
    position: relative;
    margin: 5% 5% 10px 5%;
    width: 90%;
    padding-bottom: 45%;
  }
`;

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

const CTA = styled.div<{ featured?: boolean }>`
  border-radius: 40px;
  border: 3px solid ${(p) => p.theme.colors.accent};
  display: inline-flex;
  margin-top: ${(p) => (p.featured ? "20%" : 0)};
  a {
    display: flex;
    flex-direction: row;
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
