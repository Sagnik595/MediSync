import express from "express";
import { addDoc, adminlogin } from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import { authadmin } from "../middleware/authAdmin.js";

const adminRouter = express.Router();

adminRouter.post("/addDoctor", authadmin, upload.single("image"), addDoc);
adminRouter.post("/login",adminlogin);

export default adminRouter;
