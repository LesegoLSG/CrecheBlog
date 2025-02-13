import express from 'express';
import { test,signout,updateUser,deleteUser } from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

const router = express.Router();

router.get('/test',test);
router.put('/updateUser/:userId',verifyToken, updateUser);
router.delete('/deleteUser/:userId',verifyToken,deleteUser);
router.post('/signout', signout);

export default router;