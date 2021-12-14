import { PostModel } from "../models/PostModel.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostModel.find();
    console.log("posts", posts);
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const createPost = async (req, res) => {
  try {
    const newPost = req.body;

    const post = new PostModel(newPost);
    await post.save();

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const updatePost = async (req, res) => {
  try {
    const updatePost = req.body;

    const post = await PostModel.findOneAndUpdate(
      { _id: updatePost._id },
      updatePost,
      { new: true } 
    );

    res.status(200).json(post);
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export const findPost = async (req, res) => {
  try {
    //console.log('username', req.body);
    const _id = req.body;
    console.log("[_id]",_id);
    
    const post = await PostModel.findOne({_id:_id});
    //console.log(users);
    res.status(200).json(post);
    
  } catch (err) {
    res.status(500).json({ error: err });
  }
};
