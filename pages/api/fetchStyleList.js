import { MongoClient, ObjectId } from 'mongodb';

const handle = async (req, res) => {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();

  const shopCollection = database.collection('shop_list');

  const listLength = (await shopCollection.find().toArray()).length;

  const shopData = await shopCollection.find().skip(req.body.dataNum).limit(1).toArray();

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

  if (listLength - 1 === req.body.dataNum) {
    res.status(200).json({ styleList: styleInfoList, done: true });
  } else {
    res.status(200).json({ styleList: styleInfoList, done: false });
  }
};

export default handle;
