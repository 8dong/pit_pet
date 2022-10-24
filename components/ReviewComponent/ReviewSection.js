import { Avatar, Comment } from 'antd';
import { useState, useEffect } from 'react';

import ReivewEditor from './ReviewEidtor';

const ReviewSection = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    // if (value.trim.length < 5) {
    //   window.alert('5글자 이상 작성해주세요.');
    //   setValue('');
    //   setSubmitting(false);
    //   return;
    // }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setValue('');
    }, 500);
  };

  useEffect(() => {
    if (!submitting) return;

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
        setSubmitting(false);
      });
  }, [submitting, value, props]);

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
