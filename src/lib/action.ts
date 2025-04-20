'use server';
import { revalidatePath } from 'next/cache';
import { signIn, signOut } from './auth';

export const socialLogin = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' });
  revalidatePath('/');
};

export const logout = async () => {
  await signOut({ redirectTo: '/' });
  revalidatePath('/');
};

export async function credentialLogin(formData: any) {
  console.log('formData', formData);
  try {
    const response = await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirect: false,
    });
    revalidatePath('/');
    return response;
  } catch (err) {
    throw err;
  }
}
