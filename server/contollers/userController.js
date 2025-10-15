const User = require('../models/User');

exports.getMentors = async (req, res) => {
  const mentors = await User.find({ isMentor: true }).select('-password');
  res.json(mentors);
};

exports.requestMentorship = async (req, res) => {
  const { mentorId } = req.params;
  const { studentId } = req.body;
  const mentor = await User.findById(mentorId);
  if (!mentor.menteeRequests.includes(studentId)) {
    mentor.menteeRequests.push(studentId);
    await mentor.save();
  }
  res.json({ message: 'Mentorship request sent.' });
};
exports.getDashboardData = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id).select('-password');
  const posts = await Post.find({ author: id });
  const events = await Event.find({ attendees: id });
  const messages = await Message.find({
    $or: [{ sender: id }, { receiver: id }]
  });

  res.json({ user, posts, events, messages });
};