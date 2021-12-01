import { UserModel } from "../models/UserModel.js";
//import agron2, { argon2d } from "argon2";

export const login = async (req, res) => {
  try {
    console.log('username', req.body);
    const { username, password} = req.body;
    
    const users = await UserModel.findOne({username:username});
    console.log(users);
    if(users){     
      if(users.password === password)
      {
        res.status(200).json(users);
      }
      else{
        res.status(400).send("Sai tài khoản hoặc mật khẩu");
      }
    }
    else{
      res.status(400).send("Không tồn tại tài khoản");
    }
    
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
    const user = await UserModel.findOne({ username:newUsername });
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
