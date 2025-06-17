import User from "../models/user.model.js";

const getAllUsers = async (req, res) => {
  try {
    const userId = req.user._id;

    const users = await User.find({
      _id: { $ne: userId },
    });

    res.status(200).json({ users });
  } catch (error) {
    console.log("Error in getAllUsers controller : ", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export { getAllUsers };
