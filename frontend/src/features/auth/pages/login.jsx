import React, { useState } from "react";
import '../auth.form.scss';
import { useNavigate , Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Login =()=>{

    const{loading , handleLogin}=useAuth() 
     const navigate = useNavigate()
    
    const [email,setEmail]=useState("")
    const[passward ,setPassward]= useState("")
    
   

   const handleSubmit= async(e)=>{
    e.preventDefault()

    await handleLogin({email,passward})
    navigate('/')
   }
   if(loading){
    return(<main><h1>Loading....</h1></main>)
   }



    return(
        <main>
            <div className="form-container">
                <h1>Login</h1>

               <form  onSubmit={handleSubmit}>


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
                <button className="button  primary-btn">Login</button>
               </form>
              <p>Don't have an account? <Link to ={"/Register"}> Register</Link></p>

            </div>
        </main>
    )
}

export default Login 