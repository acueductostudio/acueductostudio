
import styled from "styled-components";
import TitleSection from "../components/TitleSection";

const Process = props => {
    let t = props.t;
    return (
      <ProcessWrapper>
        <TitleSection title={t.services.title} text={t.services.p} borderTop />
      </ProcessWrapper>
    );
  };
  
  export default Process;
  
  const ProcessWrapper = styled.section`
    color: ${props => props.theme.colors.foreground};
    background-color: ${props => props.theme.colors.background};
    min-height: 90vh;
  `;
  