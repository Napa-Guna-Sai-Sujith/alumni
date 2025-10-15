const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'alumni'], default: 'student' },
  bio: String,
  expertise: [String],
  avatar: String
});

module.exports = mongoose.model('User', userSchema);