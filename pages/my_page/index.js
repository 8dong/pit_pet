import { unstable_getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/[...nextauth]';

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
