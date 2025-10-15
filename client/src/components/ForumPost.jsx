import { useState } from 'react';
import axios from 'axios';

export default function ForumPost({ post }) {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments || []);

  const handleComment = async () => {
    const res = await axios.post(`/api/forum/${post._id}/comment`, {
      user: 'student-id', // Replace with actual user ID
      text: comment
    });
    setComments(res.data.comments);
    setComment('');
  };

  return (
    <div className="border p-4 mb-4 rounded">
      <h3 className="text-xl font-semibold">{post.title}</h3>
      <p className="text-gray-700">{post.content}</p>
      <p className="text-sm text-blue-600">By {post.author?.name}</p>
      <div className="mt-2">
        <input
          value={comment}
          onChange={e => setComment(e.target.value)}
          placeholder="Add a comment"
          className="border p-2 w-full"
        />
        <button onClick={handleComment} className="bg-blue-500 text-white px-4 py-2 mt-2">
          Submit
        </button>
      </div>
      <ul className="mt-4">
        {comments.map((c, i) => (
          <li key={i} className="text-sm text-gray-600">💬 {c.text}</li>
        ))}
      </ul>
    </div>
  );
}