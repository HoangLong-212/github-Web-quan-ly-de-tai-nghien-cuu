import express from "express";
import { login } from "../controllers/Logins.js";

const router = express.Router();
//http://localhost:5000/Users

// router.get("/", getUser);
router.post("/Login", login);

export default router;
