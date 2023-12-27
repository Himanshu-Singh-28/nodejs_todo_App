import  jwt from "jsonwebtoken";

export const sendcookie=(user,res,message,statusCode=200)=>{
    const token= jwt.sign({_id: user._id},process.env.JWT_SECRATE);

   res.status(201).cookie("token",token,{
    httpOnly: true,
    maxAge:60*60*1000,
    sameSite: process.env.NODE_ENV==="Development"?"lax":"none",
    secure: process.env.NODE_ENV==="Development"?false: true,
   }).json({
    success: true,
    message: message,
   });
}