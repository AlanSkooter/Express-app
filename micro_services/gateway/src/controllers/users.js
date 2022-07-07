const { createPasswordHash } = require('../utils/hashing');
const { createJwtTokenAsync } = require('../services/jwt');
const { findUserByLogin, createNewUser } = require('../services/data-client');

exports.addNewUser = async (req, res) => {
    const { login, password, name } = req.body;
    if (!login || !password || !name) {
        const err = new Error('Введите логин, имя и пароль!');
        err.code = 400;
        throw err;
    }
    const passwordHash = await createPasswordHash(password);
    const { passwordHash: _, ...newUser } = await createNewUser({
        login,
        passwordHash,
        name
    });
    res.send(newUser);
}

exports.loginUser = async (req, res) => {
   const { login, password } = req.body;
    if (!login || !password) {
        const err = new Error('Введите логин и пароль!');
        err.code = 400;
        throw err;
    }
    const user = await findUserByLogin(login);
    if (!user) {
        const err = new Error('User not found.');
        err.code = 404;
        throw err;
    }
    const passwordHash = await createPasswordHash(password);
    if (!user || user.passwordHash !== passwordHash) {
        const err = new Error('Unauthorized.');
        err.code = 401;
        throw err;
    }
    const token = await createJwtTokenAsync({
        sub: user.id,
        iat: Math.floor(Date.now() / 1000),
    });
    res.send({ token });
}