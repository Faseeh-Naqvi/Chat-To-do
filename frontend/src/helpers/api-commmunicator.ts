import axios from "axios"
const loginUser = async(email:string, password:string)=>{
    const res = await axios.post("/user/login");

}