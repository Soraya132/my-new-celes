const asyncHandler = require("express-async-handler");
const validator = require("validator");
const nodemailer = require("nodemailer");
const { v4: uuidv4 } = require("uuid");
const pool = require("../config/db");

const formController = {
  createForm: asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;
    const uuid = uuidv4();

    //Validation of required fields
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields should be filled" });
    }

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    //validate if the message is a string and it does not exceed 1000 characters
    if (typeof message !== "string") {
      return res.status(400).json({ error: "Invalid message format" });
    }

    try {
      const query = `INSERT INTO form_submissions (name, email, message, uuid) VALUES(?, ?, ?, ?)`;
      const values = [name, email, message, uuid];
      const [result] = await pool.execute(query, values);

      if (result.affectedRows > 0) {
        // Send notification to service provider
        const transporter = nodemailer.createTransport({
          //configure smtp settings to send email notifiations
          host: "mail.celestialcrafters.co.ke",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
          },
        });

        //compose email message for the company
        const companyMessageOption = {
          from: `"Celestial Crafters" <${process.env.EMAIL_USER}>`,
          to:  process.env.CC_EMAIL,
          subject: "New Client Form Submission",
          html: `<p>A new form submission has been received:</p>
           <ul>
             <li><strong>Name:</strong> ${name}</li>
             <li><strong>Email:</strong> ${email}</li>
             <li><strong>Message:</strong> ${message}</li>
           </ul>`,
        };

        //send notifiation email to the company
        await transporter.sendMail(companyMessageOption);
        
        // Compose email message for client confirmation
        const clientMessageOption = {
          from: `"Celestial Crafters" <${process.env.EMAIL_USER}>`,
          to: email,
          subject: "Your Form Submission",
          html: `<p>Dear ${name},</p>
                <p>Thank you for your form submission. We have received your request and will get back to you as soon as possible.</p>
                <p>Best Regards,<br>Celestial Crafters Support</p>`,
        };
  
        //send confirmation message to client
        await transporter.sendMail(clientMessageOption);
       
        // send confirmation response to the client
        return res.status(201).json({ message: "Form created successfully" });
      } else {
        return res.status(500).json({ error: "Failed to create form" });
      }
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        return res.status(400).json({ error: error.sqlMessage });
      } else {
        console.error("Error creating form:".magenta, error);
        return res.status(500).json({ error: "Internal server error" });
      }
    }
  }),

  // Read all form submissions
  getAllForms: asyncHandler(async (req, res) => {
    try {
      const [formSubmissions] = await pool.execute(
        `SELECT * FROM form_submissions`
      );
      return res.status(200).json({ formSubmissions });
    } catch (error) {
      console.error("Error fetching form submissions:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  // Read a single form submission by UUID
  getFormById: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;
    try {
      const [formSubmission] = await pool.execute(
        `SELECT * FROM form_submissions WHERE uuid = ?`,
        [uuid]
      );
      if (formSubmission.length === 0) {
        return res.status(404).json({ error: "Form not found" });
      }
      return res.status(200).json({ formSubmission: formSubmission[0] });
    } catch (error) {
      console.error("Error fetching form by ID:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  // Update a form submission by UUID
  updateForm: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;
    const { name, email, message } = req.body;

    // Validate email format
    if (!validator.isEmail(email)) {
      return res.status(400).json({ error: "Invalid email format" });
    }

    //validate if the message is a string and it does not exceed 1000 characters
    if (typeof message !== "string" || message.length > 1000) {
      return res.status(400).json({ error: "Invalid message format" });
    }

    try {
      const query = `UPDATE form_submissions SET name = ?, email = ?, message = ? WHERE uuid = ?`;
      const values = [name, email, message, uuid];
      const [result] = await pool.execute(query, values);

      if (result.affectedRows > 0) {
        return res.status(200).json({ message: "Form updated successfully" });
      } else {
        return res.status(404).json({ error: "Form not found" });
      }
    } catch (error) {
      console.error("Error updating form :", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  // Delete a form submission by UUID
  deleteForm: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;

    try {
      const [result] = await pool.execute(
        `DELETE FROM form_submissions WHERE uuid = ?`,
        [uuid]
      );
      if (result.affectedRows > 0) {
        return res.status(200).json({ message: "Form deleted successfully" });
      } else {
        return res.status(404).json({ error: "Form  not found" });
      }
    } catch (error) {
      console.error("Error deleting form:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),
};

module.exports = formController;
