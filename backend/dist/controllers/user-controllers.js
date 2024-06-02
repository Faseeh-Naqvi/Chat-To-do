import User from "../models/User.js";
import { hash } from "bcrypt";
export const getAllUsers = async (req, res, next) => {
    //get all users. find all users from database
    try {
        //get them
        const users = await User.find();
        return res.status(200).json({ message: "Here are the users: ", users });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
export const userSignup = async (req, res, next) => {
    try {
        //user signup
        const { name, email, password } = req.body; //destructured the json body in the request
        //create brand new user:
        const hashPass = await hash(password, 10); //already in the package.json ,  Since it is a promise, need to await for it.
        const user = new User({ name, email, password: hashPass }); //makes a new user model isntance, and then puts into it the things we deconstructed from the request.
        await user.save(); //saves record in database
        return res.status(200).json({ message: "User added: ", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(200).json({ message: "ERROR", cause: error.message });
    }
};
//# sourceMappingURL=user-controllers.js.map