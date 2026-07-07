const express =  require('express')
const { Router } = require('express')
const authController = require('../controller/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')


const authRouter =Router()

// post api /auth/register
//registerring new user route
authRouter.post("/register", authController.registerUserController)

//login user routes
authRouter.post("/login",authController.loginUserController)


//for loggout user 

authRouter.get("/logout",authController.logoutUserController)

//get api route for -get current user login detail 

authRouter.get("/getme",authMiddleware.authUser, authController.getMeController )
module.exports = authRouter