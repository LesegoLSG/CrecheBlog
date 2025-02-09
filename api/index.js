import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js';
import AuthRoutes from './routes/auth.route.js';

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {console.log("Mongodb connected")} ).catch(err => {
    console.log(err);
})

const app = express();
app.use(express.json());

app.listen(8081, () =>{
    console.log("Server running on port 8081");
});

app.use('/api/user', UserRoutes);
app.use('/api/auth', AuthRoutes);
