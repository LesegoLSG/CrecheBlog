import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req,res,next) =>{
    const {firstName,lastName,contact,email,password} = req.body;
    if(!firstName || !lastName || !contact || !email || !password || firstName === '' || lastName === '' || contact === ''  || email === '' || password ===''){
        next(errorHandler(400,"All fields are required"));
    }
    // hash password
    const hashedPassword = bcryptjs.hashSync(password,10);
    //Create a new user
    const newUser = new User({firstName,lastName,contact,email,password:hashedPassword});
    // Save user
    try{
        await newUser.save();
        res.json("Sign up successful.");
    }catch(error){
       next(error);

    }

}