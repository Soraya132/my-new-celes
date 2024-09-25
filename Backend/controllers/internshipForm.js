const asyncHandler = require('express-async-handler');
const pool = require('../config/db');
const validateFormData = require('../utils/validateFormData');
const { v4: uuidv4 } = require("uuid");
const nodemailer = require('nodemailer');

// const logger = winston.createLogger({
//     level: 'info',
//     format: winston.format.json(),
//     transports: [
//         new winston.transports.Console(),
//         new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
//         new winston.transports.File({ filename: 'logs/combined.log' }),
//     ],
// });

const submitForm = asyncHandler(async (req, res) => {
    const validateErrors = validateFormData(req.body);
    if (validateErrors.length > 0) {
        return res.status(400).json({ errors: validateErrors });
    }

    const {
        fullName,
        email,
        gender,
        phoneNumber,
        country,
        highestQualification,
        college,
        currentAcademicYear,
        preferredinternship,
        skillLevel,
        howDidYouLearnAboutUs,
        otherSource,
        inquiry,
        howGainedSkills,
        transactionCode,
        paymentName
    } = req.body;

    const uuid = uuidv4();

    try {
        const conn = await pool.getConnection();

         // Check if the email already exists
         const [existingEmails] = await conn.query(
            `SELECT email FROM intern_applications WHERE LOWER(email) = ?`,
            [email.toLowerCase()]
        );

        if (existingEmails.length > 0) {
            conn.release();
            return res.status(400).json({ error: 'Email already exists.' });
        }

        await conn.beginTransaction();

        const [applicationResult] = await conn.query(
            `INSERT INTO intern_applications (
                uuid,
                full_name,
                email,
                gender,
                phone_number,
                country,
                highest_qualification,
                preferred_internship,
                skill_level,
                how_you_learnt_about_us,
                other_source,
                inquiry,
                transaction_code,
                payment_name
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                uuid,
                fullName,
                email,
                gender,
                String(phoneNumber).trim(),
                country,
                highestQualification,
                preferredinternship,
                skillLevel,
                howDidYouLearnAboutUs,
                howDidYouLearnAboutUs.toLowerCase() === 'other' ? otherSource : null,
                inquiry,
                transactionCode,
                paymentName
            ]
        );

        const applicationId = applicationResult.insertId;

        if (highestQualification.toLowerCase() === 'college/university') {
            await conn.query(
                `INSERT INTO college_info (application_id, college, current_academic_year) VALUES (?, ?, ?)`,
                [applicationId, college, currentAcademicYear]
            );
        } else if (highestQualification.toLowerCase() === 'high school') {
            await conn.query(
                `INSERT INTO skills_info (application_id, how_gained_skills) VALUES (?, ?)`,
                [applicationId, howGainedSkills]
            );
        }

        await conn.commit();
        conn.release();
        // console.log(applicationId);
        // logger.info(`Form submitted successfully. UUID: ${uuid}`);
        // Send email notification to admin
        await sendAdminNotificationEmail(fullName, preferredinternship, transactionCode, paymentName);

        // Send email acknowledgment to the intern
        await sendInternAcknowledgmentEmail(fullName, email);

        res.status(200).json({ message: 'Form submitted successfully.' });

    } catch (err) {
        // logger.error('Error inserting data:', err);
        res.status(500).json({ error: 'An error occurred while submitting the form.' });
    }
});


// Function to send email notification to admin
async function sendAdminNotificationEmail(fullName, preferredinternship, transactionCode, paymentName) {
    const transporter = nodemailer.createTransport({
        host: "mail.celestialcrafters.co.ke",
        port: 465,
        secure: true,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: `"Celestial Crafters" <${process.env.EMAIL_USER}>`,
        to:  process.env.internship_EMAIL,
        subject: 'New Intern Application',
        html: `
            <h1>New Intern Application</h1>
            <p>A new intern has applied:</p>
            <p><strong>Name:</strong> ${fullName}</p>
            <p><strong>Preferred internship:</strong> ${preferredinternship}</p>
            <p><strong>Transaction Code:</strong> ${transactionCode}</p>
            <p><strong>Payment Name:</strong> ${paymentName}</p>
        `
    };

    await transporter.sendMail(mailOptions);
}

// Function to send acknowledgment email to intern
async function sendInternAcknowledgmentEmail(fullName, email) {
    const transporter = nodemailer.createTransport({
        host: "mail.celestialcrafters.co.ke",
          port: 465,
          secure: true,
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: `"Celestial Crafters" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: 'internship Application Submission Received',
        html: `
            <h1>internship Application Submission Received</h1>
            <p>Dear ${fullName},</p>
            <p>We have received your internship application. Thank you for applying!</p>
            <p>We will review your application and get back to you soon.</p>
            <p>Best regards,</p> <br/>
            <br/>
            <br/>
            <p>The Celestial Crafters Team</p>
        `
    };

    await transporter.sendMail(mailOptions);
}


module.exports = submitForm;
