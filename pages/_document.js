import Document, { Html, Head, NextScript, Main } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>PIT PET 애견 미용 스타일 가이드</title>
          <meta name='keywords' content='pet, pet style, 애견 스타일, 애견 미용' />
          <meta name='description' content='트렌디한 애견 미용 스타일 가이드북' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=0'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
