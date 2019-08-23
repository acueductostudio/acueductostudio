import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=0"
          />
          <link rel="apple-touch-icon" sizes="180x180" href="../static/assets/favicon/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="../static/assets/favicon/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="../static/assets/favicon/favicon-16x16.png"/>
          <link rel="manifest" href="../static/assets/favicon/site.webmanifest"/>
          <link rel="mask-icon" href="../static/assets/favicon/safari-pinned-tab.svg" color="#1740bf"/>
          <link rel="shortcut icon" href="../static/assets/favicon/favicon.ico"/>
          <meta name="msapplication-TileColor" content="#1740bf"/>
          <meta name="msapplication-config" content="../static/assets/favicon/browserconfig.xml"/>
          <meta name="theme-color" content="#ffffff"/>
          <GlobalStyles />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
