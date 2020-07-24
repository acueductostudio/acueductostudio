import styled from "styled-components";
import { useEffect, useState } from "react";
import useInterval from "utils/useInterval";
import Head from "components/Head";
import TitleSection from "components/shared/TitleSection";
import PageClipper from "components/PageClipper";
import ContactFooter from "components/ContactFooter";
import PinnedSection from "components/shared/PinnedSection";
import { P } from "components/shared/Dangerously";
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
  const [spinWord, setSpinWord] = useState(0);

  useInterval(
    () => {
      setSpinWord(spinWord === 2 ? 0 : spinWord + 1);
    },
    2500,
    true
  );

  useEffect(() => {
    props.setTitle(headerTitle);
  }, [props.locale]);

  return (
    <PageClipper>
      <Head
        title={page_title}
        description={meta_description}
        canonical={"https://acueducto.studio/consultoria"}
        image={"og_image_consultoria.jpg"}
        lang={props.lang}
      />
      <PinnedSection
        title={intro.pre_title + intro.words[spinWord] + intro.post_title}
      >
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
  @media (max-width: 1100px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    max-width: 900px;
    grid-gap: 2rem;
    margin: 0 auto;
    margin-bottom: 5%;
    p {
      max-width: 250px;
    }
  }
  @media (max-width: 1250px) {
    h4 {
      font-size: 2.2rem;
      font-weight: 200;
    }
  }
  @media (max-width: 1000px) {
    h3 {
      font-size: 2rem;
    }
  }
  @media (max-width: 800px) {
    h3 {
      font-size: 2.2rem;
    }
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
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
    line-height: 110%;
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
  @media (max-width: 1000px) {
    h3 {
      font-size: 2.5rem;
    }
    ul li {
      font-size: 1.4rem;
    }
  }
`;
