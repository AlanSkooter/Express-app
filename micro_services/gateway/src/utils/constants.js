require('dotenv').config();

exports.encryptionKeys = {
    jwtSecret: process.env.JWT,
    passwordSalt: process.env.PW_SALT,
}