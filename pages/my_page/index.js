import Link from 'next/link';
import { useRouter } from 'next/router';

import { useSession } from 'next-auth/react';
import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

import { Card } from 'antd';
import { LoginOutlined } from '@ant-design/icons';
import { Button } from 'antd';

export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(context.req, context.res, authOptions);

  return {
    props: {
      userInfo: session
    }
  };
}

const MyPage = (props) => {
  const router = useRouter();

  const { data: session } = useSession();

  if (session) {
    return (
      <div className='page-section'>
        <div className='site-card-border-less-wrapper'>
          <Card
            title={props.userInfo.user.name}
            bordered={false}
            style={{
              width: '100%'
            }}
          >
            <p>{props.userInfo.user.email}</p>
          </Card>
        </div>
      </div>
    );
  } else {
    return (
      <div className='denied-section'>
        <p>로그인이 필요한 서비스입니다.</p>
        <Link href='/auth_form'>
          <Button
            onClick={() => {
              router.push('/auth-form');
            }}
            type='primary'
            icon={<LoginOutlined />}
          >
            로그인 피이지로 이동
          </Button>
        </Link>
      </div>
    );
  }
};

export default MyPage;
