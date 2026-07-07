import React, { useState } from "react";

import '../auth.form.scss';
import { useNavigate , Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Register =()=>{

    const navigate = useNavigate()
    const[username ,setUsername]= useState("")
     const [email,setEmail]=useState("")
    const[passward ,setPassward]= useState("")

    const{loading , handleRegister} = useAuth()

   const handleSubmit= async(e)=>{
    e.preventDefault()

    await handleRegister({username, email,passward})

    navigate("/")
   }

    if(loading){
    return(<main><h1>Loading....</h1></main>)
   }

   return(
        <main>
            <div className="form-container">
                <h1>Register</h1>

               <form  onSubmit={handleSubmit}>

                <div className="input-group">
                    <label htmlFor="username" >Username</label>
                    <input 
                      onChange={(e)=>{setUsername(e.target.value)}}
                    type="username" id="username" name ="username" placeholder="Enter username"></input>
                </div>
                <div className="input-group">
                    <label htmlFor="email" >Email</label>
                    <input 
                    onChange={(e)=>{setEmail(e.target.value)}}
                    type="email" id="email" name ="email" placeholder="Enter email address"></input>
                </div>
                <div className="input-group">
                    <label htmlFor="passward" >Passward</label>
                    <input 
                      onChange={(e)=>{setPassward(e.target.value)}}
                    type="passward" id="passward" name ="passward" placeholder="Enter passward"></input>
                </div>
                <button className="button  primary-btn">Register</button>
               </form>
               <p>Already have an account? <Link to ={"/Login"}> Login</Link></p>
            </div>
        </main>
    )
}

export default Register