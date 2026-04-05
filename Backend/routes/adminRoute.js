import express from "express";
import { addDoc } from "../controllers/adminController.js";
import upload from "../middleware/multer.js";

const adminRouter = express.Router();

adminRouter.post("/addDoctor", upload.single("image"), addDoc);

export default adminRouter;
