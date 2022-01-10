import { UserModel } from "../models/UserModel.js";
//import agron2, { argon2d } from "argon2";

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const users = await UserModel.findOne({ username: username });

    if (users) {
      if (users.password === password) {
        res.status(200).json(users);
      } else {
        res.status(400).send("Sai tài khoản hoặc mật khẩu");
      }
    } else {
      res.status(400).send("Không tồn tại tài khoản");
    }
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
export const verify = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username: username });
    if (!user)
      return res
        .status(400)
        .json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
