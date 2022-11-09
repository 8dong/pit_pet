import { MongoClient, ObjectId } from 'mongodb';

import ShopList from '../components/pageComponents/homePage/ShopList';

export async function getStaticProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();

  const shopCollection = database.collection('shop_list');

  const shopData = await shopCollection.find().toArray();

  const shopInfoList = shopData.map((shop) => ({
    id: ObjectId(shop._id).toString(),
    name: shop.shop_name,
    tel: shop.shop_tel,
    img: shop.shop_img
  }));

  client.close();

  return {
    props: {
      shopInfoList
    }
  };
}

export default function Home(props) {
  return <ShopList shopInfoList={props.shopInfoList} />;
}
