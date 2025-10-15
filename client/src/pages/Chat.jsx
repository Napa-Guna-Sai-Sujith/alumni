import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import axios from 'axios';

const socket = io('http://localhost:5000'); // Update with your backend URL

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const userId = 'your-user-id'; // Replace with actual user ID
  const receiverId = 'target-user-id'; // Replace with selected chat partner

  useEffect(() => {
    socket.emit('joinRoom', { userId });

    socket.on('receiveMessage', (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    axios.get(`/api/chat/${userId}`).then((res) => {
      setMessages(res.data);
    });

    return () => socket.disconnect();
  }, []);

  const sendMessage = () => {
    socket.emit('sendMessage', { sender: userId, receiver: receiverId, text });
    setText('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Chat</h2>
      <div className="border p-4 h-96 overflow-y-scroll mb-4">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === userId ? 'text-right' : 'text-left'}`}>
            <span className="inline-block bg-gray-200 p-2 rounded">{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border p-2 flex-grow"
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} className="bg-blue-600 text-white px-4 py-2">
          Send
        </button>
      </div>
    </div>
  );
}