import Head from "components/layout/Head.tsx";
import React, { useEffect } from "react";
import es from "public/locales/es/diagnosticodigital.json";
import PageClipper from "components/layout/PageClipper";
import Diagnostico from "components/diagnosticoDigital/Diagnostico";
import ContactFooter from "components/shared/footers/ContactFooter";
import TitleSection from "components/shared/TitleSection";

function DiagnosticoDigital(props) {
  let {
    page_title,
    meta_description,
    image_alt,
    headerTitle,
    intro,
    diagnose_section,
    results_section,
  } = es.diagnosticodigital_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);
  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        image={{fileName:"og_image_diagnostico.png", alt:image_alt}}
        es_canonical="https://acueducto.studio/diagnostico"
        lang={props.lang}
      />
      <TitleSection {...intro} />
      <Diagnostico
        diagnose_section={diagnose_section}
        results_section={results_section}
      />
      <ContactFooter />
    </PageClipper>
  );
}
export default React.memo(DiagnosticoDigital);
