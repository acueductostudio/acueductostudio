import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import theme from "../styles/theme";

const invertTheme = ({ fg, bg }) => ({
  fg: bg,
  bg: fg
});

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }
  
  changeTheme(){
    
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}
