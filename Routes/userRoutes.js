import express from "express";
import { LoginUser, LogoutUser, RegesterUser, getUser } from "../controllers/user.js";
import { userAuth } from "../Middlewares/auth.js";

const userRouter = express.Router();

userRouter.get("/me",userAuth,getUser);
userRouter.post("/register",RegesterUser);
userRouter.post("/login",LoginUser);
userRouter.get("/logout",LogoutUser);

export default userRouter;