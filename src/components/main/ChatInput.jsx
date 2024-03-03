// ChatInput.js

import React, { useState } from 'react';

const ChatInput = ({ addMessage }) => {
  const [user, setUser] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (user && message) {
      addMessage(user, message);
      setMessage('');
      setUser('');
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Your Name"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <textarea
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
};

export default ChatInput;
