import { Router } from "express";
import appRouter from "./index.js";
import { getAllUsers, userLogin, userSignup } from "../controllers/user-controllers.js";
import { loginValidator, signupValidator, validate } from "../utils/validators.js";

const userRoutes = Router();

//define all HTTP words that we will be accepting in the app

userRoutes.get("/",getAllUsers)

userRoutes.post("/signup",validate(signupValidator),userSignup)
//user signup
userRoutes.post("/signup",userSignup)//will be /user/signup

//login:

userRoutes.post("/login",validate(loginValidator),userLogin)


export default userRoutes;

