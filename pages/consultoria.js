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
import ConsultoriaCTA from "components/ConsultoriaCTA";
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
        <ConsultoriaCTA cta={cta} />
      </PinnedSection>
      <TitleSection {...process_section.intro} borderTop />
      <StepGrid>
        {process_section.process.map((step, index) => (
          <div key={`consultingStep${index}`}>
            <span>0{index + 1}</span>
            <h4>{step.title}</h4>
            <p>{step.p}</p>
          </div>
        ))}
      </StepGrid>
      <TitleSection {...areas_section.intro} borderTop />
      <Steps steps={areas_section.areas} iconArray={stepIconArray}>
        <LastStep>
          <h3>{areas_section.area_extra.title}</h3>
          <ul>
            {areas_section.area_extra.ul.map((item, index) => (
              <li key={`listItem${index}`}>{item.li}</li>
            ))}
          </ul>
        </LastStep>
      </Steps>
      <TitleSection {...last_section.intro} borderTop>
        <ConsultoriaCTA cta={cta} />
      </TitleSection>
      <ContactFooter />
    </PageClipper>
  );
}

export default React.memo(Consultoria);

const StepGrid = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 8%;
  div {
    margin-right: 2%;
  }
  span {
    color: ${(p) => p.theme.colors.accent};
    font-size: 1.6rem;
  }
  h4 {
    font-size: 2.8rem;
    line-height: 125%;
    font-weight: 100;
    margin-bottom: 17px;
    margin-top: 8px;
  }
  p {
    color: ${(p) => p.theme.colors.foreground_low};
    max-width: 220px;
  }
`;

const LastStep = styled.div`
  justify-content: flex-end;
  display: flex;
  flex-direction: column;
  h3 {
    font-size: 3.5rem;
    color: ${(p) => p.theme.colors.accent};
    font-weight: 200;
    max-width: 360px;
    line-height: 120%;
    margin-bottom: 20px;
  }
  ul {
    list-style: none;
    max-width: 340px;
    li {
      text-decoration: none;
      color: ${(p) => p.theme.colors.foreground_low};
      &:not(:last-of-type) {
        margin-bottom: 20px;
      }
      &:before {
        content: " ";
        width: 10px;
        height: 3px;
        background-color: ${(p) => p.theme.colors.accent};
        display: inline-block;
        border-radius: 1px;
        margin-right: 10px;
      }
    }
  }
`;
