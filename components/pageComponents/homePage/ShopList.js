import Link from 'next/link';
import Image from 'next/image';

import { Avatar, Card } from 'antd';
const { Meta } = Card;

import classes from './ShopList.module.css';

const ShopList = (props) => {
  return (
    <ul className={classes.shop_info_list}>
      {props.shopInfoList.map((shopInfo) => (
        <li key={shopInfo.id} className={classes.shop_info_item}>
          <Link href={`/shop_info/${shopInfo.id}`}>
            <a>
              <Card
                bodyStyle={{
                  display: 'flex',
                  justifyContent: 'flex-start',
                  padding: 10
                }}
              >
                <div className={classes.shop_image}>
                  <Image src={shopInfo.img} alt={shopInfo.name} layout='fill' objectFit='cover' />
                </div>
                <Meta
                  title={shopInfo.name}
                  description={shopInfo.tel}
                  className={classes.shop_info_meta}
                />
              </Card>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
