const mongoose = require("mongoose");

exports.dbConnect= ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(console.log("db connected successfullly"))
    .catch((error)=>{
           console.log("db connection failed");
           console.error(error);
           process.exit(1);
    })
}
