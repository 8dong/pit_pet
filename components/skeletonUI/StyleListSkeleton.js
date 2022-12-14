import { forwardRef } from 'react';

import { Card, Skeleton } from 'antd';

import styled from 'styled-components';

import classes from './StyleListSkeleton.module.css';

const SkeletonImage = styled(Skeleton.Image)`
  width: 100%;
  position: relative;
  height: 200px;

  &.ant-skeleton {
    width: 100%;
    height: 100%;
  }

  &.ant-skeleton-image {
    width: 100%;
    height: 100%;
  }
`;

const CardWrapper = styled(Card)`
  &.ant-card-bordered {
    border-radius: 5%;
    overflow: hidden;
  }

  &.ant-card-cover {
    over-flow: hidden;
  }
`;

const listData = Array.from({
  length: 2
}).map((_, i) => ({
  title: `loaded content ${i}`
}));

const StyleListSkeleton = () => {
  return (
    <ul className={classes.list}>
      {listData.map((item) => {
        return (
          <li className={classes.item} key={item.title}>
            <CardWrapper
              cover={
                <div className={classes.image}>
                  <SkeletonImage active />
                </div>
              }
            >
              <Skeleton paragraph={{ rows: 0 }} />
            </CardWrapper>
          </li>
        );
      })}
    </ul>
  );
};

export const StyleSkeleton = forwardRef((_, ref) => {
  return (
    <div className={classes.item} ref={ref}>
      <CardWrapper
        cover={
          <div className={classes.image}>
            <SkeletonImage active />
          </div>
        }
      >
        <Skeleton paragraph={{ rows: 0 }} />
      </CardWrapper>
    </div>
  );
});

StyleSkeleton.displayName = 'StyleSkeleton';

export default StyleListSkeleton;
