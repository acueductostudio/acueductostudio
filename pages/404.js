import Head from "../components/Head";
import { useEffect } from "react";
import PageClipper from "components/PageClipper";
import TitleSection from "components/shared/TitleSection";
import ContactFooter from "components/ContactFooter";

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
        canonical={"https://acueducto.studio/404"}
        en_canonical={"https://acueducto.studio/404"}
      />
      <TitleSection {...t.intro} />
      <ContactFooter />
    </PageClipper>
  );
}
