import { useState, useEffect } from "react";
import io from "socket.io-client";
import { nanoid } from "nanoid";

const socket = io.connect("/api");

const Chats = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <>
        <h1>Chats</h1>
        {/* Take inputs */}
      <div>
        <input
          type="text"
          value={message}
          placeholder="Enter your message"
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            socket.emit("Souvik", message);
            setMessage("");
          }}
        >
          Send
        </button>
      </div>
        {/* Show messages */}
        <div>
            {messages.map((msg) => (
                <div key={nanoid()}>
                <p>{msg}</p>
                </div>
            ))}
        </div>
    </>
  );
};

export default Chats;
