import { ProjectModel } from "../models/ProjectModel.js";

export const getProject = async (req, res) => {
  try {
    // const pro = new ProjectModel({
    //     TenDeTai: "Hệ thống phát hiện thông tin bạo lực trong video",
    //     LinhVuc: "Trí tuệ nhân tạo",
    //     Capdo: "Khoa",
    //     TinhTrang: "Chờ duyệt",
    //     Mota: "Sản phẩm được vào vòng chung khảo giải thưởng Nhân tài Đất Việt",
    //     NgayBD: new Date(),
    //     // NgayKT: NgayBD.getYear()+1,
    // });
    // pro.save();
    const project = await ProjectModel.find();
    console.log("posts", project);
    res.status(200).json(project);
  } catch (err) {  
    res.status(500).json({ error: err });
  }
};
