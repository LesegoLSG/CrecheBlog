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

// Google authentication
export const google = async (req,res,next) =>{
    const {name,email,googlePhotoUrl} = req.body;
    const [firstName,lastName] = name.split(" ");

    try{
        const user = await User.findOne({email});
        if(user){
            const token = jwt.sign({id:user.id ,isAdmin:user.isAdmin}, process.env.JWT_SECRET_KEY);
            const {password, ...rest} = user._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly:true,
            }).json(rest);

        }else{
            const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword,10);
            const newUser = new User({
                firstName,
                lastName,
                contact:"0123456789",
                email,
                password: hashedPassword,
                profilePicture:googlePhotoUrl,
            });
            await newUser.save();

            const token = jwt.sign({id:newUser.id, isAdmin:newUser.isAdmin },process.env.JWT_SECRET_KEY);
            const {password, ...rest} = newUser._doc;
            res.status(200).cookie('access_token', token, {
                httpOnly:true,
            }).json(rest);
        }
    }catch(error){
        next(error);
    }
}