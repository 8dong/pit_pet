import { useSession } from 'next-auth/react';

import MyInfo from './MyInfo';
import DeniedMyInfo from './DeniedMyInfo';

const MyPageContent = () => {
  const { data: session } = useSession();

  const myInfoContent = session ? <MyInfo /> : <DeniedMyInfo />;

  return myInfoContent;
};

export default MyPageContent;
