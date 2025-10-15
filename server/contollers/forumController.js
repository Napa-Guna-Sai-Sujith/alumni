const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  const { author, title, content, tags } = req.body;
  const post = new Post({ author, title, content, tags });
  await post.save();
  res.status(201).json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'name');
  res.json(posts);
};

exports.addComment = async (req, res) => {
  const { id } = req.params;
  const { user, text } = req.body;
  const post = await Post.findById(id);
  post.comments.push({ user, text });
  await post.save();
  res.json(post);
};