import Link from 'next/link';

import { Card } from 'antd';
const { Meta } = Card;

import classes from './StyleList.module.css';

const StyleList = (props) => {
  return (
    <ul className={classes.style_book_list}>
      {props.styleInfoList.map((styleInfo) => (
        <li key={styleInfo.id} className={classes.style_book_item}>
          <Link href={`/shop_info/${styleInfo.shopId}`}>
            <a>
              <Card hoverable cover={<img alt={styleInfo.styleDesc} src={styleInfo.styleImg} />}>
                <Meta description={styleInfo.styleDesc} />
              </Card>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StyleList;
