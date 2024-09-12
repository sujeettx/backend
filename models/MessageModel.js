import mongoose from "mongoose";
const MessageSchema  = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    message:{
        type:String,
        required:true,
    }
});


const MessageModel = mongoose.model("message",MessageSchema);

export default MessageModel;