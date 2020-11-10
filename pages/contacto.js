import { useEffect } from "react";
import styled from "styled-components";
import Head from "components/Head";
import Link from "next/link";
import PageClipper from "components/PageClipper";
import PinnedSection from "components/shared/PinnedSections/PinnedSection";
import ContactFooter from "components/ContactFooter";
import ContactForm from "components/ContactForm";
import { WhatsApp } from "components/shared/Logos";

export default function Contacto(props) {
  let t = props.locale.contact_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={t.page_title}
        description={t.meta_description}
        lang={props.lang}
      ></Head>
      <CustomPinnedSection title={t.intro.title}>
        <p>
          {t.intro.p1}
          <br />
          <a href="https://wa.me/525541634721">
            <WhatsApp />+ 52 55 4163 4721
          </a>
        </p>
        <p>
          {t.intro.p2} <br />
          <a href="mailto:hola@acueducto.studio">hola@acueducto.studio</a>
        </p>
        <p>{t.intro.p3}</p>
        <ContactForm text={t.form} />
      </CustomPinnedSection>
      <ContactFooter />
    </PageClipper>
  );
}

const CustomPinnedSection = styled(PinnedSection)`
  a {
    line-height: 165%;
  }
  > div > div:nth-of-type(1) a {
    position: relative;
    padding-left: 35px;
    svg {
      width: 35px;
      height: 35px;
      position: absolute;
      top: 0;
      background-color: black;
      padding-right: 10px;
      padding-bottom: 5px;
      left: 0;
    }
  }
`;
