import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

// Sign up functionality
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

// Sign in functionality
export const signin = async (req,res,next) =>{
    const {email, password} = req.body;

    if(!email || !password || email === '' || password === ''){
       return next(errorHandler(400, "All fields are required"));
    }

    try{
        const validUser = await User.findOne({email});
        if(!validUser){
            return next(errorHandler(404,'Incorrect credentials'));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if(!validPassword){
           return next(errorHandler(400, 'Incorrect credentials'));
        }

        const token = jwt.sign(
            {id:validUser._id, isAdmin:validUser.isAdmin},
           
            process.env.JWT_SECRET_KEY,
        );

        const {password: pass, ...rest} = validUser._doc;

        res.status(200).cookie('access_token', token, {
            httpOnly:true
        }).json(rest);
        

    }catch(error){
        next(error);
    }
} 