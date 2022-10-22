import Link from 'next/link';
import { useRouter } from 'next/router';

import { Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import classes from './DeniedMyInfo.module.css';

const DeniedMyInfo = () => {
  const router = useRouter();

  return (
    <div className={classes.denied_section}>
      <h3>로그인이 필요한 서비스입니다.</h3>
      <Link href='/auth_form'>
        <Button
          onClick={() => {
            router.push('/auth_form');
          }}
          type='primary'
          icon={<LoginOutlined />}
        >
          로그인 페이지로 이동
        </Button>
      </Link>
    </div>
  );
};

export default DeniedMyInfo;
