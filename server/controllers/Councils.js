import { CouncilModel } from "../models/Council.js";
import { ProjectModel } from "../models/ProjectModel.js";

export const getCouncil = async (req, res) => {
  try {
    await CouncilModel.find()
      .populate({
        path: "idChuTich",
      })
      .populate({
        path: "idThuKy",
      })
      .populate({
        path: "idPhanBien1",
      })
      .populate({
        path: "idPhanBien2",
      })
      .populate({
        path: "UyVien",
      })
      .populate({
        path: "idDeTai",
        populate: {
          path: "idTeam",
          populate: {
            path: "idChuNhiem",
            populate: {
              path: "facultyId",
            },
          },
        },
      })
      .populate({
        path: "idDeTai",
        populate: {
          path: "idTeam",
          populate: {
            path: "ThanhVien",
          },
        },
      })
      .exec()
      .then((Council) => {
       
        res.status(200).json(Council);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createCouncil = async (req, res) => {
  try {
    const dataCouncil = req.body;
  

    const Council = new CouncilModel(dataCouncil);
    await Council.save().then((Council) => {
      CouncilModel.findById(Council._id)
        .populate({
          path: "idChuTich",
        })
        .populate({
          path: "idThuKy",
        })
        .populate({
          path: "idPhanBien1",
        })
        .populate({
          path: "idPhanBien2",
        })
        .populate({
          path: "UyVien",
        })
        .populate({
          path: "idDeTai",
          populate: {
            path: "idTeam",
            populate: {
              path: "idChuNhiem",
              populate: {
                path: "facultyId",
              },
            },
          },
        })
        .populate({
          path: "idDeTai",
          populate: {
            path: "idTeam",
            populate: {
              path: "ThanhVien",
            },
          },
        })
        .exec()
        .then((Council) => {
         
          res.status(200).json(Council);
        });

    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateCouncil = async (req, res, next) => {
  try {
    const updateCouncil = req.body;
    await CouncilModel.findOneAndUpdate(
      { _id: updateCouncil._id },
      updateCouncil,
      { new: true }
    )
      .populate({
        path: "idChuTich",
      })
      .populate({
        path: "idThuKy",
      })
      .populate({
        path: "idPhanBien1",
      })
      .populate({
        path: "idPhanBien2",
      })
      .populate({
        path: "UyVien",
      })
      .populate({
        path: "idDeTai",
        populate: {
          path: "idTeam",
          populate: {
            path: "idChuNhiem",
            populate: {
              path: "facultyId",
            },
          },
        },
      })
      .populate({
        path: "idDeTai",
        populate: {
          path: "idTeam",
          populate: {
            path: "ThanhVien",
          },
        },
      })
      .exec()
      .then((Council) => {
        res.status(200).json(Council);
      });
  } catch (err) {
    res.status(500).json({ error: err });
    next();
  }
};
