import express from 'express';
import authRoutes from './routes/auth.routes';
import { connectDB } from './config/db';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

connectDB();

export default app;
