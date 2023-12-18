import { User } from "../Models/user.js";
import bcrypt from "bcrypt";
import { sendcookie } from "../utils/feature.js";

export const getUser = (req, res) => {
  res.status(200).json({
    success: "true",
    user: req.user,
  });
};

export const RegesterUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    let user = await User.findOne({ email });

    if (user)
      return res.status(404).json({
        success: false,
        message: "User Already Exist",
      });

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({ name, email, password: hashedPassword });

    sendcookie(user, res, "Register Successfully", 201);
  } catch (error) {
    next(error);
  }
};

export const LoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    sendcookie(user, res, `welcome back,${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};

export const LogoutUser = (req, res) => {
  res.status(200).cookie("token", "", { 
    maxAge: 0,
    sameSite: process.env.NODE_ENV==="Development"?"lax":"none",
    secure: process.env.NODE_ENV==="Development"?false: true,
  }).json({
    success: true,
    message: "Logged out successfully",
  });
};
