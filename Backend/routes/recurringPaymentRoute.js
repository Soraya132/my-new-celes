const express = require('express');
const axios = require('axios');
const router = express.Router();
const crypto = require('crypto');
const { v4: uuidv4 } = require("uuid");
const pool = require("../config/db");

// Initialize payment route
router.post('/donate', async (req, res) => {
    const { email, amount } = req.body;
    const uuid = uuidv4();

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: amount * 100, // convert to kobo
        }, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            }
        });

        // Save transaction details to the database
        const insertQuery = `INSERT INTO transactions (uuid, email, amount, reference) VALUES (?, ?, ?, ?)`;
        const insertValues = [uuid, email, amount, response.data.data.reference];
        const [result] = await pool.execute(insertQuery, insertValues);

        if (result.affectedRows === 0) {
            throw new Error('Failed to save transaction details');
        } else {
            console.log('Transaction details saved successfully');

            res.status(200).json({
                status: 'success',
                message: 'Payment initialization successful, complete transaction on Paystack',
                authorization_url: response.data.data.authorization_url
            });
        }
    } catch (error) {
        console.error('Failed to initialize recurring payment:', error);
        res.status(500).json({
            status: 'error',
            message: 'Payment initialization failed',
            error: error.response ? error.response.data : error.message,
        });
    }
});

// Webhook endpoint
router.post('/webhook', express.json(), async (req, res) => {
    const hash = crypto.createHmac('sha512', process.env.PAYSTACK_SECRET_KEY).update(JSON.stringify(req.body)).digest('hex');
    if (hash !== req.headers['x-paystack-signature']) {
        console.log('Invalid webhook signature');
        return res.status(400).send('Invalid webhook signature');
    }

    const event = req.body;

    console.log('Webhook event received:', event);

    // Validate event
    if (event.event === 'charge.success') {
        const { reference, customer, authorization } = event.data;
        const email = customer.email;
        const authorizationCode = authorization.authorization_code;

        try {
            // Update the transaction with authorization code
            const updateQuery = `UPDATE transactions SET authorization_code = ? WHERE reference = ?`;
            const updateValues = [authorizationCode, reference];
            await pool.execute(updateQuery, updateValues);

            // Create subscription
            const subscriptionResponse = await createSubscription(email, authorizationCode);

            // Log subscription creation
            console.log('Subscription created successfully:', subscriptionResponse);

            res.status(200).send('Webhook received successfully');
        } catch (error) {
            console.error('Failed to process webhook:', error);
            res.status(500).send('Failed to process webhook');
        }
    } else {
    
  
        res.status(200).send('Webhook received');
    }
});

// Function to create subscription
async function createSubscription(email, authorizationCode) {
    try {
        const response = await axios.post('https://api.paystack.co/subscription', {
            customer: email,
            plan: process.env.PLAN_ID, // Replace with your plan ID
            authorization: authorizationCode,
        }, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
                'Content-Type': 'application/json'
            }
        });

        return response.data;
    } catch (error) {
        console.error('Failed to create subscription:', error);
        if (error.response) {
            console.error('Error response from Paystack API:', error.response.data);
        }
        throw error;
    }
};


module.exports = router;