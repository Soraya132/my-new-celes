const nodemailer = require("nodemailer");
const asyncHandler = require("express-async-handler");

const sendResetEmail = asyncHandler(async (email, resetToken) => {
  const resetLink = `http://localhost:5000/api/reset-password?token=${resetToken}`;

  // Create a Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER, // Sender email address
      to: email, // Recipient email address
      subject: "Password Reset Request", // Email subject
      html: `<p>click this button to reset your password
      <a href="${resetLink}" style="background-color: #4CAF50; border: none; color: white; padding: 15px 32px; text-align: center; text-decoration: none; display: inline-block; font-size: 16px;">Reset Password</a></p>`, // HTML body (optional)
    });

    console.log("Reset email sent successfully");
  } catch (error) {
    console.error("Error sending reset email:", error);
  }
});

//Send an email to condfirm to the user that the password has been rest successfully

const sendResetConfirmationEmail = async (email) => {
  //create a Nodemailer transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your Gmail password or app-specific password
    },
  });

  try {
    //Send email
    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: email,
      subject: "Password Reset Successful",
      text: "Your Password has been successfully reset",
    });

    console.log("Reset confirmation email sent successfully");
  } catch (error) {
    console.error("Error sending reset confirmation email:", error);
  }
};

module.exports = { sendResetEmail, sendResetConfirmationEmail };
