import { Skeleton, Card } from 'antd';
import React from 'react';

import classes from './HomePageSkeleton.module.css';

const listData = Array.from({
  length: 4
}).map((_, i) => ({
  title: `loaded content ${i}`
}));

const HomePageSkeleton = () => {
  return (
    <ul className={classes.list}>
      {listData.map((item) => (
        <li key={item.title} className={classes.item}>
          <Card
            bodyStyle={{
              display: 'flex',
              justifyContent: 'flex-start',
              padding: 10
            }}
          >
            <Skeleton
              active
              avatar={{ size: 70 }}
              title={false}
              paragraph={{
                rows: 2,
                width: [120, 120],
                className: classes.phara
              }}
            />
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default HomePageSkeleton;
