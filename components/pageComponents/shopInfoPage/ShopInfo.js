import Link from 'next/link';

import styled from 'styled-components';

import { PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

import Maps from '../../Map';

import classes from './ShopInfo.module.css';
import Image from 'next/image';

const CardWrapper = styled(Card)`
  .ant-card-head-wrapper {
    font-size: 20px;
    font-weight: 700;
  }
`;

const ShopInfo = (props) => {
  return (
    <>
      <div className={classes.shop_img}>
        <Image src={props.shopImg} alt={props.shopName} layout='fill' objectFit='cover' />
      </div>
      <div className={`site-card-border-less-wrapper ${classes.shop_info}`}>
        <CardWrapper size='small' title={props.shopName} bordered={false}>
          <h3>매장 정보</h3>

          <Link href={`tel:${props.shopTel}`}>
            <a className={classes.shop_info_item}>
              <PhoneOutlined />
              <span href={`tel:${props.shopTel}`}>{props.shopTel}</span>
            </a>
          </Link>

          <div className={classes.shop_info_item}>
            <ClockCircleOutlined />
            <span>{props.shopTime}</span>
          </div>

          <Maps />
        </CardWrapper>
      </div>
    </>
  );
};

export default ShopInfo;
