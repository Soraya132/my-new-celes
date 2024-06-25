const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");
const zxcvbn = require("zxcvbn");

const userControllers = {
  // createUser
  createUser: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields should be filled" });
    }

    //Check if the password meets the strength requirements
    const passwordStrength = zxcvbn(password);

    if (passwordStrength.score < 3) {
      return res
        .status(400)
        .json({
          error: "Password is too weak. Please choose a stronger password.",
        });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    try {
      //check if user exists
      const [rows] = await pool.execute(`SELECT * FROM users WHERE email = ?`, [
        email,
      ]);

      if (rows.length > 0) {
        return res.status(400).json({ message: "User alreadyy exists." });
      }

      // Generate UUID for the new user
      const uuid = uuidv4();

      //hash password
      const salt = await bcrypt.genSalt(10);
      const password_hash = await bcrypt.hash(password, salt);

      //query the databse to create admin
      const query = `INSERT INTO users (uuid, username, email, password_hash) VALUES (?, ?, ?, ?);`;

      const values = [uuid, username, email, password_hash];

      const [result] = await pool.execute(query, values);

      if (result.affectedRows > 0) {
        //Fetch the details of the newly created user
        const [newUser] = await pool.execute(
          `SELECT * FROM users WHERE uuid=?`,
          [uuid]
        );
        return res.status(201).json({ user: newUser[0] });
      } else {
        return res.status(400).json({ message: "Invalid data" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ Error: "Internal server error" });
    }
  }),

  //update user
  updateUser: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;
    const { username, email, password } = req.body;

    try {
      // Validate input data
      if (!username || !email || !password) {
        return res.status(400).json({ error: "All fields are required" });
      }

      if (!validator.isEmail(email)) {
        return res.status(400).json({ error: "Invalid email format." });
      }
      // Hash password if provided
      let password_hash;
      if (password) {
        const salt = await bcrypt.genSalt(10);
        password_hash = await bcrypt.hash(password, salt);
      }

      // Update user data in the database
      const updatedValues = [username, email];
      const updateQuery = `UPDATE users SET username=?, email=?, password_hash=? WHERE uuid=?`;
      const updateParams = password_hash
        ? [...updatedValues, password_hash, uuid]
        : [...updatedValues, uuid];
      const [result] = await pool.execute(updateQuery, updateParams);

      // Check if user was updated successfully
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "User not found" });
      }

      // Fetch updated user data
      const [updatedUser] = await pool.execute(
        "SELECT * FROM users WHERE uuid = ?",
        [uuid]
      );

      // Return updated user data
      res.json({ user: updatedUser[0] });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),
  //delete user
  deleteUser: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;

    try {
      const [result] = await pool.execute(`DELETE FROM users WHERE uuid=?`, [
        uuid,
      ]);

      if (result.affectedRows === 0) {
        console.error("Error deleting the user:".magenta, err);
        return res.status(404).json({ message: "User not found" });
      } else {
        return res.status(201).json({ message: "User deleted succesfully." });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ Error: "Internal server error" });
    }
  }),

  loginUser: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format." });
    }

    try {
      // Validate user credentials
      const [userRows] = await pool.execute(
        "SELECT * FROM users WHERE email = ?",
        [email]
      );

      if (!userRows.length) {
        return res.status(401).json({ error: "Invalid email or password" });
      }

      const user = userRows[0];

      // Verify password
      const isPasswordValid = await bcrypt.compare(
        password,
        user.password_hash
      );

      if (!isPasswordValid) {
        return res.status(401).json({ error: "Invalid  password" });
      }

      // Generate JWT token
      const token = jwt.sign(
        {
          userId: user.uuid,
          username: user.username,
          email: user.email,
          role: user.role,
        },
        process.env.JWT_KEY,
        { expiresIn: "1h" } // Token expiration time
      );

      res.json({ token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  //get user details
  getMe: asyncHandler(async (req, res) => {
    res.status(201).json(req.user);
  }),
};

module.exports = userControllers;
