import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import UserRoutes from './routes/user.route.js'

dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {console.log("Mongodb connected")} ).catch(err => {
    console.log(err);
})

const app = express();

app.listen(3001, () =>{
    console.log("Server running on port 3001");
});

app.use('/api/user', UserRoutes);
