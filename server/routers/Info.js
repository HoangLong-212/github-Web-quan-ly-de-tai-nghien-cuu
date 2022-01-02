import express from "express";
import { createInfo, getInfo, updateInfo  } from "../controllers/Info.js";

const router = express.Router();
//http://localhost:5000/Info

 router.get("/", getInfo);
 router.post("/", createInfo);
 router.patch("/:id", updateInfo);


export default router;