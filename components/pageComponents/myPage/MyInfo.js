import { Avatar, Card } from 'antd';
const { Meta } = Card;

const MyInfo = (props) => {
  return (
    <div className='site-card-border-less-wrapper'>
      <Card style={{ width: '90%', margin: '0 auto' }}>
        <Meta
          avatar={<Avatar src={props.userImage} />}
          title={props.userName}
          description={props.userEmail}
        />
      </Card>
    </div>
  );
};

export default MyInfo;
