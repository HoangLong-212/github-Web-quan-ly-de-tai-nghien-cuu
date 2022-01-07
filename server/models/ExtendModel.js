import  mongoose  from "mongoose";
const Schema = mongoose.Schema
const schema = new mongoose.Schema(
    {
       MaDon:{
           type: String,
           required: true,
           unique: true,
       },
       title: {
        type: String,
        required: true,
      },
      content: {
        type: String,
        required: true,
      },
      status:{
        type: String,
        required: true,
      },
      // author: {
      //   type: Schema.Types.ObjectId,
      //   ref: "Info",
      //   required: true,   
      // },
      GiaHan: {
        type: Number,
        required: true,
      },
      attachment: String,
      idDeTai:{
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
      }
    },
    { timestamps: true }
);

export const ExtendModel = mongoose.model("Extend", schema);

