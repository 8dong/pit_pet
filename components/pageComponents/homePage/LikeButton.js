import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

import { Button, Tooltip } from 'antd';
import { HeartTwoTone } from '@ant-design/icons';

import classes from './LikeButton.module.css';

const LikeButton = () => {
  const { data: session } = useSession();

  const [isLike, setIsLike] = useState(false);

  const likeColor = !isLike || session;

  const likeButtonHandler = (shopId) => {};

  return (
    <div className={classes.like_btn}>
      <Tooltip title={`${session ? 'Like' : '로그인이 필요한 서비스입니다.'}`}>
        <Button
          disabled={session ? false : true}
          block={true}
          type={'text'}
          icon={<HeartTwoTone twoToneColor='#B2B2B2' onClick={likeButtonHandler(shopInfo.id)} />}
        />
      </Tooltip>
    </div>
  );
};

export default LikeButton;
