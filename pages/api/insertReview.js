import { MongoClient, ObjectId } from 'mongodb';

async function handle(req, res) {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const db = client.db();
  const shopCollection = db.collection('shop_list');

  await shopCollection.updateOne(
    { _id: ObjectId(req.body.shop_id) },
    {
      $push: {
        shop_review_list: {
          _id: ObjectId(),
          user_name: req.body.user_name,
          user_image: req.body.user_image,
          text: req.body.text
        }
      }
    }
  );

  const reviewList = await shopCollection.findOne(
    { _id: ObjectId(req.body.shop_id) },
    { shop_review_list: true }
  );

  res.status(201).json({ reviewList });

  client.close();
}

export default handle;
