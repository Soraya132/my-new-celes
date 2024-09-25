const asyncHandler = require('express-async-handler');
const validator = require('validator');
const { v4: uuidv4 } = require('uuid');
const pool = require('../config/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const generateResetToken = require('../utils/resetToken');
const  { sendResetEmail, sendResetConfirmationEmail }= require('../utils/sendResetEmail');

// Endpoint for password reset request
const resetPasswordRequest = asyncHandler(async (req, res) => {
    const { email } = req.body;

    if(!validator.isEmail(email)) {
        return res.status(400).json({error: 'Invalid email format' })
    }

    try {
        //check if the user with the provided email exists
        const [userRows] = await pool.execute('SELECT * FROM users WHERE email = ?', [email]);


        if(userRows.length == 0) {
            return res.status(404).json({ error: 'User not found'})
        }
        
        // Generate a unique reset token
        const resetToken  = generateResetToken(email);
        console.log(resetToken);
        //save the reset token in the databse
        const [result] = await pool.execute('UPDATE users SET reset_token = ? WHERE email = ?', [resetToken, email]);
        console.log(result);
        //Send the password reset email to the user
        const sentEmail = await sendResetEmail(email, resetToken);
        console.log(sentEmail);
        //return a success response
        return res.status(200).json({ message: 'Check your email for password reset link'});
    
    } catch(error) {
        console.error('Error handling password reset request:', error);
        return res.status(500).json({ error: 'Internal server error' })
    }

});


//End point for password reset form submission
const resetPassword = asyncHandler(async (req, res) => {
   try {
    // Extract reset token from query parameters
    const resetToken = req.query.token;

    //Verify reset token
    const decoded = jwt.verify(resetToken, process.env.JWT_KEY);

    //check if token is valid and not expired
    if (!decoded || !decoded.email) {
        return res.status(400).json({ error: 'Invalid or expired reset token' });
    }

    //Extract email from decoded token
    const { email } = decoded;

    //Retrieve user from databse using email
    const [userRows] = await pool.execute(`SELECT * FROM users WHERE email = ?`, [email]);
    const user = userRows[0];

    //check if the user exists
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    //Generate new password hash
    const { newPassword, confirmPassword } = req.body;

    //check if the passwords match
    if(newPassword !== confirmPassword) {
        return res.status(400).json({ error: 'Passwords do not match'})
    }

    const salt = await bcrypt.genSalt(10);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    //update user's password in the databse
    await pool.execute('UPDATE users SET password_hash = ? WHERE  email = ?', [newPasswordHash, email]);
    
    // Update the user's reset token to null or remove it from the databse
    await pool.execute('UPDATE users SET reset_token = NULL WHERE email = ?', [email]);

    //send a confirmation email to the user
    await sendResetConfirmationEmail(email);

    //send a response indicating a successful password reset
    return res.status(200).json({ message: 'Password reset successfully' });

} catch (error) {
    console.error('Error resseting password:', error);
    return res.status(500).json({ error: 'Internal server error' });
}
});

module.exports = { resetPasswordRequest, resetPassword };
