import express  from "express";
import userRouter from "./Routes/userRoutes.js";
import { home } from "./Routes/home.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import Taskrouter from "./Routes/tasks.js";
import { errorHandel } from "./Middlewares/error.js";
import cors from 'cors'



export const app=express();
config({
    path: "./Data/config.env",
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET","POST","PUT","DELETE"],
    credentials: true,
}));
app.use("/api/v1/user",userRouter);
app.use("/api/v1/task",Taskrouter);

app.use(errorHandel);
