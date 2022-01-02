import express from "express";
import { createFaculty, getFaculty, updateFaculty  } from "../controllers/Faculty.js";

const router = express.Router();
//http://localhost:5000/Faculty

 router.get("/", getFaculty);
 router.post("/", createFaculty);
 router.patch("/:id", updateFaculty);


export default router;