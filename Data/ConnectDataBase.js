import mongoose from "mongoose";

export  const ConnectDataBase=()=>{
    mongoose.connect(process.env.MONGO_URL,
    {dbName: "ToDo"})
    .then(()=>{console.log("database connected")})
    .catch((e)=>console.log(e));
}