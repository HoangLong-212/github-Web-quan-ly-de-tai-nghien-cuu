import express from "express";
import { login } from "../controllers/Logins.js";
import { verify } from "../controllers/Logins.js";

const router = express.Router();
//http://localhost:5000/Login


router.post("/", login);
router.get("/", verify)

export default router;
