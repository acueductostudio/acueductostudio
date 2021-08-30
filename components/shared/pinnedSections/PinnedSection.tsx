import styled from "styled-components";
import BorderLink from "components/shared/BorderedLink";
import MetalPinnedSection from "./MetalPinnedSection";

const PinnedSection = styled(MetalPinnedSection)`
  p {
    max-width: 445px;
    color: ${(props) => props.theme.colors.foreground_low};
    margin-bottom: 5%;
    margin-top: 0;
    &:first-of-type {
      margin-top: 10px;
    }
    b {
      font-weight: 200;
      color: ${(props) => props.theme.colors.foreground};
    }
    cite {
      color: ${(props) => props.theme.colors.foreground_lower};
      text-transform:uppercase;
      font-weight:300;
      letter-spacing:1px;
      font-size:.8em;
      font-style: normal;
    }
  }
  @media (max-width: 600px) {
    a:not(.clean) {
      background-position: 0 2rem;
      padding-bottom: 3px;
    }
  }
  a:not(.clean) {
    color: ${(props) => props.theme.colors.foreground};
    background-position: 0 2.3rem;
    background-position: 0 90%;
    ${BorderLink({ showLink: true })}
  }
`;

export default PinnedSection;
