import { useState, useEffect } from 'react';
import Link from 'next/link';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const ShopList = () => {
  const [shopList, setShopList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLike, setIsLike] = useState(false);

  const likeButtonHandler = (shopId) => {
    return (event) => {
      setIsLike((prevState) => !prevState);
    };
  };

  useEffect(() => {
    setLoading(true);
    fetch('/api/fetchShopList')
      .then((res) => res.json())
      .then((data) => {
        setShopList(data);
      });
    setLoading(false);
  }, []);

  return (
    <ul>
      {shopList.map((shopinfo) => (
        <li key={shopinfo._id} className='shop-item'>
          <Link href={`/shop_info/${shopinfo._id}`}>
            <a>
              <Card
                style={{
                  width: 'auto',
                  marginTop: 16,
                  marginRight: 'auto',
                  marginLeft: 'auto'
                }}
                loading={loading}
              >
                <Meta
                  avatar={<Avatar src='https://joeschmoe.io/api/v1/random' />}
                  title={shopinfo.name}
                  description={shopinfo.tel}
                />
              </Card>
            </a>
          </Link>
          <button className={`like-btn`} onClick={likeButtonHandler(shopinfo.id)}>
            <HeartOutlined className={`like-svg ${isLike ? 'active' : ''}`} />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
