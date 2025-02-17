
import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    email:{
        type : String,
        required :true,
    },
    phone:{
        type:String,
        required:true
    }
});

export const UserModel=mongoose.model("User",UserSchema)