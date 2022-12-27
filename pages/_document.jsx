import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Serif:opsz,wght@8..144,100&display=swap" rel="stylesheet"/>
        <link href="https://api.mapbox.com/uploads/v1/1454024795582?start=cijywvxlm004rtikohhqf99jv&limit=100>;" rel="next"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}