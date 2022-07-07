const { verify } = require('jsonwebtoken');
const { encryptionKeys } = require('../utils/constants');

exports.checkAuth = (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        const err = new Error('Unauthorized.');
        err.code = 401;
        throw err;
      }
    const [_, token] = authorization.split(' ');
    verify(token, encryptionKeys.jwtSecret, (err, decoded) => {
        if (err) {
            const error = new Error('Invalid token.');
            error.code = 401;
            next(error);
        } else {
            req.userTokenData = decoded;
            next();
        }
    })
}