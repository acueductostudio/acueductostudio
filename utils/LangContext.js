import React, { useContext } from "react";

const LangContext = React.createContext({});

export function useLocaleContext() {
  const context = useContext(LangContext);
  return context;
}

export const LangProvider = LangContext.Provider;
export const LangConsumer = LangContext.Consumer;
export default LangContext;
