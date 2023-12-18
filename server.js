import { app } from "./app.js";
import {ConnectDataBase} from "./Data/ConnectDataBase.js";

ConnectDataBase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is working on Port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`);
});