import express from 'express'
import 'dotenv/config'
import { connectDB } from './config/db';
import authRouter from './router/auth.route'
const app = express();

connectDB();

app.use(express.json());

app.use('/api/v1/auth', authRouter)

app.listen(5000, () => {
    console.log('Server is running in port 5000');
  });
  