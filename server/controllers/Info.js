import { InfoModel } from "../models/InfoModel.js";
import { UserModel } from "../models/UserModel.js";

export const getInfo = async (req, res) => {
  try {
    await InfoModel.find()
      .populate({
        path: "facultyId",
      })
      .exec()
      .then((info) => {
        res.status(200).json(info);
      });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createInfo = async (req, res) => {
  try {
    const newInfo = req.body;
    console.log("[INFO]", newInfo);
    const Info = new InfoModel(newInfo);
    // const Info = new InfoModel (newInfo);
    await Info.save().then((Info) => {
      InfoModel.findById(Info._id)
        // .populate({
        //   path: "username",
        // })
        .populate({
          path: "facultyId",
        })
        .exec()
        .then((Info) => {
          console.log("Create", Info);
          res.status(200).json(Info);
        });
    });
  } catch (err) {
    res.status(500).json({ error: err });
    // next();
  }
};

export const updateInfo = async (req, res) => {
  try {
    const updateInfo = req.body;
    console.log("[UpdateInfo]", updateInfo);
    const info = await InfoModel.findOneAndUpdate(
      { username: updateInfo.username },
      updateInfo,
      { new: true }
    )
      // .populate({
      //   path: "username",
      // })
      .populate({
        path: "facultyId",
      })
      .exec()
      .then((info) => {
        console.log("Info", info);
        res.status(200).json(info);
      });
    res.status(200).json(info);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
