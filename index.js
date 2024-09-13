import express from "express";
import cors from 'cors';
const app = express();
const port = process.env.PORT || 5000;
import { connectDb } from './config/db.js';
import messageRouter from './routes/messageRoute.js';

connectDb();
app.use(cors());
const corsOptions = {
  origin: 'https://portfolio-wbqo.vercel.app/', // Replace with your frontend URL
};
app.use(cors(corsOptions));
app.use(express.json());
app.use('/message', messageRouter);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});
