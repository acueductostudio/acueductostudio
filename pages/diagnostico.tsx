import React, { useEffect, useState } from "react";
import { GetStaticProps } from "next";
import ssrLocale from "utils/ssrLocale";
import Head from "components/layout/Head";
import PageClipper from "components/layout/PageClipper";
import Diagnostico from "components/diagnosticoDigital/Diagnostico";
import ContactFooter from "components/shared/footers/ContactFooter";
import TitleSection from "components/shared/TitleSection";

function DiagnosticoDigital({ locale, setTitle, pt }) {
  let { head, headerTitle, intro, diagnose_section, results_section } = pt;

  useEffect(() => {
    setTitle(headerTitle);
  }, [locale]);
  return (
    <PageClipper>
      <Head
        {...head}
        image={{ fileName: "og_image_diagnostico.png", alt: head.image_alt }}
        es_canonical="https://acueducto.studio/diagnostico"
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

export const getStaticProps: GetStaticProps = async (context) => {
  const pt = ssrLocale({
    locale: context.locale,
    fileName: "diagnostico.json",
  });
  if (!pt) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      pt,
    },
  };
};
