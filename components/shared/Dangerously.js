import createMarkup from "utils/createMarkup";
import Fade from "react-reveal/Fade";

export const H1 = ({ children, ...props }) => (
  <Fade>
    <h1 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
  </Fade>
);

export const P = ({ children, ...props }) => (
  <Fade>
    <p {...props} dangerouslySetInnerHTML={createMarkup(children)} />
  </Fade>
);

export const H2 = ({ children, ...props }) => (
  <Fade>
    <h2 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
  </Fade>
);

export const H3 = ({ children, ...props }) => (
  <Fade>
    <h3 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
  </Fade>
);

export const B = ({ children, ...props }) => (
  <b {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Blockquote = ({ children, ...props }) => (
  <blockquote {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);
