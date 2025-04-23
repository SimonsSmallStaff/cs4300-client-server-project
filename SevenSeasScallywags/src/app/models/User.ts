import mongoose, { Schema, model, models } from 'mongoose';

interface IUser {
  username: string;
  password: string;
  college: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  college: {type: String, required: false },
});

const User = models.User || model<IUser>('User', userSchema);

export default User;
