import express from "express";
import { createCancel, getCancel, updateCancel } from "../controllers/Cancels.js"

const router = express.Router();
//http://localhost:5000/Extends

router.get("/", getCancel);
router.post("/", createCancel);
router.patch("/:id", updateCancel);

export default router;