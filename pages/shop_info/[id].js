import { MongoClient, ObjectId } from 'mongodb';
import { useRouter } from 'next/router';

import ShopInfo from '../../components/pageComponents/shopInfoPage/ShopInfo';
import ShopStyleBook from '../../components/pageComponents/shopInfoPage/ShopStyleBook';
import ShopReview from '../../components/pageComponents/shopInfoPage/ShopReview';

export async function getServerSideProps() {
  const client = await MongoClient.connect(
    'mongodb+srv://hyde981114:rla980926@cluster0.v9xjy6e.mongodb.net/pitpet?retryWrites=true&w=majority'
  );

  const database = client.db();
  const shopCollection = database.collection('shop_list');

  const shopData = await shopCollection.find().toArray();

  const shopInfoList = shopData.map((shop) => {
    const styleList = shop.shop_style_list.map((styleInfo) => ({
      id: ObjectId(styleInfo._id).toString(),
      desc: styleInfo.style_desc,
      img: styleInfo.style_img
    }));

    const reviewList = shop.shop_review_list.map((reviewInfo) => ({
      id: ObjectId(reviewInfo._id).toString(),
      user_name: reviewInfo.user_name,
      user_image: reviewInfo.user_image,
      text: reviewInfo.text
    }));

    return {
      id: ObjectId(shop._id).toString(),
      name: shop.shop_name,
      tel: shop.shop_tel,
      img: shop.shop_img,
      time: shop.shop_operating_hours,
      styleList,
      reviewList: reviewList
    };
  });

  client.close();

  return {
    props: {
      shopInfoList
    }
  };
}

const ShopPage = (props) => {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const shopInfo = props.shopInfoList.find((shopInfo) => shopInfo.id === id);
  console.log(shopInfo);

  return (
    <div className='page-section'>
      <ShopInfo
        shopImg={shopInfo.img}
        shopName={shopInfo.name}
        shopTel={shopInfo.tel}
        shopTime={shopInfo.time}
      />
      <ShopStyleBook styleList={shopInfo.styleList} />
      <ShopReview reviewList={shopInfo.reviewList} />
    </div>
  );
};

export default ShopPage;
