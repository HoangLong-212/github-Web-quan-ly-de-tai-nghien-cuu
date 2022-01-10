import { FacultyModel } from "../models/FacultyModel.js";
import { UserModel } from "../models/UserModel.js";

export const getFaculty = async (req, res) => {
  try {
    const faculty = await FacultyModel.find();

    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createFaculty = async (req, res) => {
  try {
    const newFaculty = req.body;

    const Faculty = new FacultyModel(newFaculty);
    await Faculty.save();
    res.status(200).json(Faculty);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updateFaculty = async (req, res) => {
  try {
    const updateFaculty = req.body;

    const faculty = await FacultyModel.findOneAndUpdate(
      { username: updateFaculty.username },
      updateFaculty,
      { new: true }
    );
    res.status(200).json(faculty);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
