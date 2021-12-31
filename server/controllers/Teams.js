import { TeamModel } from "../models/TeamModel.js";

export const getTeams = async (req, res) => {
  try {
    const teams = await TeamModel.find();
    console.log("teams", teams);
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createTeams = async (data) => {
  // try {
  //   console.log(data);
  //   const newTeam = data;
  //   const team = new TeamModel(newTeam);
  //   await team.save();
  //   return team;
  // } catch (err) {
  //   return err;
  // }
};

// export const updatePost = async (req, res,next) => {
//   try {
//     const updatePost = req.body;

//     const post = await PostModel.findOneAndUpdate(
//       { _id: updatePost._id },
//       updatePost,
//       { new: true }
//     );

//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ error: err });
//     next();
//   }
// };

// export const deletePost = async (req, res) => {
//   try {
//    const {id} = req.params;

//     const post = await PostModel.findByIdAndRemove(id);
//     res.status(200).json(post);
//   } catch (err) {
//     res.status(500).json({ error: err });
//   }
// };
