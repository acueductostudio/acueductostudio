import { css } from "styled-components";

const BorderLink = ({ showLink }) => css`
  display: inline;
  text-decoration: none;
  cursor: pointer;
  background-repeat: repeat-x;
  background-size: 2px 2px;
  background-position: 0 90%;
  transition: background-image 0.3s cubic-bezier(0.455, 0.03, 0.515, 0.955);
  padding-bottom: 2px;
  background-image: ${showLink
    ? `
          url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="2" y2="2" stroke="rgba(244, 244, 244, 0.5)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
        `
    : `
          url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="2" y2="2" stroke="rgba(244, 244, 244, 0)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
        `};
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-image: url('data:image/svg+xml;utf8,<svg preserveAspectRatio="none" viewBox="0 0 2 2" xmlns="http://www.w3.org/2000/svg"><line x1="0" y1="0" x2="2" y2="2" stroke="rgb(23, 64, 191)" stroke-width="3px" vector-effect="non-scaling-stroke"/></svg>');
    }
  }
`;

export default BorderLink;
