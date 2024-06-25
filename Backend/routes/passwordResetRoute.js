const express = require("express");
const router = express.Router();
const {resetPasswordRequest, resetPassword } = require('../controllers/passwordResetController') 

//password reset request route
router.route('/reset-password-request').post(resetPasswordRequest);

//passowrd reset route
router.route('/reset-password/:token').post(resetPassword );

module.exports = router;