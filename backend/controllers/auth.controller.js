import User from "../models/user.model.js";
import bcrypt from "bcrypt";

const signUp = async (req, res) => {
  try {
    const { fullName, username, gender, password, conformPassword } = req.body;

    if (password !== conformPassword) {
      return res.status(400).json({ error: "Password don't match" });
    }

    if (!fullName || !username || !gender) {
      return res.status(400).json({ error: "Invalid Data " });
    }

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exist " });
    }

    const boyPic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlPic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await User.create({
      fullName,
      username,
      gender,
      password: hashedPassword,
      profilePic: gender === "male" ? boyPic : girlPic,
    });

    await newUser.save();

    if (newUser) {
      return res.status(201).json({
        id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        gender: newUser.gender,
        profilePic: newUser.profilePic,
      });
    } else return res.status(400).json({ error: "Invalid user data !!" });
  } catch (error) {
    console.log("SignUp controller error : ", error.message);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
};

const login = (req, res) => {
  res.send("hello login user");
};

export { login, signUp };
