import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import { connect } from './config/dbconnect.js';
import connect_cloudinary from './config/cloudinary.js';



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
app.get('/',(req,res)=>{
    res.send("App is working")
})

app.listen(port,()=>{console.log("Server Connected Successfully!!");
})