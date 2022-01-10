import mongoose from "mongoose";
const Schema = mongoose.Schema
const schema = new mongoose.Schema(
  {
    MaBaoCao:{
      type: String,
      required: true,
      unique: true,
    },
    Title: {
      type: String,
      required: true,
    },
    Content: {
      type: String,
      required: true,
    },
    attachment: String,
    Diem:{
        type:Number,
    },
    status:{
      type:String,
    },
    idCouncil:{
      type: Schema.Types.ObjectId,
      ref: 'Council',
      required: true,
    }
    
  },
  { timestamps: true }
);

export const ReportModel = mongoose.model("Report", schema);
