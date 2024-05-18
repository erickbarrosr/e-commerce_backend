import jwt from "jsonwebtoken";
import User from "../models/User";

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.SECRET);

    const user = await User.findOne({ _id: decoded._id });

    if (!user) {
      throw new Error();
    }

    req.token = token;

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Authentication required." });
  }
};

export default auth;
