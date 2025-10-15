const express = require('express');
const {
  getMentors,
  requestMentorship
} = require('../controllers/userController');
const router = express.Router();

router.get('/mentors', getMentors);
router.post('/request/:mentorId', requestMentorship);
router.get('/dashboard/:id', getDashboardData);

module.exports = router;