import { log } from 'console';
import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import userRouter from './routes/user.route.js'
import authRouter from './routes/auth.route.js'
dotenv.config()
mongoose.connect(process.env.MONGO)
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });
const app = express();
app.use(express.json())
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})   

app.use('/api/user', userRouter)
app.use('/api/auth', authRouter)