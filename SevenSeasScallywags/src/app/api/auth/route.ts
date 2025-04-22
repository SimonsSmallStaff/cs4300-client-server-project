// src/app/api/auth/route.ts

import { NextRequest, NextResponse } from 'next/server';
import connectMongo from '@/lib/mongodb';
import User from '@/app/models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET!;

export async function POST(req: NextRequest) {
  await connectMongo();

  try {
    const { username, password } = await req.json();

    if (!username || !password) {
      return NextResponse.json({ message: 'Missing username or password' }, { status: 400 });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (isMatch) {
        // 🎯 Generate a token
        const token = jwt.sign(
          { id: existingUser._id, username: existingUser.username },
          JWT_SECRET,
          { expiresIn: '7d' }
        );

        return NextResponse.json({ message: 'Login successful', token }, { status: 200 });
      } else {
        return NextResponse.json({ message: 'Invalid password' }, { status: 401 });
      }
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new User({ username, password: hashedPassword });
      await newUser.save();

      // 🎯 After registration, also issue a token
      const token = jwt.sign(
        { id: newUser._id, username: newUser.username },
        JWT_SECRET,
        { expiresIn: '7d' }
      );

      return NextResponse.json({ message: 'User registered successfully', token }, { status: 201 });
    }
  } catch (error) {
    console.error('Auth Error:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
