import { InfoModel } from "../models/InfoModel.js";
import { ProjectModel } from "../models/ProjectModel.js";
import { TeamModel } from "../models/TeamModel.js";

export const getProject = async (req, res) => {
  try {
    await ProjectModel.find()
      .populate({
        path: "idTeam",
        populate: {
          path: "idChuNhiem",
        },
      })
      .populate({
        path: "idTeam",
        populate: {
          path: "ThanhVien",
        },
      })
      .exec()
      .then((project) => {
        res.status(200).json(project);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createProject = async (req, res) => {
  try {
    const { dataNhom, dataDeTai } = req.body;
    const team = new TeamModel(dataNhom);
    let project;
    await team.save().then((team) => {
      project = new ProjectModel({ ...dataDeTai, idTeam: team._id });
    });

    await project.save().then((project) => {
      ProjectModel.findById(project._id)
        .populate({
          path: "idTeam",
          populate: {
            path: "idChuNhiem",
          },
        })
        .populate({
          path: "idTeam",
          populate: {
            path: "ThanhVien",
          },
        })
        .exec()
        .then((project) => {
          console.log(project);
          res.status(200).json(project);
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
