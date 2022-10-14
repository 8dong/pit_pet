import { Space, Spin } from 'antd';
import { PhoneOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Card } from 'antd';

const ShopPage = () => {
  const [shopInfo, setShopInfo] = useState();

  const router = useRouter();
  const query = router.query;
  const id = query.id;

  useEffect(() => {
    fetch('/api/fetchShopList')
      .then((res) => res.json())
      .then((data) => {
        const shopInfo = data.find((item) => item._id === id);
        setShopInfo(shopInfo);
      });
  }, [id]);

  const renderSection = shopInfo ? (
    <>
      <div className='shop-img'>
        <img src={shopInfo.img} alt={shopInfo.style.name} />
      </div>
      <div className='site-card-border-less-wrapper shop-info'>
        <Card
          size='large'
          title={shopInfo.name}
          bordered={false}
          style={{
            width: 300
          }}
        >
          <Link href={'tel:053-0000-0000'}>
            <a className='tel-section'>
              <PhoneOutlined />
              <p>{shopInfo.tel}</p>
            </a>
          </Link>

          <p className='time-section'>{shopInfo.time}</p>
        </Card>
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
