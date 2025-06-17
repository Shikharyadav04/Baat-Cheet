import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import generateAndSetToken from "../utils/generateToken.js";

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

    if (newUser) {
      generateAndSetToken(newUser._id, res);
      await newUser.save();
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

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(400).json({ error: "Invalid User Credentials" });
    }

    generateAndSetToken(user._id, res);

    res.status(201).json({
      id: user._id,
      username: user.username,
      fullName: user.fullName,
      gender: User.gender,
      profilePic: user.profilePic,
      message: "User LoggedIn successfully",
    });
  } catch (error) {
    console.log("Login Controller error : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const logout = (req, res) => {
  try {
    res.cookie("token", "", { maxAge: 0 });
    res.status(201).json({ message: "User Logout Successfully" });
  } catch (error) {
    console.log("Logout Controller error : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { login, signUp, logout };
