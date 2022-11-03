import Link from 'next/link';

import { Card } from 'antd';
const { Meta } = Card;

import classes from './StyleList.module.css';
import Image from 'next/image';

const StyleList = (props) => {
  return (
    <ul className={classes.style_book_list}>
      {props.styleInfoList.map((styleInfo) => (
        <li key={styleInfo.id} className={classes.style_book_item}>
          <Link href={`/shop_info/${styleInfo.shopId}`}>
            <a>
              <Card
                hoverable
                cover={
                  <div className={classes.style_image}>
                    <Image
                      alt={styleInfo.styleDesc}
                      src={styleInfo.styleImg}
                      layout='fill'
                      objectFit='contain'
                      placeholder='empty'
                    />
                  </div>
                }
              >
                <Meta
                  description={styleInfo.styleDesc}
                  style={{ fontWeight: 700, fontSize: 17, justifyContent: 'center' }}
                />
              </Card>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StyleList;
