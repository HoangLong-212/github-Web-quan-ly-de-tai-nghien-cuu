import express from "express";
import { createProject, getProject, updateProject } from "../controllers/Projects.js";

const router = express.Router();
//http://localhost:5000/Projects

 router.get("/", getProject);
 router.post("/", createProject);
 router.patch("/:id", updateProject);

 export default router;