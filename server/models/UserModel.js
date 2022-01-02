import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    /* MaTK: {
            type: String,
            required: true,
            unique: true, 
        }, */
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
      enum: ['Khoa', 'Giang Vien','Admin'],
    },
  },
  { timestamps: true }
);

export const UserModel = mongoose.model("User", schema);
