import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import theme from "../styles/theme";
import Cookies from "js-cookie/src/js.cookie";
import en from "../static/locales/en/common.json";
import es from "../static/locales/es/common.json";
import { hotjar } from "react-hotjar";
import Router from "next/router";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      hasToConsent: false,
      hasLoaded: false
    };
    this.toggleLang = this.toggleLang.bind(this);
    this.consentToCookies = this.consentToCookies.bind(this);
    this.checkForConsent = this.checkForConsent.bind(this);
  }

  static async getInitialProps({ router }) {
    if (router.pathname.includes("/en")) {
      return { locale: en };
    } else {
      return { locale: es };
    }
  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500)); //1500
  }

  toggleLang(lang) {
    let language = lang === "en" ? en : es;
    this.setState({
      locale: language
    });
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

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout
          locale={this.state.locale}
          checkForConsent={this.checkForConsent}
          consentToCookies={this.consentToCookies}
          hasToConsent={this.state.hasToConsent}
          hasLoaded={this.state.hasLoaded}
          toggleLang={this.toggleLang}
        >
          <Component
            locale={this.state.locale}
            {...pageProps}
            lang={this.state.locale.lang}
          />
        </Layout>
      </ThemeProvider>
    );
  }
}
