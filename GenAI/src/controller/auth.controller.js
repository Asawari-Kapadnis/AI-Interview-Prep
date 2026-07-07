const userModel =require("../models/user.model")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const tokenBlacklistModel =require('../models/blacklist.model')


//register new user
//all user deatil is taken to register - usernae, email, pass
async function registerUserController(req,res){
    const {username , email, passward }=req.body
    
    if(!username || !email || !passward){
        return res.status(400).json({
            message:"please provide username, email amd passward"
        })
    }

    const isUserAlreadyExist = await userModel.findOne({
        $or:[{username},{email}]
    })
     if(isUserAlreadyExist){
        return res.status(400).json({
            message:"account already exist with this username or email"
        })
     }
    
     const hash = await bcrypt.hash(passward ,10)
     const user = await userModel.create({
        username,
        email,
        passward:hash
     })
      const token = jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1d"} 
     )
     res.cookie("token", token)

     res.status(201).json({
        message:"user registered successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email
        }
     })
}


//Login controller 
//user enter login credentials here
 async function loginUserController(req,res){
       console.log(req.body);
    const{email,passward} = req.body

   const user = await userModel.findOne({email})

   if(!user){
    return res.status(400).json({
        message:"invalid email or passward"
    })
   }

   const isPasswardValid =await bcrypt.compare(passward, user.passward)

   if(!isPasswardValid){
    return res.status(400).json({
        message:"invalid email or passward"
    })
   }

   const token = jwt.sign(
        {id: user._id, username: user.username},
        process.env.JWT_SECRET,
        {expiresIn: "1d"} 
     )
 res.cookie("token", token)

 res.status(200).json({
     message:"user login successfully",
        user:{
            id: user._id,
            username: user.username,
            email: user.email
        }
 })
 }

 //creating logout controller 
  async function logoutUserController(req,res){
      const token = req.cookies.token

      if(token){
        await tokenBlacklistModel.create({token})
      }
      res.clearCookie("token")
        res.status(200).json({
            message:"user log out successsfully"

        })
      
  }

  // get me controller- to get login user
  
  async function getMeController(req,res){
     const user = await userModel.findById(req.user.id)


     res.status(200).json({
        message:"user fetched successfully",
        user:{
            id:user._id,
            username:user.username,
            email:user.email       
         }
     })
  }
 module.exports={
    registerUserController,
    loginUserController,
    logoutUserController,
    getMeController
 }