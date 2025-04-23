import mongoose, { Schema, model, models } from 'mongoose';

interface IUser {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = models.User || model<IUser>('User', userSchema);

export default User;
