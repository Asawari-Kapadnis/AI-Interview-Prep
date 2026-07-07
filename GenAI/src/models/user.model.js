const mongoose = require('mongoose')

 const userSchema =new mongoose.Schema({
    username:{
        type:String,
        unique:[true , " user name already taken"],
        required: true,
    },
    email:{
        type:String,
        unique:[true, "account already exist with this email"],
        required:true,
    },
    passward:{
        type:String,
        required:true,
        
    }
 })

 const usermodel = mongoose.model("users",userSchema)

 module.exports = usermodel;