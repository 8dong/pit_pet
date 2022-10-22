import Link from 'next/link';
import { useSession } from 'next-auth/react';

import MyInfo from './MyInfo';
import DeniedMyInfo from './DeniedMyInfo';

const MyPageContent = () => {
  const { data: session } = useSession();

  const myInfoContent = session ? (
    <MyInfo userName={session.user.name} userEmail={session.user.email} />
  ) : (
    <DeniedMyInfo />
  );

  return myInfoContent;
};

export default MyPageContent;
