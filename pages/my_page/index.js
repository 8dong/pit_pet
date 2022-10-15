import { Card } from 'antd';

const MyPage = () => {
  return (
    <div className='page-section'>
      <div className='site-card-border-less-wrapper'>
        <Card
          title='User Name'
          bordered={false}
          style={{
            width: '100%'
          }}
        >
          <p>User Description</p>
        </Card>
      </div>
    </div>
  );
};

export default MyPage;
