import React from "react";
import './mainStyle/ChatMessageStyle.css'

export default function ChatMessages({ messages }) {
  return (
    <div className="chat-messages">
      {messages.map((message, index) => (
        <div key={index} className="message">
            <div className="imageContainer">
            <img src={message.userProfileImage} alt={`${message.user}'s profile`} className="profile-image" />
            </div >
            <div className="message-text">
              
              <strong>{message.user}:</strong>
              <br></br>
              <span>{message.message}</span>
              <span className="timestamp">{message.time}</span>
            </div>
        </div>
      ))}
    </div>
  );
}
