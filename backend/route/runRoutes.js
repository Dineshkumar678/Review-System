import express from 'express';

import {getRunData, createRunData, userPhoto} from "../controller/runController.js";

const runRoutes=express.Router();

runRoutes.get("/data/:id",getRunData);

runRoutes.post("/data",createRunData)

runRoutes.get("/data/image/:id",userPhoto);


export default runRoutes;