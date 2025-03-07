import Post from "../models/post.model.js";
import { errorHandler } from "../utils/error.js";

// Create a new post
export const create = async (req,res,next) =>{
    if(!req.user.isAdmin){
        return next(errorHandler(403,"You are not authorized to create a post"));
    }
    if(!req.body.title || !req.body.content){
        return next(errorHandler(400, "Please provide all required fields"));
    }

    const slug = req.body.title
        .split(' ')
        .join('-').toLowerCase().replace(/[^a-zA-Z0-9-]/g,'');

    const newPost = new Post({
        ...req.body,
        slug,
        userId:req.user.id,
    });

    try{
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);

    }catch(error){
        next(error);
    }
};

// Get all posts with search functionality
export const getPosts = async (req,res,next) =>{
    try{
        const startIndex = parseInt(req.query.startIndex) || 0;
        const limit = parseInt(req.query.limit) || 9;
        const sortDirection = req.query.order === 'asc' ? 1 : -1;
        const posts = await Post.find({
            ...(req.query.userId && { userId: req.query.userId}),
            ...(req.query.category && { category: req.query.category}),
            ...(req.query.slug && { slug: req.query.slug}),
            ...(req.query.postId && { _id: req.query.postId}),
            ...(req.query.searchTerm && {
                $or: [
                    {title: {$regex: req.query.searchTerm, $options: 'i'}},
                    {content: {$regex: req.query.searchTerm, $options: 'i'}},
                ],
            }),
    }).sort({ updatedAt: sortDirection}).skip(startIndex).limit(limit); 
    
    const totalPosts = await Post.countDocuments();
    const currentDate = new Date();
    
    const oneMonthAge = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        currentDate.getDate()
    );
    
    const lastMonthPosts = await Post.countDocuments({
        createdAt: { $gte:oneMonthAge}
    });
    
    res.status(200).json({
        posts,
        totalPosts,
        lastMonthPosts,
    });
    
    }catch(error){
        next(error)
    }
}
    // Delete a post by postId 
    export const deletePost = async (req,res,next) =>{
        console.log("delete post");
        if(!req.user.isAdmin || req.user.id !== req.params.userId){
            return next(errorHandler(403, "You are not authorized to delete this post"));
        }
    
        try{
            await Post.findByIdAndDelete(req.params.postId);
            res.status(200).json('Post has been deleted');
        }catch(error){
            next(error);
        }
    }

    // Update post functionality
export const updatePost = async (req,res,next) =>{
    if(!req.user.isAdmin || req.user.id !== req.params.userId){
        return next(errorHandler(403, "You are not authorized to delete this post"));
    }

    try{
        const updatedPost = await Post.findByIdAndUpdate(
            req.params.postId,
            {
              $set:{
                title:req.body.title,
                content:req.body.content,
                image:req.body.image,
                category:req.body.category
              }
            },{new:true}
        )
        res.status(200).json(updatedPost);
    }catch(error){
        next(error);
    }
}