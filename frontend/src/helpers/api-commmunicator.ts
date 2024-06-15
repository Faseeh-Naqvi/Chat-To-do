import axios from "axios"//connects to backend. settings for this defined in main.tsx
//login checker
export const loginUser = async(email:string, password:string)=>{
    const res = await axios.post("/user/login", {email,password});//sends post request to backend for checking the login.
    if (res.status != 200){//200 means okay, so this is if incorrect
        throw new Error("Unable to Login");
    }
    const data = await res.data;
    return data;


}