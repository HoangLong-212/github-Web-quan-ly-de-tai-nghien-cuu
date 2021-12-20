import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    MaDeTai:{
      type: String,
      required: true,
      unique: true,
    },
    TenDeTai: {
      type: String,
      required: true,
    },
    LinhVuc: {
      type: String,
      required: true,
      enum: [
        "Mạng máy tính",
        "Công nghệ Thông tin",
        "Trí tuệ nhân tạo",
        "An toàn thông tin",
      ],
    },
    Capdo: {
      type: String,
      require: true,
      enum: ["Khoa", "Trường"],
    },
    TinhTrang: {
      type: String,
      require: true,
      enum: [
        "Chờ Khoa duyệt",
        "Chờ Trường duyệt",
        "Đang tiến hành",
        "Không thông qua",
        "Đã gia hạn",
        "Đã hủy",
        "Đã nghiệm thu",
      ],
    },
    Diem: {
      type: String,
      require: true,
    },
    Mota: {
      type: String,
      require: true,
    },
    NgayBD: {
      type: Date,
      //required: true,
    },
    NgayKT: {
      type: Date,
      //required: true,
    },
    
  },
  { timestamps: true }
);

export const ProjectModel = mongoose.model("Project", schema);
