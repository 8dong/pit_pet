import Link from 'next/link';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;

const ShopList = (props) => {
  return (
    <ul>
      {props.shopInfoList.map((shopInfo) => (
        <li key={shopInfo.id} className='shop-item'>
          <Link href={`/shop_info/${shopInfo.id}`}>
            <a>
              <Card
                style={{
                  maxWidth: 300,
                  marginTop: 16,
                  marginRight: 'auto',
                  marginLeft: 'auto'
                }}
              >
                <Meta
                  avatar={<Avatar src={shopInfo.img} />}
                  title={shopInfo.name}
                  description={shopInfo.tel}
                />
              </Card>
            </a>
          </Link>
          {/* <button className={`like-btn`}>
            <HeartOutlined className={`like-svg`} />
          </button> */}
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
