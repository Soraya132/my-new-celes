const express = require("express");
const router = express.Router();
const userControllers = require("../controllers/userControllers");
const authenticateToken = require("../middlewares/authenticateToken");
//create user routes
router.route("/create-user").post(userControllers.createUser);

//update user route
router.route("/update-user/:uuid").put(userControllers.updateUser);

//delete user route
router.route("/delete-user/:uuid").delete(userControllers.deleteUser);

//get user route
router.route("/getme").get(authenticateToken, userControllers.getMe);

//login user
router.route("/login-user").post(userControllers.loginUser);

module.exports = router;
