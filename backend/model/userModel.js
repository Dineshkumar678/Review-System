import mongoose from "mongoose";

const userSchema =new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    photo:{
        data:Buffer,
        contentType:String
    }
},{
    timestamps:true
});

export default mongoose.model('users',userSchema);
