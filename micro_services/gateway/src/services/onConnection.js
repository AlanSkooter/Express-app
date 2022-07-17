const messagesModel = require('./messages')

exports.onConnection = (io, socket) => {
    socket.on('send_mess', async (data) => {
        const newMessage = await messagesModel.addNewMessage(data);
        const time = newMessage.date.toLocaleTimeString();
        io.emit('add_mess', { message: newMessage.message, time: time, author: newMessage.author });
      });
  }