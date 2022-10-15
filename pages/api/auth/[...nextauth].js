import NextAuth from 'next-auth';
import InstagramProvider from 'next-auth/providers/instagram';
// import KakaoProvider from 'next-auth/providers/kakao';
import NaverProvider from 'next-auth/providers/naver';

export default NextAuth({
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET
    // }),
    // KakaoProvider({
    //   clientId: process.env.KAKAO_CLIENT_ID,
    //   clientSecret: process.env.KAKAO_CLIENT_SECRET
    // }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    }),
    InstagramProvider({
      clientId: process.env.INSTAGRAM_CLIENT_ID,
      clientSecret: process.env.INSTAGRAM_CLIENT_SECRET
    })
  ]
  // pages: {
  //   signIn: '/auth-form'
  // }
});
