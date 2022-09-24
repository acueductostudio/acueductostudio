import { useState, useEffect, useRef } from "react";
import clientLocale from "utils/clientLocale";
import { ThemeProvider } from "styled-components";
import LoadingBar from "react-top-loading-bar";
import Layout from "components/layout/Layout";
import theme from "styles/theme";
import delayForLoading from "utils/delayForLoading";
import en from "public/locales/en/common.json";
import es from "public/locales/es/common.json";
import { LangProvider } from "utils/LangContext";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

//can we dynamic import es or en accordingly?

function App({ Component, pageProps, router }) {
  const [sharedT, setSharedT] = useState(router.locale === "en" ? en : es);
  const [hasLoaded, setHasLoaded] = useState(false);
  const LoadingBarRef = useRef(null);

  useEffect(() => {
    clientLocale({
      locale: router.locale,
      fileName: "common.json",
      callBack: (nT) => {
        setSharedT(nT);
      },
    });
  }, [router.locale]);

  useEffect(() => {
    // Disable scroll
    const targetElement = document.querySelector("#dum"); //dummy
    disableBodyScroll(targetElement);

    // Load Animation
    delayForLoading(800).then(() => {
      // console.log("start animation");
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");
      if (bordered) {
        // Transition out
        bordered.classList.add("hidden");
        logo.style.opacity = "0";

        setTimeout(() => {
          revealer.style.pointerEvents = "none";
          revealer.style.opacity = "0";
          setHasLoaded(true);
        }, 400);

        setTimeout(() => {
          // Remove transition items from DOM
          bordered.remove();
          revealer.remove();
          logo.remove();
        }, 1000);
      }
    });
    // router event listeners for loadingBar
    router.events.on("routeChangeStart", handleRouteStart);
    router.events.on("routeChangeComplete", handleRouteComplete);
    router.events.on("routeChangeError", handleRouteError);

    return () => {
      // remove loadingBar event listeners
      router.events.off("routeChangeStart", handleRouteStart);
      router.events.off("routeChangeComplete", handleRouteComplete);
      router.events.off("routeChangeError", handleRouteError);
    };
  }, []);

  useEffect(() => {
    const targetElement = document.querySelector("#dum"); //dummy
    hasLoaded &&
      (console.log("Page hasLoaded"), enableBodyScroll(targetElement));
  }),
    [hasLoaded];

  const handleRouteComplete = (url) => {
    setTimeout(function () {
      LoadingBarRef.current.complete();
    }, 300);
  };

  const handleRouteStart = (url) => {
    LoadingBarRef.current.continuousStart();
  };

  const handleRouteError = (err, url) => {
    setTimeout(function () {
      if (err.cancelled) {
        // console.log(`${err} on route to ${url}`);
      }
      LoadingBarRef.current.complete();
    }, 300);
  };

  return (
    <ThemeProvider theme={theme}>
      <LangProvider value={sharedT}>
        <LoadingBar
          ref={LoadingBarRef}
          height={3}
          color={theme.colors.accent}
          className="TopBar"
        />
        <Layout t={sharedT} hasLoaded={hasLoaded}>
          <Component {...pageProps} lang={router.locale} />
        </Layout>
      </LangProvider>
    </ThemeProvider>
  );
}

export default App;
