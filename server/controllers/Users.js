import { UserModel } from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {

    const Users = await UserModel.find();

    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req, res) => {
  try {
   
    const newUser = req.body;
  
    const user = await UserModel.findOne({ username: newUser.username });
    if (user) {
      return res
        .status(400)
        .send("Đã tồn tài tài khoản. Mời bạn nhập tài khoản khác");
    }
    /* Mã hóa password
          const hashedPassword = await argon2.hashed(newPassword), */
    const User = new UserModel({
      username: newUser.username, 
      password: newUser.password, 
      role: newUser.role,
    });
    await User.save();

    
     res.status(200).json(User);
  } catch (error) {
    res.status(500).json({ error: error });
    
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
export const deleteUser = async (req, res, next) => {
  try {
    const {id} = req.params;
    const User = await UserModel.findByIdAndRemove(id);
    res.status(200).json(User);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};