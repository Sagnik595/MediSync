import express from 'express'
import { getAllDoctors } from '../controllers/adminController.js';

const doctorRouter = express.Router();

doctorRouter.get('/list',getAllDoctors)

export default doctorRouter;