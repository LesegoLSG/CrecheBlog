export const test = ( req, res) =>{
    res.json({message:"API is working!!!"});
}

// Signout functionality
export const signout = (req,res,next) =>{
    try{
        res.clearCookie('access_token').status(200).json('User has been signed out successfully');
    }catch(error){
        next(error);
    }

}