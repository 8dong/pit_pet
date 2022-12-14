import { signIn } from 'next-auth/react';

import { Button } from 'antd';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const authList = [
    {
      name: 'Naver',
      signInHandler: () => signIn('naver', { callbackUrl: '/' })
    },
    {
      name: 'KaKao',
      signInHandler: () => signIn('kakao', { callbackUrl: '/' })
    },
    {
      name: 'Google',
      signInHandler: () => signIn('google', { callbackUrl: '/' })
    }
  ];

  return (
    <div className={classes.auth_section}>
      <h3>로그인할 소셜 계정을 선택해주세요</h3>
      <ul className={classes.auth_list}>
        {authList.map((authItem) => (
          <li key={authItem.name}>
            <Button type='primary' size='large' onClick={authItem.signInHandler}>
              {authItem.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthForm;
