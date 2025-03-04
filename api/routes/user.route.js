import express from 'express';
import { test,signout,updateUser,deleteUser,getUsers } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test);
router.put('/updateuser/:userId',verifyToken, updateUser);
router.delete('/deleteuser/:userId',verifyToken,deleteUser);
router.post('/signout', signout);
router.get("/getusers", verifyToken, getUsers);

export default router;