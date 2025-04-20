import User from '@/models/user.model';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
import { User as UserType } from 'next-auth';
import { FlattenMaps } from 'mongoose';

// Define the MongoDB User document type
interface MongoDBUser extends FlattenMaps<any> {
  _id: unknown;
  __v: number;
  name: string;
  email: string;
  password: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, request): Promise<UserType | null> {
        if (credentials === null) return null;
        console.log('credentials', credentials);
        try {
          const user = await User.findOne({
            email: credentials?.email,
          }).lean();

          if (user) {
            const mongoUser = user as MongoDBUser;

            const isMatch = await bcrypt.compare(
              credentials.password as string,
              mongoUser.password
            );

            if (isMatch) {
              // Return a NextAuth User object
              return {
                email: mongoUser.email,
                name: mongoUser.name,
              };
            } else {
              throw new Error('Email or Password is not correct');
            }
          } else {
            throw new Error('User not found');
          }
        } catch (e) {
          console.error(e);
          throw new Error(e as string);
          // return null;
        }
      },
    }),
  ],
});
