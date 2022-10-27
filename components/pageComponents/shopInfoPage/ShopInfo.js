import Link from 'next/link';

import { PhoneOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Card } from 'antd';

import Maps from '../../Map';

import classes from './ShopInfo.module.css';

const ShopInfo = (props) => {
  return (
    <>
      <div className={classes.shop_img}>
        <img src={props.shopImg} alt={props.shopName} />
      </div>
      <div className={`site-card-border-less-wrapper ${classes.shop_info}`}>
        <Card
          size='small'
          title={props.shopName}
          bordered={false}
          headStyle={{
            fontSize: '20px',
            fontWeight: 'bold'
          }}
        >
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
        </Card>
      </div>
    </>
  );
};

export default ShopInfo;
