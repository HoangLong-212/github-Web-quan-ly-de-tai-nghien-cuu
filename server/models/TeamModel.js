import mongoose from "mongoose";
const Schema = mongoose.Schema;
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
    idChuNhiem: {
      type: Schema.Types.ObjectId,
      ref: "Info",
      required: true,
    },
  

    ThanhVien: [
      {
        type: Schema.Types.ObjectId,
        ref: "Info",
        
      },
    ],
  },
  { timestamps: true }
);

export const TeamModel = mongoose.model("Team", schema);
