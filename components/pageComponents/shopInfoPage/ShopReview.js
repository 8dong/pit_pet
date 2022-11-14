import { useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Button, Avatar, Comment } from 'antd';

import ReviewList from './ReviewComponent/ReviewList';
import ReivewEditor from './ReviewComponent/ReviewEidtor';

import classes from './ShopReview.module.css';

const ShopReview = (props) => {
  const router = useRouter();

  const { data: session } = useSession();

  const [commentsList, setCommentsList] = useState(props.reviewList);
  const [isLoading, setIsLoading] = useState(false);

  const inviteLoginHandler = useCallback(() => {
    router.push('/auth_form');
  }, [router]);

  const changeCommentsList = useCallback((comments) => {
    setCommentsList(comments);
  }, []);

  const loadingCommentsList = useCallback((isLoading) => {
    setIsLoading(isLoading);
  }, []);

  const reviewSection = session ? (
    <Comment
      avatar={<Avatar src={session.user.image} alt={session.user.name} />}
      content={
        <ReivewEditor
          onChangeCommentsList={changeCommentsList}
          onLoadingCommentsList={loadingCommentsList}
        />
      }
    />
  ) : (
    <Button onClick={inviteLoginHandler}>리뷰 작성은 로그인이 필요한 서비스입니다.</Button>
  );

  return (
    <div className={classes.review_section}>
      <ReviewList commentsList={commentsList} isLoading={isLoading} />
      {reviewSection}
    </div>
  );
};

export default ShopReview;
