import express from "express";
import { addDoc, adminlogin, deletedoc, getAllDoctors } from "../controllers/adminController.js";
import upload from "../middleware/multer.js";
import { authadmin } from "../middleware/authAdmin.js";
import { changeAvailability } from "../controllers/doctorController.js";

const adminRouter = express.Router();

adminRouter.post("/addDoctor", authadmin, upload.single("image"), addDoc);
adminRouter.post("/login",adminlogin);
adminRouter.post("/alldoctors", authadmin, getAllDoctors);
adminRouter.post("/changeavailability", authadmin, changeAvailability);
adminRouter.delete("/deletedoc",authadmin,deletedoc);
export default adminRouter;
