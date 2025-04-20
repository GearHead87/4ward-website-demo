import User from '@/models/user.model';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcrypt';
export const { handlers, signIn, signOut, auth } = NextAuth({
  session: { strategy: 'jwt' },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials === null) return null;
        try {
          const user = await User.findOne({
            email: credentials?.email,
          }).lean();

          if (user) {
            const isMatch = await bcrypt.compare(
              credentials.password as string,
              user.password as string
            );

            if (isMatch) {
              return user;
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
