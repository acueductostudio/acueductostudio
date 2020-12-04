import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import GlobalStyles from "../styles/global";
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <GlobalStyles />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/assets/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="mask-icon"
            href="/assets/favicon/safari-pinned-tab.svg"
            color="#1740bf"
          />
          <link rel="shortcut icon" href="/assets/favicon/favicon.ico" />
          <meta name="msapplication-TileColor" content="#1740bf" />
          <meta
            name="msapplication-config"
            content="/assets/favicon/browserconfig.xml"
          />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#F4F4F4" />
          <meta name="geo.region" content="CDMX" />
          <meta name="geo.placename" content="Acueducto" />
        </Head>
        <body>
          <span id="dum"></span>
          <div id="revealer">
            <div id="bordered" />
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 100 88"
            >
              <path
                fill="#F4F4F4"
                d="M.4 60.9l.9-4.8C3 49 7.8 44.8 14.5 42.3c6.1-2.2 12.5-3 18.9-3.5 7.4-.6 14.8-.6 22.1-2.4l2.3-.7c4-1.6 4.8-3.9 2.9-7.8a10.1 10.1 0 0 0-6.8-5.1 26.8 26.8 0 0 0-13.2-.3 11.1 11.1 0 0 0-9.2 9.2l-.3 1.2H3A30 30 0 0 1 15.7 8.4a41.4 41.4 0 0 1 17.9-6.6 86.1 86.1 0 0 1 32 .9 32.9 32.9 0 0 1 18.1 9.9 27.1 27.1 0 0 1 6.7 18.2c.2 7.7.1 15.4.1 23.1l.1 2.1c.3 3.6 2.1 5.5 5.7 6l3.3.3v25c-6.5-.3-13 .7-19.4-.8a23 23 0 0 1-15.4-11.8c-.2.1-.4.1-.5.3a29.8 29.8 0 0 1-21.2 11.7c-9.1 1.2-18.1.7-26.8-2.4-8-2.9-13.7-7.9-15.3-16.7l-.5-2.9-.1-3.8zm61.1-13.3L58.3 49c-4.5 1.8-9.4 1.8-14.1 2.5-3.6.6-7.2 1.4-10.6 2.6-3 1.1-4 3.8-3.5 6.9.4 2.7 2.1 4.3 5.4 4.8 6.5 1 12.8 0 18.6-3.1 6.3-3.3 8.4-7.9 7.4-15.1z"
              />
            </svg>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
