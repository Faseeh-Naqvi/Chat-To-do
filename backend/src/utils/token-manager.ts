import  jwt from "jsonwebtoken";


//function that creates a token from the data
export const createToken =(id:string,email:string,expiresIn:string) => {
    const payload ={
        id,email
    };
    const token= jwt.sign(payload,process.env.JWT_SECRET ,{
        expiresIn,
    });
    return token;
}