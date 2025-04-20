import mongoose from 'mongoose';
import { env } from './env';
const connectionOptions: mongoose.ConnectOptions = {
  dbName: env.DATABASE_NAME,
};

export async function dbConnect() {
  try {
    let conn = await mongoose.connect(String(env.DATABASE_URL), connectionOptions);
    return conn;
  } catch (e) {
    throw new Error(e as string);
  }
}
