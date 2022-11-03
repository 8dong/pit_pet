import { Avatar, Card } from 'antd';
import Image from 'next/image';
const { Meta } = Card;

import classes from './MyInfo.module.css';

const MyInfo = (props) => {
  return (
    <div className='site-card-border-less-wrapper'>
      <Card style={{ width: '90%', margin: '0 auto' }}>
        <div className={classes.user_image}>
          <Image
            src={props.userImage}
            alt={`${props.userName} profile image`}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <Meta title={props.userName} description={props.userEmail} />
      </Card>
    </div>
  );
};

export default MyInfo;
