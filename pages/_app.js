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
      hasToConsent: true
    };
  }

//añadir el should component update para que no cambie a menos que cambie el locale

  componentDidMount() {
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
          changeTheme={this.changeTheme.bind(this)}
          consentToCookies={this.consentToCookies.bind(this)}
          hasToConsent={this.state.hasToConsent}
        >
          <Component locale={en} {...pageProps} />
        </Layout>
      </ThemeProvider>
    );
  }
}
