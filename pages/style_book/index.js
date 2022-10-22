import StyleList from '../../components/pageComponents/styleBookPage/styleList';
import { MongoClient, ObjectId } from 'mongodb';

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();

  const shopCollection = database.collection('shop_list');

  const shopData = await shopCollection.find().toArray();

  const styleInfoList = [];

  shopData.forEach((shopInfo) => {
    shopInfo.shop_style_list.forEach((styleInfo) => {
      styleInfoList.push({
        shopId: ObjectId(shopInfo._id).toString(),
        id: ObjectId(styleInfo._id).toString(),
        shopName: shopInfo.shop_name,
        styleDesc: styleInfo.style_desc,
        styleImg: styleInfo.style_img
      });
    });
  });

  client.close();

  return {
    props: {
      styleInfoList
    }
  };
}

const stylePage = (props) => {
  return (
    <div className='page-section'>
      <StyleList styleInfoList={props.styleInfoList} />
    </div>
  );
};

export default stylePage;
