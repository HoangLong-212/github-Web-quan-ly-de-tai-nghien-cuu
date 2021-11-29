import { UserModel } from "../models/UserModel.js";
//import agron2, { argon2d } from "argon2";

export const getUser = async (req, res) => {
  try {
    // const user = new UserModel({
    //   username: "admin",
    //   password: "123"
    // })
    // await user.save();
    const users = await UserModel.find();
    console.log("users", users);
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req, res) => {
  const { newUsername, newPassword, newRole } = req.body;

  if (!newUsername || !newPassword) {
    return res.status(400).send("Chưa có tài khoản hoặc mật khẩu");
  }
  try {
    // Check for existing user
    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(400).send("Đã tồn tài tài khoản. Mời bạn nhập tài khoản khác");
    }
    /* Mã hóa password
        const hashedPassword = await argon2.hashed(newPassword), */

    const User = new UserModel(newUsername, newPassword, newRole);
    await User.save();

    res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error: err });
    next();
  }
};

export const updateUser = async (req, res) => {
  try {
    const updateUser = req.body;

    const User = await UserModel.findOneAndUpdate(
      { _id: updateUser._id },
      updateUser,
      { new: true }
    );
    res.status(200).json(User);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
