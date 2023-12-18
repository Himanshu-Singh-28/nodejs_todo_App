import express  from "express";
import { deleteTask, myTask, newTask, updateTask } from "../controllers/task.js";
import { userAuth } from "../Middlewares/auth.js";

const Taskrouter = express.Router();

Taskrouter.post("/new", userAuth , newTask );
Taskrouter.get("/mytask", userAuth , myTask );
Taskrouter.route("/:id").put(userAuth,updateTask).delete(userAuth,deleteTask);

export default Taskrouter;