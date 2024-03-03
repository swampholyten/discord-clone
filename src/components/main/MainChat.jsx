import { useState } from "react";
import Navbar from "./Navbar";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function MainChat() {
  const [messages, setMessages] = useState([]);

  const addMessage = (user, message) => {
    const userProfileImage = 'src/assets/lemon.jpg';
    const currentTime = new Date().toLocaleTimeString();
    const newMessage = { user, message, time: currentTime, userProfileImage};
    setMessages([...messages, newMessage]);
  };

  return (
    <>
      <Navbar />
      <ChatMessages messages={messages} />
      <ChatInput addMessage={addMessage} />
    </>
  );
}