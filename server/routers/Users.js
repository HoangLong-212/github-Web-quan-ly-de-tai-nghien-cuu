import express from "express";
import { getUser, createUser, updateUser, deleteUser } from "../controllers/Users.js";

const router = express.Router();
//http://localhost:5000/Users

router.get("/", getUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
