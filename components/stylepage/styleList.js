import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Card } from 'antd';
const { Meta } = Card;

const StyleList = () => {
  useEffect(() => {
    fetch('/api/fetchStyleList')
      .then((res) => res.json())
      .then((data) => {
        setStlyeList(data);
      });
  }, []);

  const [styleList, setStlyeList] = useState([]);

  return (
    <ul>
      {styleList.map((style) => (
        <li key={style._id}>
          <Link href={`/shop_info/${style.key}`}>
            <a>
              <Card
                hoverable
                style={{
                  width: 200,
                  marginBottom: 30,
                  marginRight: 'auto',
                  marginLeft: 'auto'
                }}
                cover={<img alt={style.desc} src={style.img} />}
              >
                <Meta title={style.name} description={style.desc} />
              </Card>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default StyleList;
