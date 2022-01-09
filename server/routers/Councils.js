import express from "express";
import { createCouncil, getCouncil, updateCouncil } from "../controllers/Councils.js";


const router = express.Router();
//http://localhost:5000/Extends

router.get("/", getCouncil);
router.post("/", createCouncil);
router.patch("/:id", updateCouncil);

export default router;