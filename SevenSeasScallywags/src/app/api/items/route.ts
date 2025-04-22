import { NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import { MongoClient } from 'mongodb';
import mongoose from 'mongoose';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, category, condition, status, location, description, image } = body;

    await connectMongo();
    const db = mongoose.connection.db;
    const collection = db.collection("items");

    const existingItem = await collection.findOne({ name, location });

    if (existingItem) {
      return NextResponse.json({ message: "Item already exists" }, { status: 409 });
    }

    const result = await collection.insertOne({
      name,
      category,
      condition,
      status,
      location,
      description,
      image,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "Item added", id: result.insertedId }, { status: 201 });
  } catch (error) {
    console.error("Error adding item:", error);
    return NextResponse.json({ message: "Error adding item" }, { status: 500 });
  }
}
