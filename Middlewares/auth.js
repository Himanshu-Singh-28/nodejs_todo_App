import { User } from "../Models/user.js";
import Jwt from "jsonwebtoken";

export const userAuth=async(req,res,next)=>{
    const { token }= req.cookies;
    
    if(!token) return res.status(404).json({
        success: false,
        message: "Not login yet",
    });

    const decodedtata=Jwt.verify(token,process.env.JWT_SECRATE);

    const user=await User.findById(decodedtata._id);
    req.user = user;
    next();
}