import express from 'express';

export const home=express.Router();

home.get("/",(req,res)=>{
    res.send("<h1>Home Page</h1>");
})