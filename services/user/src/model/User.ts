import mongoose, { Document, Schema } from "mongoose";

export interface IUser extends Document {
  name: string;
  email: string;
  image: string;
  instagram: string;
  facebook: string;
  linkedin: string;
  bio: string;
}

const schema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
      required: true,
    },
    instagram: String,
    facebook: String,
    linkedin: String,
    bio: String,
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model<IUser>("User", schema);

export default User;
