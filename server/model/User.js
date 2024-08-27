const mongoose = require("mongoose");
const {isEmail} = require("validator");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:[true,"Please Enter your firstname"],

    },
    lastName:{
        type:String,
        required:[true,"Please Enter your lastname"],
    }
    ,
    email:{
        type:String,
        required:[true,"Please Enter your Email"],
        unique:true,
        validate:[isEmail,"Please enter Valid Email"]
    },
    description:{
        type:String,
        required:[true,"Please Enter Description"]
    }
})

module.exports = mongoose.model('user',userSchema);