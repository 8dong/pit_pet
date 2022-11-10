import { useState, useRef, useEffect, useCallback } from 'react';

import Link from 'next/link';
import Image from 'next/image';

import styled from 'styled-components';

import { Card } from 'antd';
const { Meta } = Card;

import { StyleSkeleton } from '../../skeletonUI/StyleListSkeleton';

import classes from './StyleList.module.css';

const CardWrapper = styled(Card)`
  border-radius: 5%;
  overflow: hidden;
`;

const MetaWrapper = styled(Meta)`
  justify-content: center;
  font-weight: 700;
  font-size: 17px;
`;

const StyleList = (props) => {
  const [styleList, setStyleList] = useState(props.styleInfoList);
  const [fetchDataNum, setFetchDataNum] = useState(2);
  const [isFetchedData, setIsFetchedData] = useState(false);
  const [isDone, setIsDone] = useState(false);

  const fetchData = useCallback(async (dataNum) => {
    const res = await fetch('/api/fetchStyleList', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ dataNum })
    });

    const data = await res.json();

    setStyleList((prevList) => [...prevList, ...data.styleList]);

    if (data.done) {
      setIsDone(true);
    } else {
      setIsDone(false);
    }

    setIsFetchedData(true);
  }, []);

  useEffect(() => {
    if (!isDone) {
      fetchData(fetchDataNum);
    }
  }, [fetchDataNum, isDone, fetchData]);

  const loadMore = useCallback(() => {
    setFetchDataNum((prev) => prev + 1);
  }, []);

  const observerTargetEl = useRef();

  useEffect(() => {
    if (isFetchedData) {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            loadMore();
          }
        },
        { threshold: 0.5 }
      );
      observer.observe(observerTargetEl.current);
    }
  }, [isFetchedData, loadMore]);

  return (
    <ul className={classes.style_book_list}>
      {styleList.map((styleInfo) => (
        <li key={styleInfo.id} className={classes.style_book_item}>
          <Link href={`/shop_info/${styleInfo.shopId}`}>
            <CardWrapper
              hoverable
              cover={
                <div className={classes.style_image}>
                  <Image
                    sizes='400px'
                    alt={styleInfo.styleDesc}
                    src={styleInfo.styleImg}
                    layout='fill'
                    objectFit='cover'
                    placeholder='empty'
                  />
                </div>
              }
            >
              <MetaWrapper description={styleInfo.styleDesc} />
            </CardWrapper>
          </Link>
        </li>
      ))}
      {isDone ? <></> : <StyleSkeleton ref={observerTargetEl} />}
    </ul>
  );
};

export default StyleList;
