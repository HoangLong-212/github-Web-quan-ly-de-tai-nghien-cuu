import express from "express";
import { createExtend, getExtend, updateExtend } from "../controllers/Extends.js"

const router = express.Router();
//http://localhost:5000/Extends

router.get("/", getExtend);
router.post("/", createExtend);
router.patch("/:id", updateExtend);

export default router;