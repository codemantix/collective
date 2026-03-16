import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="16x16" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="32x32" href="/favicon.ico" />
        <link rel="icon" type="image/x-icon" sizes="48x48" href="/favicon.ico" />

        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" sizes="180x180" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/codelogo.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/codelogo.png" />

        {/* Android/Chrome Icons */}
        <link rel="icon" type="image/png" sizes="192x192" href="/LogoF.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/LogoF.png" />

        {/* Microsoft Tiles */}
        <meta name="msapplication-TileImage" content="/LogoF.png" />
        <meta name="msapplication-TileColor" content="#1E3A8A" />

        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#1E3A8A" />
        <meta name="google-site-verification" content="KuU1paDyoNySsri82WGYzOqC2eMIDAdh1l6ruvBQhzs" />
      </Head>
      <body suppressHydrationWarning={true} className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
