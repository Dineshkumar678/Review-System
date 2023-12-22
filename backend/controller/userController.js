import userModel from "../model/userModel.js";

import fs from 'fs';


export const createUserData = async(req,res)=>{
    try {
        // console.log(req.files);
        const { name } = req.fields;
        const { photo } = req.files;

        if(!name){
            return res.status(400).send({ error: 'Name is Required' });
        }
        if(!photo){
            return res.status(400).send({ error: 'Photo is Required' });
        }
        if(photo && photo.size>1000000){
            return res.status(400).send({ error: 'Photo is Required and should be less then 1mb' });
        }

        const user = new userModel({ ...req.fields});
        if (photo) {
            user.photo.data = fs.readFileSync(photo.path);
            user.photo.contentType = photo.type
        }
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Created Successfully",
            user
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            error,
            message: "Error while creating user"
        })
    }
}

export const getUserData = async(req,res)=>{
    try{
        const data=await userModel.find({}).select("-photo");
        return res.status(201).send({
            success:true,
            message:"Data Fetched Successfully",
            data
        })
    }   
    catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            error,
            message: "Error while Getting user data"
        })
    } 
}