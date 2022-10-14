import { useState } from 'react';
import { useRouter } from 'next/router';
import { PageHeader, Tabs } from 'antd';

const Header = () => {
  const [pageKey, setPageKey] = useState('1');

  const router = useRouter();

  const backButtonClickHandler = () => {
    router.back();
  };

  const onChange = (key) => {
    if (key === '1') {
      router.push('/');
      setPageKey('1');
    }
    if (key === '2') {
      router.push('/style_book');
      setPageKey('2');
    }
    if (key === '3') {
      router.push('/');
      setPageKey('3');
    }
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
    </header>
  );
};

export default Header;
