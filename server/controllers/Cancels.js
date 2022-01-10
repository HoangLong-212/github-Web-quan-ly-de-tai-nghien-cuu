import { CancelModel } from "../models/CancelModel.js";

export const getCancel = async (req, res) => {
  try {
    await CancelModel.find()
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
      .then((cancel) => {
       
        res.status(200).json(cancel);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const createCancel = async (req, res) => {
  try {
    const  dataCancel = req.body;
    console.log("dataCancel",dataCancel)
    const Cancel = new CancelModel(dataCancel);

    await Cancel.save().then((cancel) => {
        CancelModel.findById(cancel._id)
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
        .then((cancel) => {
          
          res.status(200).json(cancel);
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const updateCancel = async (req, res, next) => {
  try {
    const updateCancel = req.body;
    await CancelModel.findOneAndUpdate(
      { _id: updateCancel._id },
      updateCancel,
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
    .then((cancel) => {
      
      res.status(200).json(cancel);
    });
  } catch (err) {
    res.status(500).json({ error: err });
    next();
  }
};
