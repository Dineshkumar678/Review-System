import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import formidableMiddleware from 'express-formidable';

dotenv.config();

import userRoutes from './route/userRoutes.js';
import runRoutes from './route/runRoutes.js';
import connectDB from './config/db.js';

const app=express();

connectDB();

app.use(formidableMiddleware());
app.use(cors());
app.use(express.json());


app.use("/api/v1/user",userRoutes);
app.use("/api/v1/run",runRoutes);



const PORT = 3000;

app.listen(PORT,()=>{
    console.log(`Server is running on on ${PORT}`);
})