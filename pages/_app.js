import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import theme from "../styles/theme";
import Cookies from "js-cookie/src/js.cookie";
import en from "../static/locales/en/common.json";
import es from "../static/locales/es/common.json";
import { hotjar } from "react-hotjar";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isEnglish: false,
      hasToConsent: false,
      hasLoaded: false
    };
    this.toggleEnglish = this.toggleEnglish.bind(this);
    this.consentToCookies = this.consentToCookies.bind(this);
    this.checkForConsent = this.checkForConsent.bind(this);
  }

  static async getInitialProps({
    // Component,
    router
    // , ctx
  }) {
    let locale;
    console.log(`get initial with router ${router.pathname}`);
    if (router.pathname.includes("/en")) {
      locale = en;
      console.log("it includes /en");
    } else {
      locale = es;
      console.log("uses default es");
    }
    // let pageProps = {};

    // if (Component.getInitialProps) {
    //   pageProps = await Component.getInitialProps(ctx);
    // }

    return {
      // pageProps,
      locale: locale
    };
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500)); //1500
  }

  componentDidMount() {
    // Load Animation
    this.authenticate().then(() => {
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");
      if (bordered) {
        setTimeout(() => {
          // transition out
          bordered.classList.add("hidden"); //hide after //TODO: clean bordered
          logo.style.opacity = "0";
          bordered.style.transform = "scale(1)";
          bordered.style.borderWidth = "2px";

          setTimeout(() => {
            revealer.style.opacity = "0";
            revealer.style.pointerEvents = "none";
            this.setState({ hasLoaded: true });
          }, 500);

          setTimeout(() => {
            // remove from DOM
            bordered.remove();
            revealer.remove();
            logo.remove();
          }, 3000);
        }, 500);
      }
    });
    // init HotJar
    hotjar.initialize(1494703, 6);
  }

  checkForConsent() {
    // Check if cookie message has been closed before
    var _C = Cookies.get("showCookieMessage");
    if (_C === undefined) {
      console.log("cookies: hasn't consented before");
      this.setState({ hasToConsent: true });
    } else if (_C === "false") {
      console.log("cookies: has consented before");
      this.setState({ hasToConsent: false });
    }
  }

  consentToCookies() {
    console.log("Remove the cookie message");
    Cookies.set("showCookieMessage", "false");
    this.setState({ hasToConsent: false });
  }

  toggleEnglish() {
    console.log("change language");
    this.setState({
      isEnglish: true
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout
          locale={this.props.locale}
          toggleEnglish={this.toggleEnglish}
          checkForConsent={this.checkForConsent}
          consentToCookies={this.consentToCookies}
          hasToConsent={this.state.hasToConsent}
          hasLoaded={this.state.hasLoaded}
        >
          <Component
            locale={this.props.locale}
            {...pageProps}
            toggleEnglish={this.toggleEnglish}
          />
        </Layout>
      </ThemeProvider>
    );
  }
}
