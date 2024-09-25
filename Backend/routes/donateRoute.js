const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/donate_once', async (req, res) => {
    const { email, amount } = req.body;

    try {
        const response = await axios.post('https://api.paystack.co/transaction/initialize', {
            email,
            amount: amount * 100 // convert to kobo
        }, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            }
        });

        res.status(200).json({
            status: 'success',
            message: 'Payment initialization successful, complete transaction on Paystack',
            data: response.data.data,
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Payment initialization failed',
            error: error.response ? error.response.data : error.message,
        });
    }
});

router.get('/donate_once/:reference', async (req, res) => {
    const { reference } = req.params;

    try {
        const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
            headers: {
                Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`
            }
        });

        if (response.data.data.status === 'success') {
            return res.status(200).json({
                status: 'success',
                message: 'Payment verified successfully',
                data: response.data.data,
            });
        } else {
            return res.status(400).json({
                status: 'error',
                message: 'Payment verification failed',
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Payment verification failed',
            error: error.response ? error.response.data : error.message,
        });
    }
});

module.exports = router;
