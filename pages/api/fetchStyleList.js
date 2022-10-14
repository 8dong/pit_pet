import { MongoClient, ObjectId } from 'mongodb';

async function handle(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();
  const collection = database.collection('shop_list');
  const data = await collection.find({}, { style: 1 }).toArray();

  const list = data.map((item) => {
    return {
      key: ObjectId(item._id).toString(),
      name: item.style.name,
      img: item.style.img,
      desc: item.style.desc,
      url: item.style.url
    };
  });

  res.status(200).json(list);
  client.close();
}
export default handle;
