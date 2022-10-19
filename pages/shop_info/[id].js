import { Space, Spin } from 'antd';
import { PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Button } from 'antd';
const { Meta } = Card;

import { MongoClient, ObjectId } from 'mongodb';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import ReviewSection from '../../components/ReviewSection';
import ReviewList from '../../components/ReviewList';
import Maps from '../../components/Map';

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();
  const shopCollection = database.collection('shop_list');

  const shopData = await shopCollection.find().toArray();

  const shopInfoList = shopData.map((shop) => {
    const styleList = shop.shop_style_list.map((styleInfo) => ({
      id: ObjectId(styleInfo._id).toString(),
      desc: styleInfo.style_desc,
      img: styleInfo.style_img
    }));

    const reviewList = shop.shop_review_list.map((reviewInfo) => ({
      id: ObjectId(reviewInfo._id).toString(),
      user_name: reviewInfo.user_name,
      user_image: reviewInfo.user_image,
      text: reviewInfo.text
    }));

    return {
      id: ObjectId(shop._id).toString(),
      name: shop.shop_name,
      tel: shop.shop_tel,
      img: shop.shop_img,
      time: shop.shop_operating_hours,
      styleList,
      reviewList: reviewList
    };
  });

  client.close();

  return {
    props: {
      shopInfoList
    }
  };
}

const ShopPage = (props) => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const shopInfo = props.shopInfoList.find((shopInfo) => shopInfo.id === id);

  const [styleListShow, setStyleListShow] = useState(false);
  const [comments, setComments] = useState(shopInfo.reviewList);

  const styleListButton = styleListShow ? '닫기' : '펼치기';

  const showStyleListHandler = () => {
    setStyleListShow((prevState) => !prevState);
  };

  const { data: session } = useSession();

  const inviteLoginHandler = () => {
    router.push('/auth_form');
  };

  const changeCommentsList = (comments) => {
    setComments(comments);
  };

  const reviewSection = session ? (
    <ReviewSection
      onChangeCommentsList={changeCommentsList}
      author={session.user.name}
      image={session.user.image}
      shopId={id}
    />
  ) : (
    <Button onClick={inviteLoginHandler}>리뷰 작성은 로그인이 필요한 서비스입니다.</Button>
  );

  return (
    <div className='page-section'>
      <div className='shop-img'>
        <img src={shopInfo.img} alt={shopInfo.img} />
      </div>
      <div className='site-card-border-less-wrapper shop-info'>
        <Card
          size='small'
          title={shopInfo.name}
          bordered={false}
          style={{
            width: '100%'
          }}
        >
          <h3>Information</h3>

          <Link href={'tel:053-0000-0000'}>
            <a className='tel-section'>
              <PhoneOutlined />
              <p>{shopInfo.tel}</p>
            </a>
          </Link>

          <div className='time-section'>
            <ClockCircleOutlined />
            <p>{shopInfo.time}</p>
          </div>

          <Maps />
        </Card>
      </div>
      <div className='shop-section'>
        <div className='button-section'>
          <Button
            onClick={showStyleListHandler}
            type='primary'
          >{`스타일 북 ${styleListButton}`}</Button>
        </div>
        {styleListShow && (
          <ul className='shop-style-list'>
            {shopInfo.styleList.map((style) => (
              <li key={style.id}>
                <Card
                  hoverable
                  style={{
                    width: 150
                  }}
                  cover={<img alt={style.desc} src={style.img} />}
                >
                  <Meta style={{ fontSize: 13 }} description={style.desc} />
                </Card>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='review-section'>
        <ReviewList comments={comments} />
        {reviewSection}
      </div>
    </div>
  );
};

export default ShopPage;
