const dbClient = require('../db-client');

exports.createNewUser = async (ctx) => {
    ctx.body = await dbClient.user.create({
        data: ctx.request.body
    });
}

exports.findUserByLogin = async (ctx) => {
    const user = await dbClient.user.findUnique({
        where: { login: ctx.request.body.login },
        select: {
            passwordHash: true,
            id: true,
            name: true
        }
     });
     ctx.body = { user };
  }