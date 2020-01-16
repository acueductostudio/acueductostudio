import Head from "components/Head";
import styled from "styled-components";
import { useEffect } from "react";
import TitleSection from "components/shared/TitleSection";
import PinnedSection from "components/shared/PinnedSection";
import { P } from "components/shared/Dangerously";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import Tesla from "static/assets/img/layout/logos/tesla.svg";
import Nike from "static/assets/img/layout/logos/nike.svg";
import Burberry from "static/assets/img/layout/logos/burberry.svg";
import Cemex from "static/assets/img/layout/logos/cemex.svg";
import Hasbro from "static/assets/img/layout/logos/hasbro.svg";
import Starbucks from "static/assets/img/layout/logos/starbucks.svg";
import NodeLogo from "static/assets/img/layout/logos/node.svg";
import ReactLogo from "static/assets/img/layout/logos/react.svg";

export default function Work(props) {
  let t = props.locale.pitch_page;

  useEffect(() => {
    props.setTitle(t.headerTitle);
  }, [props.locale]);

  return (
    <PageClipperPadded>
      <Head
        title={t.page_title}
        description={t.meta_description}
        canonical={"https://acueducto.studio/pitch"}
        en_canonical={"https://acueducto.studio/en/pitch"}
        lang={props.lang}
      />
      <PinnedSection title={t.intro.title} p={t.intro.p0}>
        <P>{t.intro.p0}</P>
        <h5>{t.intro.subtitle1}</h5>
        <P>{t.intro.p1}</P>
        <h5>{t.intro.subtitle2}</h5>
        <P>{t.intro.p2}</P>
        <BusinessLogoList>
          <li>
            <Tesla />
          </li>
          <li>
            <Nike />
          </li>
          <li>
            <Burberry />
          </li>
          <li>
            <Cemex />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
        </BusinessLogoList>
        <h5>{t.intro.subtitle3}</h5>
        <P>{t.intro.p3}</P>
        <h5>{t.intro.subtitle4}</h5>
        <P>{t.intro.p4}</P>
      </PinnedSection>
      <TitleSection
        title={t.second_section.title}
        text={t.second_section.p}
        borderTop
      />
      <TitleSection
        title={t.process_section.title}
        text={t.process_section.p}
        borderTop
      />
      <TitleSection
        title={t.tools_section.title}
        text={t.tools_section.p}
        borderTop
      />
      <LogoListContainer>
        <LogoList>
          <li>
            <NodeLogo />
          </li>
          <li>
            <ReactLogo />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
          <li>
            <Starbucks />
          </li>
          <li>
            <Hasbro />
          </li>
        </LogoList>
      </LogoListContainer>
      <ContactFooter />
    </PageClipperPadded>
  );
}

const LogoListContainer = styled.ul`
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 2.2rem;
  width: 100%;
  display: grid;
  padding: 0 4% 10% 4%;
  position: relative;
`;

const LogoList = styled.ul`
  grid-column: 3 / span 7;
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2.2rem;
`;

const BusinessLogoList = styled.ul`
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  width: 100%;
  display: grid;
  position: relative;
  grid-gap: 2.2rem;
`;

const PageClipperPadded = styled(PageClipper)`
  @media (max-width: 1300px) {
    padding-top: 5%;
  }
  @media (max-width: 700px) {
    padding-top: 10%;
  }
  @media (max-width: 500px) {
    padding-top: 15%;
  }
`;
