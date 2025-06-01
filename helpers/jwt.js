const jwt = require('jsonwebtoken');

function generateToken(payload){
    return jwt.sign(payload, 'cobacoba')
}

function verifyToken(token){
    return jwt.verify(token, 'cobacoba')
}

module.exports = {
    generateToken,
    verifyToken
}