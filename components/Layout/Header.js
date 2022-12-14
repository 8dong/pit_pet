import { LoginOutlined, LogoutOutlined } from '@ant-design/icons';
import { PageHeader, Tabs, Button } from 'antd';

import { useSession, signOut } from 'next-auth/react';

import { useState } from 'react';
import { useRouter } from 'next/router';

const Header = () => {
  const { data: session } = useSession();

  const router = useRouter();

  const [pageKey, setPageKey] = useState('0');

  const backButtonClickHandler = () => {
    router.back();
  };

  const onChange = (pageKey) => {
    const mappedPage = {
      1: '/',
      2: '/style_book',
      3: '/my_page'
    };

    router.push(mappedPage[pageKey]);
    setPageKey(pageKey);
  };

  return (
    <header className='header-section'>
      <PageHeader
        size='large'
        className='site-page-header'
        onBack={backButtonClickHandler}
        title='PIT PET'
        subTitle='애견 미용 스타일북'
      />
      <Tabs
        defaultActiveKey={pageKey}
        onChange={onChange}
        centered={true}
        items={[
          {
            label: `매장 리스트`,
            key: '1'
          },
          {
            label: `스타일 북`,
            key: '2'
          },
          {
            label: `나의 메뉴`,
            key: '3'
          }
        ]}
      />

      <Button
        onClick={() => {
          if (!session) router.push('/auth_form');
          else signOut({ callbackUrl: '/' });
        }}
        className='auth-btn'
        type='primary'
        icon={session ? <LogoutOutlined /> : <LoginOutlined />}
      >
        {session ? 'Log out' : 'Log in'}
      </Button>
    </header>
  );
};

export default Header;
