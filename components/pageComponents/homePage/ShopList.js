import Link from 'next/link';

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
              <Card>
                <Meta
                  avatar={<Avatar src={shopInfo.img} />}
                  title={shopInfo.name}
                  description={shopInfo.tel}
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
