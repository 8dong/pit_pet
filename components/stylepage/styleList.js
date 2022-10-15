import Link from 'next/link';
import { Card } from 'antd';
const { Meta } = Card;

const StyleList = (props) => {
  return (
    <ul>
      {props.styleInfoList.map((styleInfo) => (
        <li key={styleInfo.id}>
          <Link href={`/shop_info/${styleInfo.shopId}`}>
            <a className='style-item'>
              <Card
                hoverable
                style={{
                  width: 300,
                  marginBottom: 10,
                  marginRight: 10,
                  marginLeft: 10
                }}
                cover={<img alt={styleInfo.styleDesc} src={styleInfo.styleImg} />}
              >
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
