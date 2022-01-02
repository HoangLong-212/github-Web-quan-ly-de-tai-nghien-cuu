import { UserModel } from "../models/UserModel.js";

export const getUser = async (req, res) => {
  try {
    // const user1 = new UserModel({
    //   username: "admin",
    //   password: "123",
    //   role: "Admin",
    // });
    // user1.save();
    // const user2 = new UserModel({
    //   username: "GV03",
    //   password: "123",
    //   role: "Giang Vien",
    // });
    // user2.save();
    // const user3 = new UserModel({
    //   username: "GV04",
    //   password: "123",
    //   role: "Giang Vien",
    // });
    // user3.save();
    // const user4 = new UserModel({
    //   username: "GV05",
    //   password: "123",
    //   role: "Giang Vien",
    // });
    // user4.save();
    

    const Users = await UserModel.find();

    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createUser = async (req, res) => {
  try {
    // const { newUsername, newPassword, newRole } = req.body;
    const newUser = req.body;
  //     if (!newUsername || !newPassword) {
  //   return res.status(400).send("Chưa có tài khoản hoặc mật khẩu");
  // }
    // Check for existing user
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

    res.status(200).json({success: true, message: "Created"});
  } catch (error) {
    res.status(500).json({ error: error });
    // next();
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