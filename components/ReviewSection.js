import { Avatar, Comment, Input } from 'antd';
import React, { useState } from 'react';
import { useSession } from 'next-auth/react';

import ReivewEditor from './ReviewEidtor';

const ReviewSection = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) return;

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
    }, 500);

    fetch('/api/insertReview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_name: props.author,
        user_image: props.image,
        text: value,
        shop_id: props.shopId
      })
    })
      .then((res) => res.json())
      .then((data) => {
        props.onChangeCommentsList(data.reviewList.shop_review_list);
      });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <Comment
      avatar={<Avatar src={props.image} alt={props.author} />}
      content={
        <ReivewEditor
          onChange={handleChange}
          onSubmit={handleSubmit}
          submitting={submitting}
          value={value}
        />
      }
    />
  );
};

export default ReviewSection;
