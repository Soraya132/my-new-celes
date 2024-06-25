const jwt = require('jsonwebtoken');

// Generate a unique token with an expiry time of 1 hour
const generateResetToken = (email) => {

    const token = jwt.sign({email: email}, process.env.JWT_KEY, {expiresIn: '1hr'})
    return token;
};

module.exports = generateResetToken;
