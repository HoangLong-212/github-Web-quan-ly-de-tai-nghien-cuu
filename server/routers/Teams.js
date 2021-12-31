import express from "express";
import { createTeams, getTeams } from "../controllers/Teams.js";

const router = express.Router();
//http://localhost:5000/Teams

router.get("/", getTeams);
router.post("/", createTeams);

export default router;
