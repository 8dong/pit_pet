import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

import { Card } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';

import MyPageContent from '../../components/pageComponents/myPage/MyPageContent';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      userInfo: session
    }
  };
}

const MyPage = () => {
  return (
    <div className='page-section'>
      <MyPageContent />
    </div>
  );
};

export default MyPage;
