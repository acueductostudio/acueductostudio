import createMarkup from "../../../helpers/createMarkup";

export const H2 = ({ children, ...props }) => (
  <h2 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const H3 = ({ children }) => (
  <h3 dangerouslySetInnerHTML={createMarkup(children)} />
);

export const P = ({ children, ...props }) => (
  <p {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Td = ({ children, ...props }) => (
  <td {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);
