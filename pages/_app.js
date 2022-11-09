import Router from 'next/router';
import { SessionProvider } from 'next-auth/react';

import Header from '../components/Layout/Header';

import HomePageSkeleton from '../components/skeletonUI/HomePageSkeleton';
import StyleListSkeleton from '../components/skeletonUI/StyleListSkeleton';
import LoadingSpinner from '../components/skeletonUI/Loading';

import '../styles/globals.css';
import { useState } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const [pageContent, setPageContent] = useState(<Component {...pageProps} />);

  Router.events.on('routeChangeStart', (url) => {
    if (url === '/') {
      setPageContent(<HomePageSkeleton />);
    } else if (url === '/style_book') {
      setPageContent(<StyleListSkeleton />);
    } else {
      setPageContent(<LoadingSpinner />);
    }
  });

  Router.events.on('routeChangeComplete', () => {
    setPageContent(<Component {...pageProps} />);
  });

  return (
    <SessionProvider session={session}>
      <Header>
        <title>PIT PET 애견 미용 스타일 가이드</title>
        <meta name='keywords' content='pet, pet style, 애견 스타일, 애견 미용' />
        <meta name='description' content='트렌디한 애견 미용 스타일 가이드북' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scaleable=no'
        />
        <meta name='theme-color' content='#ffffff' />
      </Header>
      <div className='page-section'>{pageContent}</div>
    </SessionProvider>
  );
}

export default MyApp;
