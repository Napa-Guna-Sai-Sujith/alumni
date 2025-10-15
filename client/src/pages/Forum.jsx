import { useEffect, useState } from 'react';
import axios from 'axios';
import ForumPost from '../components/ForumPost';

export default function Forum() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/api/forum').then(res => setPosts(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Forum Discussions</h2>
      {posts.map(post => (
        <ForumPost key={post._id} post={post} />
      ))}
    </div>
  );
}