import { ExtendModel } from "../models/ExtendModel.js";

export const getExtend = async (req, res) => {
  try {
    await ExtendModel.find()
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
    .exec()
      .then((extend) => {
      
        res.status(200).json(extend);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createExtend = async (req, res) => {
  try {
    const  dataExtend  = req.body;
    const Extend = new ExtendModel(dataExtend);

    await Extend.save().then((extend) => {
      ExtendModel.findById(extend._id)
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
        .exec()
        .then((extend) => {
           
          res.status(200).json(extend);
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updateExtend = async (req, res, next) => {
  try {
    const updateExtend = req.body;
    await ExtendModel.findOneAndUpdate(
      { _id: updateExtend._id },
      updateExtend,
      { new: true }
    )
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
    .exec()
    .then((extend) => {
       
      res.status(200).json(extend);
    });
  } catch (err) {
    res.status(500).json({ error: err });
    next();
  }
};
