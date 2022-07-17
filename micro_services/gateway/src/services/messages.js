const { createNewMessage } = require('../services/data-client');

exports.addNewMessage = async (message) => {
    message.date = new Date();
    const newMess = await createNewMessage({
      message: message.message,
      date: message.date,
      author: message.author
  });
    return message;
};
