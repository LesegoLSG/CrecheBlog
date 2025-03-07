import express from 'express';
import { test,signout,updateUser,deleteUser,getUsers, getSingleUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.put('/updateuser/:userId',verifyToken, updateUser);
router.delete('/deleteuser/:userId',verifyToken,deleteUser);
router.post('/signout', signout);
router.get("/getusers", verifyToken, getUsers);
router.get('/getuser/:userId', getSingleUser);

export default router;