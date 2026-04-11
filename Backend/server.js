import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from './config/dbconnect.js';
import connect_cloudinary from './config/cloudinary.js';
import adminRouter from './routes/adminRoute.js';
import doctorRouter from './routes/doctorRoute.js';



const app = express();
const port = process.env.PORT || 3000;


//conecting to database and cloudinary
connect();
connect_cloudinary();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())


//API endpoints
app.use('/api/admin',adminRouter);
app.use('/api/doctor',doctorRouter);

app.get('/',(req,res)=>{
    res.send("App is working")
})

app.listen(port,()=>{console.log("Server Connected Successfully!!");
})