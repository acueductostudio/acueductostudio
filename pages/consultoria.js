import styled from "styled-components";
import { useEffect } from "react";
import Fade from "react-reveal/Fade";
import dynamic from "next/dynamic";
import Head from "components/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import PinnedSection from "components/shared/PinnedSection";
import { P, H4 } from "components/shared/Dangerously";
import Picture from "components/caseStudy/shared/Picture";
import Steps from "components/shared/Steps";
import es from "public/locales/es/consultoria.json";
import {
  DigitalTransformation,
  Marketing,
  Branding,
  StrategicDesign,
  Culture,
} from "components/shared/Icons";

const stepIconArray = [
  DigitalTransformation,
  Marketing,
  Branding,
  StrategicDesign,
  Culture,
];

function Consultoria(props) {
  let {
    page_title,
    meta_description,
    headerTitle,
    intro,
    cta,
    process_section,
    areas_section,
    last_section,
  } = es.consultoria_page;

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/consultoria"}
        image={"og_image_podcast.png"}
        lang={props.lang}
      />
      <PinnedSection title={intro.title}>
        <P>{intro.p}</P>
      </PinnedSection>
      <TitleSection {...process_section.intro} borderTop />
      <TitleSection {...areas_section.intro} borderTop />
      <Steps steps={areas_section.areas} iconArray={stepIconArray}>
        <ul>
          {areas_section.area_extra.ul.map((item, index) => {
            <li key={`listItem${index}`}>{item.li}</li>;
          })}
        </ul>
        <p>HOLA</p>
      </Steps>
      <TitleSection {...last_section.intro} borderTop />
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Consultoria);

const Person = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20%;
  h4 {
    font-size: 4.5rem;
    margin-bottom: 3.5%;
    font-weight: 200;
    line-height: 1;
  }
  span {
    color: ${(props) => props.theme.colors.accent_smalltext};
    text-transform: uppercase;
    font-size: 1.1rem;
    letter-spacing: 2.5px;
    margin-bottom: 3.5%;
    font-weight: 300;
  }
  @media (max-width: 1250px) {
    h4 {
      font-size: 4rem;
    }
  }
  @media (max-width: 1000px) {
    h4 {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 600px) {
    h4 {
      font-size: 3rem;
    }
    margin-top: 5%;
  }
`;
