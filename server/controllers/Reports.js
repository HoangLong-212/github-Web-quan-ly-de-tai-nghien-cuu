import { CouncilModel } from "../models/Council.js";
import { ReportModel } from "../models/ReportModel.js";

export const getReport = async (req, res) => {
  try {
    await ReportModel.find()
      .populate({
        path: "idCouncil",
        populate: {
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
        },
      })
      .populate({
        path: "idCouncil",
        populate: {
          path: "idThuKy",
        },
      })
      .exec()
      .then((Report) => {
        console.log("get", Report);
        res.status(200).json(Report);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createReport = async (req, res) => {
  try {
    const dataReport = req.body;
    const Report = new ReportModel(dataReport);
    await Report.save().then((Report) => {
      ReportModel.findById(Report._id)
        .populate({
          path: "idCouncil",
          populate: {
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
          },
        })
        .populate({
          path: "idCouncil",
          populate: {
            path: "idThuKy",
          },
        })
        .exec()
        .then((Report) => {
          console.log("create", Report);
          res.status(200).json(Report);
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateReport = async (req, res, next) => {
  try {
    const updateReport = req.body;
    await ReportModel.findOneAndUpdate(
      { _id: updateReport._id },
      updateReport,
      { new: true }
    )
    .populate({
      path: "idCouncil",
      populate: {
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
      },
    })
    .populate({
      path: "idCouncil",
      populate: {
        path: "idThuKy",
      },
    })
    .exec()
    .then((Report) => {
     
      res.status(200).json(Report);
    });
  } catch (err) {
    res.status(500).json({ error: err });
    next();
  }
};
