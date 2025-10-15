import { useEffect, useState } from 'react';
import axios from 'axios';
import MentorCard from '../components/MentorCard';

export default function Mentorship() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    axios.get('/api/users/mentors').then(res => setMentors(res.data));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Find a Mentor</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {mentors.map(mentor => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}