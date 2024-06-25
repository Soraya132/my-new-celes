const express = require('express');
const { payment } = require('../controllers/paymentIntegration');
const router = express.Router();

router.post('/payment', payment);

module.exports = router;