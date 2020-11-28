import Head from "components/layout/Head.tsx";
import { useEffect } from "react";
import PageClipper from "components/layout/PageClipper";
import TitleSection from "components/shared/TitleSection";
import ContactFooter from "components/shared/footers/ContactFooter";

export default function Error(props) {
  let t = props.locale.error_page;
  useEffect(() => {
    props.setTitle(t.headerTitle + " 404");
  }, []);
  return (
    <PageClipper>
      <Head
        title="Acueducto | 404"
        lang={props.lang}
        description={t.meta_description}
        es_canonical={"https://acueducto.studio/404"}
        en_canonical={"https://acueducto.studio/404"}
      />
      <TitleSection {...t.intro} />
      <ContactFooter />
    </PageClipper>
  );
}
