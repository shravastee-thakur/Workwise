// export const allowRole = (...roles) => {
//   return (req, res, next) => {
//     if (!roles.includes(req.user.role)) {
//       return res
//         .status(403)
//         .json({ message: "Access denied: insufficient permissions" });
//     }
//     next();
//   };
// };

export const allowRole = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !req.user.role) {
      return res
        .status(401)
        .json({ message: "Unauthorized: user info missing" });
    }

    if (!roles.includes(req.user.role)) {
      return res
        .status(403)
        .json({ message: "Access denied: insufficient permissions" });
    }

    next();
  };
};
