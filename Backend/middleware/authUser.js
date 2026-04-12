import jwt from "jsonwebtoken";

const authUser = (req, res, next) => {
  try {
    const { token } = req.headers;

    if (!token)
      return res.json({ success: false, message: "Not authorized!!" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.userID = decoded.id; // ✅ FIXED

    next();
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "User login failed" });
  }
};


export {authUser};