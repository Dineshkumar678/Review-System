import mongoose from "mongoose";

const runSchema =new mongoose.Schema({
    userId:{
        type:mongoose.Schema.ObjectId,
        ref:'users'
    },
    startTime:{
        type:Date,
        default:Date.now
    },
    steps:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

export default mongoose.model('runs',runSchema);