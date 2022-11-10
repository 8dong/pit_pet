import Image from 'next/image';
import { useSession } from 'next-auth/react';

import { Card } from 'antd';

const { Meta } = Card;

import classes from './MyInfo.module.css';

const MyInfo = () => {
  const { data: session } = useSession();

  return (
    <div className='site-card-border-less-wrapper'>
      <Card style={{ width: '90%', margin: '0 auto' }}>
        <div className={classes.user_image}>
          <Image
            src={session.user.image}
            alt={`${session.user.name} profile image`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <Meta title={session.user.name} description={session.user.email} />
      </Card>
    </div>
  );
};

export default MyInfo;
