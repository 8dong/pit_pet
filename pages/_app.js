import { SessionProvider } from 'next-auth/react';

import Header from '../components/Layout/Header';

import '../styles/globals.css';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Header />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
