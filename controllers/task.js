import { Task } from "../Models/Task.js";

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    console.log(description);
    await Task.create({
      title: title,
      description: description,
      user: req.user,
    });
    res.status(201).json({
      success: true,
      message: "Task Added Successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const myTask = async (req, res, next) => {
  try {
    const userid = req.user._id;

    const task = await Task.find({ user: userid });

    res.status(200).json({
      success: true,
      task,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const userid = req.params.id;

    const task = await Task.findById(userid);

    task.isCompleted = !task.isCompleted;
    if (!task) return next(new Error("no such id"));

    await task.save();

    res.status(200).json({
      success: true,
      message: "task Updated",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteTask = async (req, res, next) => {
  try {
    const userid = req.params.id;

    const task = await Task.findById(userid);
    if (!task) return next(new Error("invalid id"));
    await task.deleteOne();

    res.status(200).json({
      success: true,
      message: "task Dleated",
    });
  } catch (error) {
    next(error);
  }
};
