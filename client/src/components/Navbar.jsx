import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <Link to="/" className="font-bold">AlumniBridge</Link>
      <div className="space-x-4">
        <Link to="/forum">Forum</Link>
        <Link to="/events">Events</Link>
        <Link to="/mentorship">Mentorship</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}