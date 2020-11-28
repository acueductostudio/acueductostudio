import { useEffect } from "react";
import styled from "styled-components";
import Head from "components/layout/Head.tsx";
import PageClipper from "components/layout/PageClipper";
import PinnedSection from "components/shared/pinnedSections/PinnedSection";
import MetalFooter from "components/shared/footers/MetalFooter";
import ContactForm from "components/ContactForm";
import { WhatsApp } from "components/shared/Logos";

export default function Contact(props) {
  let t = props.locale.contact_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/contacto"}
        en_canonical={"https://acueducto.studio/en/contact"}
        lang={props.lang}
      ></Head>
      <CustomPinnedSection title={t.intro.title} id="Scroll">
        <p>
          {t.intro.p1}
          <br />
          <a href="https://wa.me/message/JNUILJPF23CSP1">
            <WhatsApp />
            +52 55 2789 5399
          </a>
        </p>
        <p>
          {t.intro.p2} <br />
          <a
            href={`mailto:hola@acueducto.studio?subject=${t.intro.mailto.subject}&body=${t.intro.mailto.body}`}
          >
            hola@acueducto.studio
          </a>
        </p>
        <ContactForm text={t.form} />
      </CustomPinnedSection>
      <MetalFooter />
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
      background-color: ${(p) => p.theme.colors.background};
      padding-right: 10px;
      padding-bottom: 5px;
      left: 0;
    }
  }
`;
