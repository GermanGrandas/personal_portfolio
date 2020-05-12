import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
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
      <html lang="es">
        <Head>
          <meta name="description" content="test_page" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex,nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="manifest" href="/static/manifest.json" />

          {/*Aqui tambien van los links*/}
          <link
            href="https://fonts.googleapis.com/css2?family=Inconsolata&family=Roboto&family=Playfair+Display&display=swap"
            rel="stylesheet"
          />
          {this.props.styles}

          {/* Manifest */}

          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="hacker-test" />
          <meta name="apple-mobile-web-app-title" content="hacker-test" />
          <meta name="theme-color" content="#f60" />
          <meta name="msapplication-navbutton-color" content="#f60" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="black-translucent"
          />
          <meta name="msapplication-starturl" content="/" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>
          {`
            body {
              font-family: sans-serif;
            }
          `}
        </style>
      </html>
    );
  }
}
