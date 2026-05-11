import express from 'express'
import { addAppointment, cancelAppointment, editProfile, getAppointments, getProfile, loginUser, registerUser } from '../controllers/userController.js';
import { authUser } from '../middleware/authUser.js';
import upload from '../middleware/multer.js';


const UserRouter = express.Router();

UserRouter.post('/register',registerUser);
UserRouter.post('/login', loginUser);
UserRouter.get('/getprofile',authUser,getProfile);
UserRouter.post('/editprofile',authUser, upload.single('image'),editProfile);
UserRouter.post('/addAppointment',authUser, addAppointment);
UserRouter.post('/cancelAppointment',authUser, cancelAppointment);
UserRouter.get('/getAppointments',authUser, getAppointments);
export default UserRouter;