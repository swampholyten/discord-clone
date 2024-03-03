import React from "react";

export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className="message">
            <img src={message.userProfileImage} alt={`${message.user}'s profile`} className="profile-image" />
          <strong>{message.user}:</strong> 
          <span>{message.message}</span>
          <span className="timestamp">{message.time}</span>
        </div>
      ))}
    </div>
  );
}
