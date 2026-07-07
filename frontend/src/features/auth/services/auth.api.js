import axios from "axios";

export async function register({username ,email, passward}) {
   try{
     const response =  await axios.post("http://localhost:3000/api/auth/register", {
        username, email,passward
    },{
        withCredentials:true
    })

    return response.data
   }catch(err){
    console.log(err)
   }
   
    
}

export async function login({email,passward}){
    try{

        const response = await axios.post("http://localhost:3000/api/auth/login",{
            email,passward
        },{withCredentials:true})

        return response.data

    }catch(err){
        console.log("Status:", err.response?.status);
    console.log("Response:", err.response?.data);
    throw err;
    }
}


export async function logout(){
    try{
         const response = await axios.get("http://localhost:3000/api/auth/logout"
            ,{withCredentials:true})

        return response.data
    }catch(err){
         console.log(err)
    }
}

export async function getme(){
    try{
         const response = await axios.get("http://localhost:3000/api/auth/getme"
            ,{
                withCredentials:true
            })

        return response.data
    }catch(err){
         console.log(err)
    }

}