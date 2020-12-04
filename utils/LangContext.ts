import React, { useContext } from "react";

export type SharedTProps = {
  casestudies: Array<object>;
  contact_footer: {
    title: string;
    p: string;
    button_text: string;
    footer_nav: {
      navTitles: {
        main: string;
        resources?: string;
        community: string;
        policies: string;
      };
      main: { title: string; link: string; as?: string }[];
      policies: { title: string; link: string; as?: string }[];
      resources?: { title: string; link: string }[];
      mailto: { subject: string; body: string };
    };
  };
  cookie_message: object;
  lang: string;
  legal_nav: object;
  nav: Array<object>;
  next_study: { p: string };
};

const LangContext = React.createContext<SharedTProps | null>(null);

export function useLocaleContext() {
  const context = useContext(LangContext);
  return context;
}

export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;
export default LangContext;
