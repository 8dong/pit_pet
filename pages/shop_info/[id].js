import { Space, Spin } from 'antd';
import { PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { Button } from 'antd';
const { Meta } = Card;

import { MongoClient, ObjectId } from 'mongodb';

import { useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

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

    return {
      id: ObjectId(shop._id).toString(),
      name: shop.shop_name,
      tel: shop.shop_tel,
      img: shop.shop_img,
      time: shop.shop_operating_hours,
      styleList
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
  const [styleListShow, setStyleListShow] = useState(false);

  const showButtonTexgt = styleListShow ? '닫기' : '펼치기';

  const showStyleListHandler = () => {
    setStyleListShow((prevState) => !prevState);
  };

  const router = useRouter();
  const query = router.query;
  const id = query.id;

  const shopInfo = props.shopInfoList.find((shopInfo) => shopInfo.id === id);

  const renderSection = shopInfo ? (
    <>
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
        </Card>
      </div>
      <div className='shop-section'>
        <div className='button-section'>
          <Button
            onClick={showStyleListHandler}
            type='primary'
          >{`스타일 북 ${showButtonTexgt}`}</Button>
          <Button type='primary'>{`리뷰`}</Button>
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
    </>
  ) : (
    <Space>
      <Spin size='large' />
    </Space>
  );

  return <div className='page-section'>{renderSection}</div>;
};

export default ShopPage;
