const express = require('express');
const Message = require('../models/Message');
const router = express.Router();

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;
  const messages = await Message.find({
    $or: [{ sender: userId }, { receiver: userId }]
  }).sort({ timestamp: 1 });
  res.json(messages);
});

module.exports = router;