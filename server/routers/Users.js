import express from "express";
import { getUser, createUser, updateUser } from "../controllers/Users.js";

const router = express.Router();
//http://localhost:5000/Users

router.get("/", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);

export default router;
