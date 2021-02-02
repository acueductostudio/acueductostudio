import createMarkup from "utils/createMarkup";

type DangerousProps = {
  children: React.ReactNode;
  props?: any;
};

export const H1 = ({ children, ...props }: DangerousProps) => (
  <h1 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const H2 = ({ children, ...props }) => (
  <h2 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const H3 = ({ children, ...props }) => (
  <h3 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const H4 = ({ children, ...props }) => (
  <h4 {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const P = ({ children, ...props }) => (
  <p {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Span = ({ children, ...props }) => (
  <span {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const B = ({ children, ...props }) => (
  <b {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Blockquote = ({ children, ...props }) => (
  <blockquote {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const A = ({ children, ...props }) => (
  <a {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Li = ({ children, ...props }) => (
  <li {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Ul = ({ children, ...props }) => (
  <ul {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);

export const Div = ({ children, ...props }) => (
  <div {...props} dangerouslySetInnerHTML={createMarkup(children)} />
);
