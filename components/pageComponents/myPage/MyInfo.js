import { Card } from 'antd';

const MyInfo = (props) => {
  return (
    <div className='site-card-border-less-wrapper'>
      <Card
        title={props.userName}
        bordered={false}
        style={{
          width: '100%'
        }}
      >
        <p>Eamil: {props.userEmail}</p>
      </Card>
    </div>
  );
};

export default MyInfo;
