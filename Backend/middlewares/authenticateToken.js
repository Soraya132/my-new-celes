const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const pool = require("../config/db");

const authenticateToken = asyncHandler(async (req, res, next) => {
  console.log('authenticateToken middleware called for path:', req.path);
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ error: "Token is required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    console.log(decoded);
    // Query the database to check if the user exists
    const [userRows] = await pool.execute(
      "SELECT * FROM users WHERE uuid = ?",
      [decoded.userId]
    );

    console.log(userRows);

    if (!userRows.length) {
      return res.status(401).json({ error: "User does not exist" });
    }

    // Attach user information to the request
    req.user = userRows[0];
    next();
  } catch (error) {
    console.error(error);
    return res.status(403).json({ error: "Invalid token" });
  }
});

module.exports = authenticateToken;
