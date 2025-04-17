import { getDatabase } from './db';

export async function findUserByEmail(email: string) {
  const db = await getDatabase();
  return await db.collection('users').findOne({ email });
}

export async function createUser(user: { username: string; email: string; hashedPassword: string }) {
  const db = await getDatabase();
  const result = await db.collection('users').insertOne(user);
  return result.ops?.[0] || { ...user, _id: result.insertedId };
}