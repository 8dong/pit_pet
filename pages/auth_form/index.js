import { Button } from 'antd';

import { signIn } from 'next-auth/react';

const AuthForm = () => {
  const authList = [
    {
      name: 'Naver',
      signInHandler: () => signIn('naver')
    }
    // {
    //   name: 'Google',
    //   signInHandler: () => signIn('google', { callbackUrl: '/' })
    // },
    // {
    //   name: 'Kakao',
    //   signInHandler: () => {
    //     signIn('kakao', { callbackUrl: '/' });
    //   }
    // }
  ];

  return (
    <div className='auth-section page-section'>
      <h3>로그인할 소셜 계정을 선택해주세요</h3>
      <ul className='auth-list'>
        {authList.map((authItem) => (
          <li key={authItem.name}>
            <Button
              style={{
                border: 'none'
              }}
              type='primary'
              size='large'
              onClick={authItem.signInHandler}
            >
              {authItem.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AuthForm;
