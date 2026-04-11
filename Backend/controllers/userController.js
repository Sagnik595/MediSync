import validator from "validator";
import bcrypt from "bcrypt";
import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";

// API to register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password)
      return res.json({ success: false, message: "Input Fields required!!" });
    if (!validator.isEmail(email))
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    if (password.length < 8)
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    const existingUser = await userModel.findOne({ email });
    if (existingUser)
      return res.json({ success: false, message: "User already exists" });
    
    const saltrounds = 10;
    const salt = bcrypt.genSaltSync(saltrounds);
    const hash = bcrypt.hashSync(password, salt);
    const finalUser = {
      name,
      email,
      password: hash,
    };
    const newUser = new userModel(finalUser);
    const user = await newUser.save();

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: error.message });
  }
};

//API for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) return res.json({ success: false, message: "Email empty" });
    if (!password)
      return res.json({ success: false, message: "Password empty" });
    if (!validator.isEmail(email))
      return res.json({ success: false, message: "Enter a valid email" });

    const user = await userModel.findOne({ email });
    if (!user) return res.json({ success: false, message: "No user found!!" });

    if (!bcrypt.compareSync(password, user.password))
      return res.json({ success: false, message: "Wrong password!!" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    return res.json({ success: false, message: `Error!!${error.message}` });
  }
};
export { registerUser, loginUser };
