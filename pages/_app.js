import React from "react";
import App from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import theme from "../styles/theme";
import Cookies from "js-cookie/src/js.cookie";
import en from "../static/locales/en.json";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false,
      hasToConsent: false,
      hasLoaded: false
    };
    this.changeTheme = this.changeTheme.bind(this);
    this.consentToCookies = this.consentToCookies.bind(this);
    this.checkForConsent = this.checkForConsent.bind(this);

  }

  authenticate() {
    return new Promise(resolve => setTimeout(resolve, 1500)); //1500
  }

//añadir el should component update para que no cambie a menos que cambie el locale

  componentDidMount() {
    this.authenticate().then(() => {
      const bordered = document.getElementById("bordered");
      const logo = document.getElementById("logo");
      const revealer = document.getElementById("revealer");
      if (bordered) {
        setTimeout(() => {
          // transition out
          bordered.classList.add('hidden'); //hide after //TODO: clean bordered
          logo.style.opacity = "0";
          bordered.style.transform = "scale(1)";
          bordered.style.borderWidth = "2px";
          setTimeout(() => {
            revealer.style.opacity = "0";
            revealer.style.pointerEvents = "none";
            this.setState({ hasLoaded: true }, () => console.log(this.state.hasLoaded));
          }, 500);

          setTimeout(() => {
            // remove from DOM
            bordered.remove();
            revealer.remove();
            logo.remove();
          }, 3000);
        }, 500);
      }
    })

    // Check if cookie message has been closed before
    // TODO: add expiry date?
    // this.checkForConsent();

  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.state.hasToConsent !== nextState.hasToConsent) {
  //     console.log("false")
  //     return false;
  //   }
  //   console.log("true")
  //   return true;
  // }

  checkForConsent(){
    var _C = Cookies.get("showCookieMessage");
    if (_C === undefined) {
      console.log("cookies: hasn't consented before");
      this.setState({ hasToConsent: true });
    } else if (_C === 'false') {
      console.log("cookies: has consented before");
      this.setState({ hasToConsent: false });
    }
  }

  consentToCookies() {
    console.log("Remove the cookie message");
    Cookies.set('showCookieMessage', 'false');
    this.setState({ hasToConsent: false });
  }

  changeTheme() {
    console.log("change language")
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Layout
          locale={en}
          changeTheme={this.changeTheme}
          checkForConsent={this.checkForConsent}
          consentToCookies={this.consentToCookies}
          hasToConsent={this.state.hasToConsent}
          hasLoaded={this.state.hasLoaded}
        >
          <Component locale={en} {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
