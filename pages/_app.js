import React from "react";
import App, { Container } from "next/app";
import { ThemeProvider } from "styled-components";
import Layout from "../components/layout";
import theme from "../styles/theme";
import darkTheme from "../styles/dark";

export default class MyApp extends App {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };
  }


  // Esto solo vale la pena si vamos a implementar más cookies,
  // habrá que tripear al respecto
  //
  // componentWillMount(){
  //   this.setState({
  //     isDarkMode: this.getLocalStorage()
  //   });
  // }

  // getLocalStorage() {
  //   if (typeof window !== "undefined") {
  //     console.log("we are running on the client");
  //     let stored = localStorage.getItem("isDarkMode");
  //     if (!stored){
  //       return false
  //     }
  //     return stored === "true"? true : false;
  //   } else {
  //     console.log("we are running on the server");
  //     return false;
  //   }
  // }

  // Y la función change theme debe incluír:
  // localStorage.setItem("isDarkMode", !this.state.isDarkMode);


  // static async getInitialProps({ Component, router, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }
  //   return { pageProps };
  // }

  changeTheme(){
    this.setState({
      isDarkMode: !this.state.isDarkMode
    });
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={this.state.isDarkMode? darkTheme : theme}>
          <Layout changeTheme={this.changeTheme.bind(this)}>
            <Component {...pageProps}/>
          </Layout>
        </ThemeProvider>
      </Container>
    );
  }
}
