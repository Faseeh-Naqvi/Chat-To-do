import { NextFunction, Response, Request } from "express";
import User from "../models/User.js";
import { hash,compare } from "bcrypt";
import { createToken } from "../utils/token-manager.js";
import { COOKIE_NAME } from "../utils/constants.js";
export const getAllUsers= async(req:Request,res:Response,next:NextFunction)=> {
    //get all users. find all users from database
    try {
        //get them
        const users = await User.find();
        return res.status(200).json({message:"Here are the users: ", users});
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause:error.message});
    }

}

export const userSignup = async ( 
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    try {
        //user signup
        const {name,email,password} = req.body;//destructured the json body in the request
        
        //check existing:
        const existingNewUser = await User.findOne({ email });
        if (existingNewUser) {return res.status(401).send("Email in use.")};
        
        
        //create brand new user:

        
        const hashPass= await hash(password, 10);//already in the package.json ,  Since it is a promise, need to await for it.
        
        const user = new User({name,email,password: hashPass});//makes a new user model isntance, and then puts into it the things we deconstructed from the request.
        await user.save();//saves record in database


        res.clearCookie(COOKIE_NAME,{httpOnly:true,domain:"localhost",signed:true,path:"/"})//we want to remove the previous cookies of the user and set the current cookie.

        //Create token & store cookie
        const token = createToken(user._id.toString(),user.email,"7d")
        //send token in the form of cookies
        
        const expires = new Date();
        expires.setDate(expires.getDate()+7)//expires a week after today

        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true});//sends to frontend

        return res.status(201).json({message:"User added: ", id: user._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause:error.message});
    }
}

export const userLogin = async ( 
    req:Request,
    res:Response,
    next:NextFunction
) =>{
    try {
        //user login
        const {email,password} = req.body;//destructured the json body in the request
        //create brand new user:
        
        //find user by email
        const existingUser = await User.findOne({ email });
        if(!existingUser){
            return res.status(401).send("User does not exist")
        }
        const isPassCorrect =  await compare(password,existingUser.password);
        if (!isPassCorrect) {
            return res.status(403).send("Password is incorrect");
        
        }

        res.clearCookie(COOKIE_NAME,{httpOnly:true,domain:"localhost",signed:true,path:"/"})//we want to remove the previous cookies of the user and set the current cookie.

        //Create token & store cookie
        const token = createToken(existingUser._id.toString(),existingUser.email,"7d")
        //send token in the form of cookies
        
        const expires = new Date();
        expires.setDate(expires.getDate()+7)//expires a week after today

        res.cookie(COOKIE_NAME,token,{path:"/",domain:"localhost",expires,httpOnly:true,signed:true});//sends to frontend

        return res.status(200).json({message:"Login sucsessful ", id: existingUser._id.toString() });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause:error.message});
    }
}

