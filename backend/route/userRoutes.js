import express from 'express';

import {createUserData, getUserData} from "../controller/userController.js";

const userRoutes=express.Router();

userRoutes.post("/data",createUserData)

userRoutes.get("/data",getUserData)


export default userRoutes;