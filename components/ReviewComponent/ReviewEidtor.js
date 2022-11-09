import { useState } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

import { Button, Form, Input } from 'antd';
const { TextArea } = Input;

const ReivewEditor = (props) => {
  const [comments, setComments] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const { data: session } = useSession();
  const { name: userName, image: userImage } = session.user;

  const shopId = useRouter().query;

  const onChangeCommentsHandler = (event) => {
    setComments(event.target.value);
  };

  const onSumbitHandler = () => {
    if (comments.trim().length < 5) {
      window.alert('5글자 이상 작성해주세요.');
      setComments('');
      return;
    }

    sendReviewComments();
  };

  const sendReviewComments = async () => {
    setSubmitting(true);
    props.onLoadingCommentsList(true);

    const response = await fetch('/api/insertReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: userName,
        user_image: userImage,
        text: comments,
        shop_id: shopId
      })
    });

    try {
      if (!response.ok) {
        throw new Error('Send Request Error!');
      }
      const responseData = await response.json();
      props.onChangeCommentsList(responseData.reviewList.shop_review_list);
    } catch (error) {
      window.alert(error.message);
    }

    setSubmitting(false);
    props.onLoadingCommentsList(false);
    setComments('');
  };

  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChangeCommentsHandler} value={comments} />
      </Form.Item>
      <Form.Item>
        <Button htmlType='submit' loading={submitting} onClick={onSumbitHandler} type='primary'>
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

export default ReivewEditor;
