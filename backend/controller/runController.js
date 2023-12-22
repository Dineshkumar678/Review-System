import runModel from "../model/runModel.js";
import userModel from "../model/userModel.js";

export const getRunData = async(req,res)=>{
    try {
        if(!req.params.id){
            return res.status(400).send({ error: 'Id is Required' });
        }
        const userData=await userModel.findById(req.params.id);
        if(!userData){
            return res.status(400).send({ error: 'No User Found' });
        }
        const data = await runModel.find({ userId: req.params.id }).populate({path:'userId', select:'-photo'});
        let totalStep=0;
        let totalAmount=0;
        data.map((element)=>{
            totalStep+=element.steps;
            totalAmount+=element.amount;
        })
        return res.status(200).send({
            success: true,
            message: "Data Fetched",
            data:{
                "userId":{
                    "name":userData.name,
                    "_id":userData._id
                },
                "totalStep":totalStep,
                "totalAmount":totalAmount
            },
            // AllData:data
        })
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            messgae: "Error while getting Data",
            error
        })
    }
}

export const createRunData = async(req,res)=>{
    try{
        const {userId, startTime, steps, amount} = req.fields;
        if(!userId){
            return res.status(400).send({ error: 'UserId is Required' });
        }
        if(!startTime){
            return res.status(400).send({ error: 'Start time is Required' });
        }
        if(!steps){
            return res.status(400).send({ error: 'Steps is Required' });
        }
        if(!amount){
            return res.status(400).send({ error: 'Amount is Required' });
        }
        const date=new Date(startTime);
        console.log(startTime);

        const data = await runModel.create({userId,startTime:date,steps,amount});

        return res.status(201).send({
            success:true,
            message : "Data Added Successfully",
            data
        })
        
    }
    catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            messgae: "Error while Adding Data",
            error
        })
    }
}

export const userPhoto = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id).select("photo");
        if (user.photo?.data) {
            res.set('Content-type', user.photo.contentType);
            return res.status(200).send(user.photo.data);
        }
    }
    catch (error) {
        console.log(error);
        return res.status(500).send({
            success: false,
            message: "Error while fetching photo",
            error
        })
    }
}