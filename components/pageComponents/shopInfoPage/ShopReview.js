import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import { Button } from 'antd';

import ReviewSection from '../../ReviewComponent/ReviewSection';
import ReviewList from '../../ReviewComponent/ReviewList';

import classes from './ShopReview.module.css';

const ShopReview = (props) => {
  const router = useRouter();

  const { data: session } = useSession();

  const [comments, setComments] = useState(props.reviewList);

  const changeCommentsList = (comments) => {
    setComments(comments);
  };

  const inviteLoginHandler = () => {
    router.push('/auth_form');
  };

  const reviewSection = session ? (
    <ReviewSection
      onChangeCommentsList={changeCommentsList}
      author={session.user.name}
      image={session.user.image}
      shopId={router.query.id}
    />
  ) : (
    <Button onClick={inviteLoginHandler}>리뷰 작성은 로그인이 필요한 서비스입니다.</Button>
  );

  return (
    <div className={classes.review_section}>
      <ReviewList comments={comments} />
      {reviewSection}
    </div>
  );
};

export default ShopReview;
