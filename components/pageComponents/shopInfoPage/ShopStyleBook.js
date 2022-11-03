import { useState } from 'react';

import { Button, Card, Popover } from 'antd';
const { Meta } = Card;

import classes from './ShopStyleBook.module.css';
import Image from 'next/image';

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
            <Popover key={style.id} content={style.desc} trigger='hover'>
              <li className={classes.style_book_item}>
                <div className={classes.style_image}>
                  <Image
                    alt={style.desc}
                    src={style.img}
                    layout='fill'
                    objectFit='contain'
                    placeholder='empty'
                  />
                </div>
              </li>
            </Popover>
          ))}
        </ul>
      )}
    </>
  );
};

export default ShopStyleBook;
