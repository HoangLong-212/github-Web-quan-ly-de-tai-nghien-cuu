import express from "express";
import { getPosts, createPost, updatePost, findPost } from "../controllers/posts.js";

const router = express.Router();
//http://localhost:5000/posts

 router.get("/", getPosts);

 router.post("/", createPost);

router.post("/:id", updatePost);

router.post("/:id", findPost);

export default router;