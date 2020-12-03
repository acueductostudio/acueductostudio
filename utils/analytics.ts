import ReactGA from "react-ga";

export const initGA = () => {
  // console.log("GA init");
  ReactGA.initialize("UA-148351126-1");
};
export const logPageView = () => {
  // console.log(`Logging pageview for ${window.location.pathname}`);
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
export const logEvent = (category = "", action = "") => {
  console.log(`Logged event for: ${category}, ${action}`);
  if (category && action) {
    ReactGA.event({ category, action });
  }
};
export const logException = (description = "", fatal = false) => {
  if (description) {
    ReactGA.exception({ description, fatal });
  }
};

//ReactPixel
export const advancedMatching = (email: string) => {
  const am = {
    em: email,
    ct: null,
    country: null,
    db: null,
    fn: null,
    ge: null,
    ln: null,
    ph: null,
    st: null,
    zp: null,
  };
  return am;
};
