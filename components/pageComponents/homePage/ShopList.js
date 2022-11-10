import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

import { Card } from 'antd';
const { Meta } = Card;

import classes from './ShopList.module.css';

const CardWrapper = styled(Card)`
  .ant-card-body {
    display: flex;
    justify-content: flex-start;
    padding: 10px;
  }
`;

const ShopList = (props) => {
  return (
    <ul className={classes.shop_info_list}>
      {props.shopInfoList.map((shopInfo) => (
        <li key={shopInfo.id} className={classes.shop_info_item}>
          <Link href={`/shop_info/${shopInfo.id}`}>
            <CardWrapper>
              <div className={classes.shop_image}>
                <Image
                  src={shopInfo.img}
                  alt={shopInfo.name}
                  sizes='100px'
                  layout='fill'
                  objectFit='cover'
                />
              </div>
              <Meta
                title={shopInfo.name}
                description={shopInfo.tel}
                className={classes.shop_info_meta}
              />
            </CardWrapper>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ShopList;
