import { useState } from 'react';

import { Button } from 'antd';
import { Card } from 'antd';
const { Meta } = Card;

import classes from './ShopStyleBook.module.css';

const ShopStyleBook = (props) => {
  const [styleListShow, setStyleListShow] = useState(false);

  const showStyleListHandler = () => {
    setStyleListShow((prevState) => !prevState);
  };

  const styleListButton = styleListShow ? '닫기' : '펼치기';

  return (
    <>
      <div className={classes.style_book_button}>
        <Button
          onClick={showStyleListHandler}
          type='primary'
        >{`스타일 북 ${styleListButton}`}</Button>
      </div>

      {styleListShow && (
        <ul className={classes.style_book_list}>
          {props.styleList.map((style) => (
            <li key={style.id} className={classes.style_book_item}>
              <Card
                hoverable
                style={{
                  width: 150
                }}
                cover={<img alt={style.desc} src={style.img} />}
              >
                <Meta style={{ fontSize: 13 }} description={style.desc} />
              </Card>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShopStyleBook;
