import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    MaTeam: {
      type: String,
      required: true,
      unique: true,
    },
    TenTeam: {
      type: String,
      required: true,
    },
    ChuNhiem:{
        type: Object
    }

  },
  { timestamps: true }
);

export const TeamModel = mongoose.model("Team", schema);
