const Message = require('../models/Message');

module.exports = (io) => {
  io.on('connection', (socket) => {
    socket.on('sendMessage', async ({ sender, receiver, text }) => {
      const message = new Message({ sender, receiver, text });
      await message.save();
      io.emit('receiveMessage', message);
    });
  });
};