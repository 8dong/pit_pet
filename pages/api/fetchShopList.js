import { MongoClient } from 'mongodb';

async function handle(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();
  const shopListCollection = database.collection('shop_list');
  const shopList = await shopListCollection.find().toArray();

  res.status(200).json(shopList);
  client.close();
}

export default handle;
