import express from 'express'
import { editProfile, getProfile, loginUser, registerUser } from '../controllers/userController.js';
import { authUser } from '../middleware/authUser.js';
import upload from '../middleware/multer.js';


const UserRouter = express.Router();

UserRouter.post('/register',registerUser);
UserRouter.post('/login', loginUser);
UserRouter.get('/getprofile',authUser,getProfile);
UserRouter.post('/editprofile',upload.single('image'), authUser,editProfile);

export default UserRouter;