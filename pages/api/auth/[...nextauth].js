import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET
};

export default NextAuth(authOptions);
