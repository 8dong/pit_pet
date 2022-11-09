import { Avatar, List } from 'antd';

const ReviewList = (props) => {
  return (
    <List
      loading={props.isLoading}
      dataSource={props.commentsList}
      header={`${props.commentsList.length} ${props.commentsList.length > 1 ? 'replies' : 'reply'}`}
      itemLayout='horizontal'
      renderItem={(item) => {
        return (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={<Avatar src={item.user_image} />}
              title={<p>{item.user_name}</p>}
              description={item.text}
            />
          </List.Item>
        );
      }}
    />
  );
};

export default ReviewList;
