import  mongoose  from "mongoose";
const Schema = mongoose.Schema
const schema = new mongoose.Schema(
    {
       MaHD:{
           type: String,
           required: true,
           unique: true,
       },
       idChuTich: {
        type: Schema.Types.ObjectId,
        ref: "Info",
        required: true,
      },
      idThuKy:{
        type: Schema.Types.ObjectId,
        ref: "Info",
        required: true,
      },
      idPhanBien1:{
        type: Schema.Types.ObjectId,
        ref: "Info",
        required: true,
      },
      idPhanBien2:{
        type: Schema.Types.ObjectId,
        ref: "Info",
        required: true,
      },
      UyVien: [
        {
          type: Schema.Types.ObjectId,
          ref: "Info",
        },
      ],
      NgayNghiemThu:{
        type: Date,
        required: true,
      },
      status:{
        type: String,
        required: true,
      },
      idDeTai:{
        type: Schema.Types.ObjectId,
        ref: 'Project',
        required: true,
      }
    },
    { timestamps: true }
);

export const CouncilModel = mongoose.model("Council", schema);

