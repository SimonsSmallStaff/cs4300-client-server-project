import mongoose, { Schema, Document, Model } from "mongoose";

interface IItem extends Document {
  name: string;
  image?: string;
  condition: string;
  status: string;
  location: string;
  description: string;
  saved?: boolean;
}

const itemSchema = new Schema<IItem>({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  condition: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  saved: {
    type: Boolean
  }
});

const Item: Model<IItem> = mongoose.models.IItem || mongoose.model<IItem>("IItem", itemSchema);
export default Item;
