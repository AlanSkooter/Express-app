const { sign } = require('jsonwebtoken');
const { encryptionKeys } = require('../utils/constants');

exports.createJwtTokenAsync = (payload = {}) => new Promise((resolve, reject) => {
    const options = {
        expiresIn: '365d'
    }
    sign(payload, encryptionKeys.jwtSecret, options,  (err, token) => {
        if (err) {
            reject(err);
        } else {
            resolve(token);
        }
    })
})