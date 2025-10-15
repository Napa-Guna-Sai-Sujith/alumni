import axios from 'axios';
import { useState } from 'react';

export default function MentorCard({ mentor }) {
  const [requested, setRequested] = useState(false);

  const handleRequest = async () => {
    await axios.post(`/api/users/request/${mentor._id}`, {
      studentId: 'your-student-id' // Replace with actual user ID from context
    });
    setRequested(true);
  };

  return (
    <div className="border p-4 rounded shadow">
      <h3 className="text-xl font-semibold">{mentor.name}</h3>
      <p className="text-gray-600">{mentor.bio}</p>
      <p className="text-sm text-blue-500">Expertise: {mentor.expertise.join(', ')}</p>
      <button
        onClick={handleRequest}
        disabled={requested}
        className={`mt-2 px-4 py-2 text-white ${
          requested ? 'bg-gray-400' : 'bg-green-600'
        }`}
      >
        {requested ? 'Requested' : 'Request Mentorship'}
      </button>
    </div>
  );
}