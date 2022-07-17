const dbClient = require('../db-client');

exports.createNewMessage = async (ctx) => {
    ctx.body = await dbClient.message.create({
        data: ctx.request.body
    });
}