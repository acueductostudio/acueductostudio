import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import ArticleProps from "utils/types/ArticleProps";
import ShareRouter from "components/podcast/ShareRouter";
import CenteredSection, { Content } from "components/shared/CenteredSection";

const ArticlePage = ({
  title,
  date,
  subtitle,
  author,
  slug,
  content,
}: ArticleProps) => {
  let fullDate = new Date(`${date}T00:00:00`);
  let formatDate = fullDate.toLocaleDateString("es-MX", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <>
      <Header slug={slug} title={title} />
      <CenteredSection>
        <Fade triggerOnce>
          <H1>{title.charAt(0).toLowerCase() + title.slice(1)}</H1>
          <Credits>
            <h2>{subtitle}</h2>
            por <address>{author}</address>
            {` | `}
            <time dateTime={date.toString()}>{formatDate}</time>
          </Credits>
          <ShareRouter shareUrl={`https://acueducto.studio/articulos/${slug}`}>
            Comparte
          </ShareRouter>
          <Content>{content}</Content>
        </Fade>
      </CenteredSection>
    </>
  );
};

export default React.memo(ArticlePage);

// const Content = styled(Div)``;

const Credits = styled.div`
  font-weight: 200;
  margin-bottom: 6%;
  text-align: center;
  h2 {
    margin: 18px 0 24px;
  }
  address {
    display: inline-block;
    font-style: normal;
  }
`;

// const ArticleGrid = styled(Grid)`
//   background-color: ${(p) => p.theme.colors.background};
//   color: ${(p) => p.theme.colors.foreground};
//   grid-gap: 2rem;
//   div {
//     &:nth-of-type(1),
//     &:nth-of-type(2),
//     &:nth-of-type(3),
//     &:nth-of-type(4) {
//       grid-column: 2 / span 10;
//     }
//     &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
//       grid-column: 4 / span 8;
//     }
//   }
//   h1 {
//     color: ${(p) => p.theme.colors.background};
//     margin-bottom: 0;
//     max-width: 900px;
//   }
//   h2 {
//     font-size: 2.5rem;
//     grid-column: 1 / span 5;
//     font-weight: 200;
//     max-width: 690px;
//     color: ${(p) => p.theme.colors.accent};
//     line-height: 130%;
//   }
//   ${Content} {
//     img {
//       max-width: 100%;
//       height: auto;
//       margin-bottom: 2rem;
//     }
//     h2 {
//       font-size: 3rem;
//       margin-bottom: 1rem;
//       font-weight: 200;
//       color: ${(p) => p.theme.colors.background};
//       line-height: 120%;
//     }
//     h3 {
//       font-size: 2.5rem;
//       margin-bottom: 1rem;
//       line-height: 120%;
//       font-weight: 200;
//       color: ${(p) => p.theme.colors.background};
//     }
//     h4 {
//       font-size: 2rem;
//       margin-bottom: 1rem;
//       line-height: 120%;
//       font-weight: 200;
//       color: ${(p) => p.theme.colors.background};
//     }
//     p {
//       color: ${(p) => p.theme.colors.foreground_lowest};
//       max-width: 680px;
//       letter-spacing: -0.003em;
//       line-height: 29px;
//       font-size: 1.85rem;
//       margin-bottom: 2rem;
//       word-break: break-word;
//       overflow-wrap: break-word;
//       strong {
//         font-weight: 300;
//         color: ${(p) => p.theme.colors.background};
//       }
//     }
//     ul {
//       margin-bottom: 2rem;
//       max-width: 680px;
//       letter-spacing: -0.003em;
//       line-height: 29px;
//       font-size: 1.85rem;
//       list-style: none;
//       li {
//         &:before {
//           content: "– ";
//           font-weight: 300;
//           font-size: 2rem;
//         }
//       }
//     }
//   }
//   @media (max-width: 1350px) {
//     div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
//       grid-column: 3 / span 8;
//     }
//   }
//   @media (max-width: 1250px) {
//     h2 {
//       font-size: 2.3rem;
//     }
//   }
//   @media (max-width: 1100px) {
//     div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
//       grid-column: 2 / span 10;
//     }
//   }
//   @media (max-width: 1000px) {
//     h2 {
//       font-size: 2rem;
//     }
//     ${Content} {
//       p,
//       ul {
//         font-size: 1.7rem;
//         line-height: 25px;
//       }
//       h2 {
//         font-size: 2.6rem;
//         font-weight: 300;
//       }
//       h3 {
//         font-size: 2.1rem;
//         font-weight: 300;
//       }
//       h4 {
//         font-size: 1.7rem;
//         font-weight: 300;
//       }
//     }
//     div:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
//       grid-column: 2 / span 10;
//     }
//   }
//   @media (max-width: 800px) {
//     padding-top: 8%;
//     ${Credits} {
//       font-size: 1.5rem;
//       font-weight: 300;
//     }
//     div {
//       &:nth-of-type(1),
//       &:nth-of-type(2),
//       &:nth-of-type(3),
//       &:nth-of-type(4) {
//         grid-column: 1 / span 12;
//       }
//       &:not(:nth-of-type(1), :nth-of-type(2), :nth-of-type(3), :nth-of-type(4)) {
//         grid-column: 1 / span 12;
//       }
//     }
//   }
//   @media (max-width: 650px) {
//     padding-top: 30px;
//     grid-gap: 1.2rem;
//     h2 {
//       font-size: 1.85rem;
//       line-height: 120%;
//     }
//   }
//   @media (max-width: 400px) {
//     ${Content} {
//       p,
//       ul {
//         font-weight: 200;
//       }
//     }
//     h1 {
//       font-size: 3.2rem;
//     }
//   }
// `;
