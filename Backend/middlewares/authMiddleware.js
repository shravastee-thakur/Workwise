import { verifyAccessToken } from "../utils/tokenUtils.js";
import User from "../models/userModel.js";

export const verifyUser = async (req, res, next) => {
  try {
    const authHeader = req.headers.authorization || "Authorization";
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res
        .status(401)
        .json({ message: "Unauthorized: No token provided" });
    }

    const token = authHeader.split(" ")[1];

    const decoded = verifyAccessToken(token);
    if (!decoded || !decoded.id) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: Invalid token",
      });
    }

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized: User no longer exists",
      });
    }

    req.user = {
      id: user._id,
      role: user.role,
    };

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized: Invalid token" });
  }
};
