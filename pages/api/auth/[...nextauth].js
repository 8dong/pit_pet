import NextAuth from 'next-auth';
import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import NaverProvider from 'next-auth/providers/naver';

export const authOptions = {
  // adapter: MongoDBAdapter(clientPromise),
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID,
      clientSecret: process.env.NAVER_CLIENT_SECRET
    })
  ],
  secret: process.env.SECRET,
  session: {
    strategy: 'jwt'
  }
  // callbacks: {
  //   async signIn({ user, account, profile }) {
  //     console.log(user, account, profile);
  //     console.log('signIn Callback');

  //     return true;
  //   },

  //   async jwt({ token, user, account, profile, isNewUser }) {
  //     try {
  //       console.log(token, user, account, profile, isNewUser);
  //       console.log('jwt callback');
  //       return token;
  //     } catch (err) {
  //       consoole.log(err);
  //     }
  //   },

  //   async session({ session, token, user }) {
  //     console.log(session, token, user);
  //     console.log('session callback');
  //     return session;
  //   }
  // }
};

export default NextAuth(authOptions);
