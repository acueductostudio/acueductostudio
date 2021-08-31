import React from "react";
import styled from "styled-components";
import { H1 } from "components/shared/Dangerously";
import { Fade } from "react-awesome-reveal";
import Header from "./Header";
import ArticleProps from "utils/types/ArticleProps";
import ShareRouter from "components/podcast/ShareRouter";
import CenteredSection, {
  Content,
  Transcript,
} from "components/shared/CenteredSection";

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
          <Content>
            <Transcript>{content}</Transcript>
          </Content>
        </Fade>
      </CenteredSection>
    </>
  );
};

export default React.memo(ArticlePage);

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
