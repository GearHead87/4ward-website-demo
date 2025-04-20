import { UserType } from '@/lib/types';
import User from '@/models/user.model';

export async function createUser(user: UserType) {
  try {
    await User.create(user);
  } catch (e) {
    throw new Error(e as string);
  }
}

export async function getUserByEmail(email: string) {
  const user = await User.findOne({ email: email }).select('-password').lean();
  return user;
}
