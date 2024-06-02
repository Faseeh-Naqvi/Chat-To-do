import { NextFunction, Response, Request } from "express";
import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUsers= async(req:Request,res:Response,next:NextFunction)=> {
    //get all users. find all users from database
    try {
        //get them
        const users = await User.find();
        return res.status(200).json({message:"Okay!!11!1", users});
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
        //create brand new user:
        const hashPass= await hash(password, 10);//already in the package.json ,  Since it is a promise, need to await for it.
        console.log("Hey brother: ",hashPass);
        const user = new User({name,email,hashPass});//makes a new user model isntance, and then puts into it the things we deconstructed from the request.
        await user.save();//saves record in database

        return res.status(200).json({message:"User added: ", id: user._id.toString });
    } catch (error) {
        console.log(error);
        return res.status(200).json({message: "ERROR", cause:error.message});
    }
}