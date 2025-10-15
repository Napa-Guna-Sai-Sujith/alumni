import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [data, setData] = useState(null);
  const userId = 'your-user-id'; // Replace with actual user ID

  useEffect(() => {
    axios.get(`/api/users/dashboard/${userId}`).then(res => setData(res.data));
  }, []);

  if (!data) return <div className="p-6">Loading dashboard...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Welcome, {data.user.name}</h2>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Your Posts</h3>
        <ul className="list-disc ml-6">
          {data.posts.map(post => (
            <li key={post._id}>{post.title}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="text-xl font-semibold">Events Attending</h3>
        <ul className="list-disc ml-6">
          {data.events.map(event => (
            <li key={event._id}>{event.title} on {new Date(event.date).toLocaleDateString()}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Recent Messages</h3>
        <ul className="list-disc ml-6">
          {data.messages.slice(-5).map(msg => (
            <li key={msg._id}>{msg.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}