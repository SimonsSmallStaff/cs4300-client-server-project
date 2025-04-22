import mongoose from 'mongoose';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI
//const MONGODB_URI = 'mongodb+srv://user:password_1234@cluster0.xt7epl2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
//const MONGODB_URI = 'mongodb+srv://auser:apassword_1234@cluster0.dvd0bir.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let cached = (global as any).mongoose || { conn: null, promise: null };

async function connectMongo() {
  console.log('Connecting to MongoDB...');	
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then(mongoose => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectMongo;
