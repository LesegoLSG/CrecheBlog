import express from 'express';
import { verifyToken } from '../utils/verifyUser.js';
import {createComment,getPostComments,likeComment, editComment,deleteComment,getCommentsList} from '../controllers/comment.controller.js'

const router = express.Router();

router.post('/create',verifyToken, createComment);
router.get('/getpostcomments/:postId', getPostComments);
router.put('/likecomment/:commentId', verifyToken, likeComment);
router.put('/editcomment/:commentId', verifyToken,editComment);
router.delete('/deletecomment/:commentId', verifyToken,deleteComment)
router.get('/getcommentslist', verifyToken, getCommentsList)

export default router;