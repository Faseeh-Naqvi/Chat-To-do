import { NextFunction, Request,Response } from "express";
import {  ValidationChain, body, validationResult } from "express-validator";

//our custom validation function

export const validate = (validations: ValidationChain[]) => { 
    return async (req: Request,res: Response,next:NextFunction) => {
        for(let validation of validations){
            const result = await validation.run(req);
            if(!result.isEmpty()){//if there are anny errors
                break;
            }
        }

        const errors = validationResult(req);//final result of validations
        if(errors.isEmpty()){//if there are no errors move onto next middewere
           return next();
        }
        return res.status(422).json({errors:errors.array()});

    }

    
};


export const signupValidator = [
    body("name").notEmpty().withMessage("Please enter your name."),//name should not be empty
    body("email").notEmpty().withMessage("Please enter your email").trim().isEmail().withMessage("Please enter a valid email."),
    body("password").notEmpty().withMessage("please enter a password").isLength({min: 6}).withMessage("Password should contain atleast 6 characters.")//.isStrongPassword().withMessage("this is not a strong password.")

];