import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
import User from "../models/user.model.js";

export const test = ( req, res) =>{
    res.json({message:"API is working!!!"});
}

// Update user
export const updateUser = async (req,res,next) =>{
    if(req.user.id !== req.params.userId){
        return next(errorHandler(403, "You are not authorized to update user details"));
    }

    // Validate user details using regex
    if(req.body.password){
        if(!req.body.password.match(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/)){
            return next(errorHandler(400, "Password must be atleast 6 characters, one uppercase letter, one digit and a special character."))
        }
        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    if(!req.body.firstName.match(/^[A-Za-z]+$/)){
        return next(errorHandler(400, "first name should contain letters only."));
    }else if(!req.body.lastName.match(/^[A-Za-z]+$/)){
        return next(errorHandler(400, "Last name should contain letters only."));
    }else if(!req.body.contact.match(/^\d{10}$/)){
        return next(errorHandler(400, "Contact details should contain 10 digits only."));
    }else if(!req.body.email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)){
        return next(errorHandler(400, "Incorrect email format, eg johnsmith@gmail.com"));
    }
    
       try{
            const updateUser = await User.findByIdAndUpdate(req.params.userId, {
                $set:{
                  firstName: req.body.firstName,
                  lastName: req.body.lastName,
                  contact: req.body.contact,
                  email: req.body.email,
                  password: req.body.password, 
                  profilePicture: req.body.profilePicture,
                 
                },
            }, {new:true});
            const {password, ...rest} = updateUser._doc;
            res.status(200).json(rest);
       }catch(error){
                next(error);
       }
}

// Signout functionality
export const signout = (req,res,next) =>{
    try{
        res.clearCookie('access_token').status(200).json('User has been signed out successfully');
    }catch(error){
        next(error);
    }

}

// Delete user functionality
export const deleteUser = async (req,res,next) =>{
    if(!req.user.isAdmin && req.user.id !== req.params.userId){
        return next(errorHandler(403, 'You are not authorized to delete this user'));
    }

    try{
        await User.findByIdAndDelete(req.params.userId);
        res.status(200).json('User deleted successfuly');
    }catch(error){
        next(error);
    }  
}

// Get a single user
export const getSingleUser = async (req,res,next) =>{
    try{
        const user = await User.findById(req.params.userId);
        if(!user){
            return next(errorHandler(404, 'User not found'));
        }
        const {password, ...rest} = user._doc;
        res.status(200).json(rest);
    }catch(error){
        next(error);
    }
}

//Get all registered users
export const getUsers = async (req,res,next) =>{

    if(!req.user.isAdmin){
        return next(errorHandler(403,"Sorry... You are not authorized to view this page"))
    }
    try{
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;

        const users = await User.find()
        .sort({ createdAt: sortDirection}).skip(startIndex).limit(limit); 

        const userWithNoPassword = users.map((user) =>{
            const {password, ...rest} = user._doc;
            return rest;
        });

        const totalUsers = await User.countDocuments();

        const currentDay = new Date();
        const oneMonthAgo = new Date(
            currentDay.getFullYear(),
            currentDay.getMonth() - 1,
            currentDay.getDate()
        );

        const lastMonthUsers = await User.countDocuments({
            createdAt:{$gte:oneMonthAgo},
        });

        res.status(200).json({
            users:userWithNoPassword,
            totalUsers,
            lastMonthUsers,
        });


    }catch(error){
        next(error);
    }
}


