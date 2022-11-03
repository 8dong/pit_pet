import { SessionProvider } from 'next-auth/react';
import Script from 'next/script';

import Header from '../components/Layout/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Script
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`}
        strategy='beforeInteractive'
      />
      <Header></Header>
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
