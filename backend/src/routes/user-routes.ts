import { Router } from "express";
import appRouter from "./index.js";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();

//define all HTTP words that we will be accepting in the app

userRoutes.get("/",getAllUsers)


//user signup
userRoutes.post("/signup",userSignup)//will be /user/signup


export default userRoutes;

