const User = require('../model/User');
const {isEmail} = require("validator");


exports.userData = async(req,res)=>{
    try{

        
        const {firstName,lastName,email,description} = req.body;
        
        if(!firstName){
            return res.status(400).json({
            message:"Please enter first name"
        })
    }
    if(!description){
        return res.status(400).json({
            message:"Please enter description"
        })
    }
    if(!lastName){
        return res.status(400).json({
            message:"Please enter last name"
        })
    }
    if(!email){
        return res.status(400).json({
            message:"Please enter email address"
        })
    }

    const data = await User.create({
        firstName,lastName,email,description
    })


    return res.status(200).json({
        message:"Contact Details sent successully",
        data
    })

}catch(err){
    return res.status(400).json({
        message:"Error occurred in userData"
    })
}
}

exports.getUserData = async(req,res)=>{
    try{

        const data  = await User.find(
            // {email:true,description:true}
        );
        
        if(!data){
            return res.status(400).json({
                message:"User data not found"
            })
        }
        return res.status(200).json({
            message:"User data fetched successfully",
            data
        })
    }catch(error){
        return res.status(400).json({
            message:"Error occurred in getUserData"
        })
    }

}