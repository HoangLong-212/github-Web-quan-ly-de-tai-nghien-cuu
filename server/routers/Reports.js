import express from "express";
import { createReport, getReport, updateReport } from "../controllers/Reports.js";

const router = express.Router();
//http://localhost:5000/Projects

 router.get("/", getReport);
 router.post("/", createReport);
 router.patch("/:id", updateReport);
 export default router;