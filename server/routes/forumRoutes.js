const express = require('express');
const {
  createPost,
  getPosts,
  addComment
} = require('../controllers/forumController');
const router = express.Router();

router.post('/', createPost);
router.get('/', getPosts);
router.post('/:id/comment', addComment);

module.exports = router;