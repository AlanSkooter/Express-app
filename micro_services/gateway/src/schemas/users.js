const Joi = require('joi');

exports.createUser = Joi.object({
    password: Joi.string().min(3).max(20).required(),
    login: Joi.string().min(2).required(),
    name: Joi.string().min(2).required(),
})

exports.loginUser = Joi.object({
    password: Joi.string().min(3).max(20).required(),
    login: Joi.string().min(2).required(),
})