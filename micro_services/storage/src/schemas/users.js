exports.createUser = {
    type: 'object',
    properties: {
        passwordHash: {
            type: 'string',
        },
        login: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
    },
    required: ['passwordHash', 'login', 'name'],
    additionalProperties: true,
}

exports.loginUser = {
    type: 'object',
    properties: {
        login: {
            type: 'string',
        },
    },
    required: ['login'],
    additionalProperties: true,
}