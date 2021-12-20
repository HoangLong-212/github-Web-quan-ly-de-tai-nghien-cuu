import express from "express";
import { getProject } from "../controllers/Projects.js";

const router = express.Router();
//http://localhost:5000/Projects

 router.get("/", getProject);

 export default router;