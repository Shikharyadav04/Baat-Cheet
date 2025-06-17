import jwt, { decode } from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(400)
        .json({ error: "Unauthorized : No Token Provided" });
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!decodedToken) {
      return res.status(400).json({ error: "Unauthorized : Invalid Token " });
    }

    const user = await User.findById(decodedToken.userId).select("-password");
    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    req.user = user;

    next();
  } catch (error) {
    console.log("Error in protect route : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default protectRoute;
