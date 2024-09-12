import express from "express";
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
import { connectDb } from './config/db.js';
import messageRouter from './routes/messageRoute.js';

connectDb();
app.use(cors());
app.use(express.json());
app.use('/message', messageRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
