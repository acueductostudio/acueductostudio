import styled from "styled-components";
import Head from "components/Head";
import { useEffect } from "react";
import es from "public/locales/es/testdigital.json";
import PageClipper from "components/PageClipper";
import TestD from "components/testDigital/TestDigital";
import ContactFooter from "components/ContactFooter";
import TitleSection from "components/shared/TitleSection";

function TestDigital(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    intro,
  } = es.testdigital_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/podcast"}
        image={"og_image_podcast.png"}
        lang={props.lang}
      />
      <TitleSection {...intro} />
      <TestD />
      <ContactFooter />
    </PageClipper>
  );
}
export default React.memo(TestDigital);
